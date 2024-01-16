import { useEffect, useRef } from 'react';
import Modal, { ModalHandle } from '../UI/Modal';
import { useBookedSessionContext } from '../../store/book-session.context';
import UpcomingSession from './UpcomingSession';

type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useBookedSessionContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelingSession(id: string) {
    sessionsCtx.removeSession(id);
  }

  return (
    <Modal ref={modal} closeModal={onClose}>
      <h2>Upcoming Sessions</h2>
      {sessionsCtx.sessions.length > 0 && (
        <ul>
          {sessionsCtx.sessions.map((session) => {
            return (
              <li key={session.id}>
                <UpcomingSession
                  session={session}
                  onCancel={() => handleCancelingSession(session.id)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </Modal>
  );
}
