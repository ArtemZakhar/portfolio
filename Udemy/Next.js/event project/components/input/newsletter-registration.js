import { useRef, useContext } from 'react';

import NotificationContext from '../../store/notification-contex';

import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
 const emailInputRef = useRef();
 const notificationCtx = useContext(NotificationContext);
 
 function registrationHandler(event) {
  event.preventDefault();

  const enteredEmail = emailInputRef.current.value;
  const reqData = { email: enteredEmail };
  const dataJson = JSON.stringify(reqData);

  notificationCtx.showNotification({
   title: 'Signing up...',
   message: 'Registering for newsletter.',
   status: 'pending',
  });

  fetch('/api/newsletter', {
   method: 'POST',
   body: dataJson,
   headers: { 'Content-Type': 'application/json' },
  })
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    return res.json().then((data) => {
     throw new Error(data.message || 'Something when wrong!');
    });
   })
   .then((data) => {
    notificationCtx.showNotification({
     title: 'Success!',
     message: 'Successfully registered for newsletter.',
     status: 'success',
    });
    console.log(data);
   })
   .catch((error) => {
    notificationCtx.showNotification({
     title: 'Error!',
     message: error.message || 'Something went wrong',
     status: 'error',
    });
   });
 }

 return (
  <section className={classes.newsletter}>
   <h2>Sign up to stay updated!</h2>
   <form onSubmit={registrationHandler}>
    <div className={classes.control}>
     <input type="email" id="email" placeholder="Your email" aria-label="Your email" ref={emailInputRef} />
     <button>Register</button>
    </div>
   </form>
  </section>
 );
}

export default NewsletterRegistration;
