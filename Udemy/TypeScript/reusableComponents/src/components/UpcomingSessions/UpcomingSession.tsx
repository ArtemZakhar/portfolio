import { BookedSession } from '../../store/book-session.context';
import { Button } from '../UI/Button';

type UpcomingSessionProps = {
  session: BookedSession;
  onCancel: () => void;
};
export default function UpcomingSession({ session, onCancel }: UpcomingSessionProps) {
  return (
    <article className="upcoming-session">
      <div>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <time dateTime={new Date(session.date).toISOString()}>
          {new Date(session.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>
      </div>
      <p className="actions">
        <Button onClick={onCancel} textOnly>
          Cancel
        </Button>
      </p>
    </article>
  );
}
