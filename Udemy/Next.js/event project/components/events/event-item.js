import Image from 'next/image';

import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import AddressIcon from '../icons/address-icon';

function EventItem(props) {
 const { title, img, date, location, id } = props;

 const readableDate = new Date(date).toLocaleDateString('uk-UA', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
 });

 const formatedAdress = location.replace(', ', '\n');

 const exploreLink = `/events/${id}`;

 return (
  <li className={classes.item}>
   <Image src={`/${img}`} alt={title} width={250} height={160} />
   <div className={classes.content}>
    <div className={classes.summary}>
     <h2>{title}</h2>
     <div className={classes.date}>
      <DateIcon />
      <time suppressHydrationWarning>{readableDate}</time>
     </div>
     <div className={classes.address}>
      <AddressIcon />
      <address>{formatedAdress}</address>
     </div>
    </div>
    <div className={classes.actions}>
     <Button link={exploreLink}>
      <span>Explore Event</span>
      <span className={classes.icon}>
       <ArrowRightIcon />
      </span>
     </Button>
    </div>
   </div>
  </li>
 );
}

export default EventItem;
