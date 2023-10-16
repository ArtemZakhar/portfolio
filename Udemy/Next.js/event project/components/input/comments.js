import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-contex';

function Comments(props) {
 const { eventID } = props;
 const [showComments, setShowComments] = useState(false);
 const [comments, setComments] = useState([]);
 const notificationCtx = useContext(NotificationContext);
 const [isFetchingComments, setIsFetchingComments] = useState(false);

 useEffect(() => {
  if (showComments) {
   setIsFetchingComments(true);
   fetch('/api/comments/' + eventID)
    .then((res) => res.json())
    .then((data) => {
     setComments(data.comments);
     notificationCtx.showNotification;
     setIsFetchingComments(false);
    });
  }
 }, [showComments]);
 
 function toggleCommentsHandler() {
  setShowComments((prevStatus) => !prevStatus);
 }

 function addCommentHandler(commentData) {
  notificationCtx.showNotification({
   title: 'Sending comment...',
   message: 'Your comment is currently being stored into a database.',
   status: 'pending',
  });

  fetch(`/api/comments/${eventID}`, {
   method: 'POST',
   body: JSON.stringify(commentData),
   headers: {
    'Content-Type': 'application/json',
   },
  })
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    return res.json().then((data) => {
     throw new Error(data.message || 'Something went wrong!');
    });
   })
   .then((data) => {
    notificationCtx.showNotification({
     title: 'Success!',
     message: 'Comment successfully saved.',
     status: 'success',
    });
    console.log(data);
   })
   .catch((e) => {
    notificationCtx.showNotification({
     title: 'Error!',
     message: e.message || 'Something went wrong!',
     status: 'error',
    });
   });
 }

 return (
  <section className={classes.comments}>
   <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
   {showComments && <NewComment onAddComment={addCommentHandler} />}
   {showComments && !isFetchingComments && <CommentList items={comments} />}
   {showComments && isFetchingComments && <p>Loading...</p>}
  </section>
 );
}

export default Comments;