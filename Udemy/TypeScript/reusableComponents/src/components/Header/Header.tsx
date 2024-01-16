import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../UI/Button';
import UpcomingSessions from '../UpcomingSessions/UpcomingSessions';

import classes from './header.module.scss';

export default function Header() {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessionsVisible(true);
  }

  function hideUpcomingSessions() {
    setUpcomingSessionsVisible(false);
  }

  return (
    <>
      {upcomingSessionsVisible && <UpcomingSessions onClose={hideUpcomingSessions} />}
      <header className={classes.container}>
        <h1 className={classes.header_logo}>ReactMentoring</h1>
        <nav className={classes.header_nav}>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : '')}>
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink to="sessions" className={({ isActive }) => (isActive ? classes.active : '')}>
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
