import { Fragment } from 'react';
import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
 return <Fragment>
  <PostContent post={props.post} />
  <Head>
    <title>{props.post.title}</title>
    <meta name="description" content={props.post.excerpt} />
   </Head>
 </Fragment>;
}

export function getStaticProps(context) {
 const { params } = context;
 
 const { slug } = params;
 const postData = getPostData(slug);
 return {
  props: {
   post: postData,
  },
  revalidate: 1000,
 };
}

export function getStaticPaths() {
 const postFilesNames = getPostsFiles();
 const slugs = postFilesNames.map((fileName) => fileName.replace(/\.md$/, ''));
 return {
  paths: slugs.map((slug) => ({ params: { slug: slug } })),
  fallback: false,
 };
}

export default PostDetailPage;