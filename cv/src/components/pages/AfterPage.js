import {Link} from 'react-router-dom';

import MainInfo from "./afterPage/MainInfo";
import ProjectList from './afterPage/blockForPortfolio/projectList/ProjectList'
import CourseFilters from './afterPage/blockForPortfolio/courseFilters/CourseFilters'
import CourseDescription from "./afterPage/blockForPortfolio/courseDescription/CourseDescription";
import ProjectDescription from "./afterPage/blockForPortfolio/projectDescription/ProjectDescription";

import './afterPage/AfterPage.scss';

const AfterPage = () => {
  return (
    <div>
      <div className="app__newCV">
        <MainInfo/>
        <CourseFilters/>
        <ProjectList/>
        <div className="description_info__track">
          <CourseDescription/>
          <ProjectDescription/>
        </div>
      </div>

      <Link to={`/before`} className="btn afterBtn nextPage">
        <div>Частина життя <br/> до JavaScript</div>
      </Link>
    </div>
  )
}

export default AfterPage;