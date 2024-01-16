import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import BookedSessionContextProvider from '../store/book-session.context';

export default function Root() {
  return (
    <BookedSessionContextProvider>
      <Header />
      <Outlet />
    </BookedSessionContextProvider>
  );
}
