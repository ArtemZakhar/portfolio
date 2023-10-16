import { Fragment, useContext } from 'react';
import Head from 'next/head';

import { getEventById, getFeaturedEvents } from '../../helpers/api-util';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Comments from '../../components/input/comments';
import Notification from '../../components/ui/notification';
import NotificationContext from '../../store/notification-contex';

function DeterminedEventPage(props) {
 const notificationCtx = useContext(NotificationContext);
 const activeNotification = notificationCtx.notification;
 console.log(notificationCtx);
 console.log(activeNotification);
 const event = props.selectedEvent;

 if (!event) {
  return <p>No event found</p>;
 }

 return (
  <Fragment>
   <Head>
    <title>{event.title}</title>
    <meta name="description" content={event.description} />
   </Head>
   <EventSummary title={event.title} />
   <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
   <EventContent>
    <p>{event.description}</p>
   </EventContent>
   <Comments eventID={event.id} />
   {activeNotification && (
    <Notification
     title={activeNotification.title}
     message={activeNotification.message}
     status={activeNotification.status}
    />
   )}
  </Fragment>
 );
}

export async function getStaticProps(context) {
 const eventID = context.params.eventID;
 const event = await getEventById(eventID);

 return {
  props: {
   selectedEvent: event,
  },
  revalidate: 60,
 };
}

export async function getStaticPaths() {
 const events = await getFeaturedEvents();
 const paths = events.map((event) => ({ params: { eventID: event.id } }));
 return {
  paths: paths,
  fallback: true,
 };
}

export default DeterminedEventPage;
