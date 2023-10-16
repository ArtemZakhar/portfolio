import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';

// import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
 const [events, setEvents] = useState([]);
 const router = useRouter();
 const filteredData = router.query.slug;

 const { data, error } = useSWR(
  'https://nextjs-test-75afc-default-rtdb.europe-west1.firebasedatabase.app/events.json',
  (url) => fetch(url).then((res) => res.json())
 );

 useEffect(() => {
  if (data) {
   const loadingEvents = Object.entries(data).map(([id, eventObject]) => {
    return { id: id, ...eventObject };
   });
   setEvents(loadingEvents);
  }
 }, data);

 let pageHeadData = (
  <Head>
   <title>Filtered events</title>
   <meta name="description" content={`A list of filtered events`} />
  </Head>
 );

 if (!events) {
  return (
   <Fragment>
    {pageHeadData}
    <p className="center">Loading</p>
   </Fragment>
  );
 }

 const filteredYear = filteredData[0];
 const filteredMonth = filteredData[1];

 const numYear = Number(filteredYear);
 const numMonth = Number(filteredMonth);

 pageHeadData = (
  <Head>
   <title>Filtered events</title>
   <meta name="description" content={`All events for ${numMonth}/${numYear}`} />
  </Head>
 );

 if (isNaN(numYear) || isNaN(numMonth) || error) {
  return (
   <Fragment>
    {pageHeadData}
    <ErrorAlert>
     <p>Invalid filter. Please adjust your values.</p>
    </ErrorAlert>
    <div className="center">
     <Button link="/events">Show all events</Button>
    </div>
   </Fragment>
  );
 }

 let filteredEvents = events.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
 });

 if (!filteredEvents || filteredEvents.length === 0) {
  return (
   <Fragment>
    {pageHeadData}
    <ErrorAlert>
     <p>No events found for the chosen events.</p>
    </ErrorAlert>
    <div className="center">
     <Button link="/events">Show all events</Button>
    </div>
   </Fragment>
  );
 }

 const date = new Date(numYear, numMonth - 1);

 return (
  <Fragment>
   {pageHeadData}
   <ResultsTitle date={date} />
   <EventList items={filteredEvents} />
  </Fragment>
 );
}

/* export async function getServerSideProps(context) {
 const { params } = context;

 const filteredData = params.slug;

 const filteredYear = filteredData[0];
 const filteredMonth = filteredData[1];

 const numYear = Number(filteredYear);
 const numMonth = Number(filteredMonth);

 if (isNaN(numMonth) || isNaN(numYear)) {
  return {
   props: { hasError: true },
   // notFound: true,
   // redirect: {
   //   destination: '/error'
   // }
  };
 }

 const filteredEvents = await getFilteredEvents({
  year: numYear,
  month: numMonth,
 });

 return {
  props: {
   events: filteredEvents,
   date: {
    year: numYear,
    month: numMonth,
   },
  },
 };
} */

export default FilteredEventsPage;
