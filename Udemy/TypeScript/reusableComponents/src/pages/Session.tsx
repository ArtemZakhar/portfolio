import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import { Button } from '../components/UI/Button.tsx';
import { useState } from 'react';
import BookedSession from '../components/Sessions/BookedSession.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [modalVisible, setModalVisible] = useState(false);
  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  function handleModalVisible() {
    setModalVisible((prevState) => !prevState);
  }

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  const session = {
    id: loadedSession.id,
    title: loadedSession.title,
    summary: loadedSession.summary,
    date: loadedSession.date,
  };

  return (
    <main id="session-page">
      {modalVisible && <BookedSession session={session} closeModal={handleModalVisible} />}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button onClick={handleModalVisible}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
