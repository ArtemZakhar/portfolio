import {Link} from 'react-router-dom';

import './mainPage/mainPage.scss';

const MainPage = () => {
  return (
    <section className="mainBtns">
      <Link to={`/before`} className="btn beforeBtn">
        <div>Частина життя <br/> до JavaScript</div>
      </Link>

      <Link to={`/after`} className="btn afterBtn">
        <div>Частина життя <br/> після JavaScript</div>
      </Link>
  </section>
  )
}

export default MainPage;