import { Button } from '../UI/Button';

type SessionItemProps = {
  id: string;
  image: string;
  title: string;
  summary: string;
};
export function SessionItem({ id, image, title, summary }: SessionItemProps) {
  return (
    <>
      <img src={image} alt={title} />
      <div className="session-data">
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="actions"></div>
        <Button to={`/sessions/${id}`}>Lean More</Button>
      </div>
    </>
  );
}
