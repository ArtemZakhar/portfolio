import { SessionItem } from './SessionItem.tsx';

type Session = {
  id: string;
  title: string;
  description: string;
  duration: number;
  summary: string;
  date: string;
  image: string;
};

type SessionsListProps = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session: Session) => {
        const { id, title, summary, image } = session;
        return (
          <li key={id} className="session-item">
            <SessionItem id={id} title={title} summary={summary} image={image} />
          </li>
        );
      })}
    </ul>
  );
}
