import { FormEvent, useEffect, useRef } from 'react';
import { type BookedSession, useBookedSessionContext } from '../../store/book-session.context';
import Modal, { ModalHandle } from '../UI/Modal';
import Input from '../UI/Input';
import { Button } from '../UI/Button';

type BookedSessionProps = {
  session: BookedSession;
  closeModal: () => void;
};
export default function BookedSessions({ session, closeModal }: BookedSessionProps) {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useBookedSessionContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    sessionsCtx.addSession(session);
    closeModal();
  }

  return (
    <Modal ref={modal} closeModal={closeModal}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button textOnly onClick={closeModal}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
