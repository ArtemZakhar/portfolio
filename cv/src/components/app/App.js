import {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './../spinner/Spinner';

const AppHeader = lazy(() => import ("../appHeader/AppHeader"));
const MainPage = lazy(() => import ("../pages/MainPage"));
const BeforePage = lazy(() => import ('../pages/BeforePage'));
const AfterPage = lazy(() => import ('../pages/AfterPage'));
const Page404 = lazy(() => import('../pages/404'));

const App = () => {

  return (
    <BrowserRouter>
      <div className="appCV">
        <AppHeader/>
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path='/before' element={<BeforePage/>}/>
              <Route path='/after' element={<AfterPage/>}/>
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;