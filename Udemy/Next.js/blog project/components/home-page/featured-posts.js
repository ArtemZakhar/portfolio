import PostGrid from '../posts/posts-grip';
import classes from './featured-posts.module.css';

function FeaturedPosts(props) {
 return (
  <section className={classes.latest}>
    <h2>Featured Posts</h2>
    <PostGrid posts={props.posts}/>
  </section>
  );
}

export default FeaturedPosts;
