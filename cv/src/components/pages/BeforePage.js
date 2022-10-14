import { useState } from 'react';
import {Link} from 'react-router-dom';
import DataForJob from './beforePage/blockForAJob/DataForJob';
import MainInfo from './beforePage/MainInfo';
import Expirience from './beforePage/blockForAJob/Expirience';
import Description from './beforePage/blockForAJob/Description';
import DataForStudy from './beforePage/blockForAStudy/DataForStudy';
import Education from './beforePage/blockForAStudy/Education';
import DescriptionEducation from './beforePage/blockForAStudy/DescriptionEducation';

import './beforePage/beforePage.scss';


const BeforePage = () => {
  const {jobInfo, onToggleRise} = DataForJob();
  const {studyInfo, onToggleRiseStudy} = DataForStudy();
  const [activeList, setActiveList] = useState(false);
  const [activeStudyList, setActiveStudyList] = useState(false);

  const onActive = () => {
    setActiveList(activeList => !activeList);
  }

  const onActiveStudy = () => {
    setActiveStudyList(activeStudyList => !activeStudyList);
  }

  return (
    <div>
      <div className="app__oldCV">
        <MainInfo/>

        <Expirience jobInfo={jobInfo} 
        onToggleRise={onToggleRise}
        active={activeList}
        onActive={onActive}/>
        <Description jobInfo={jobInfo}
        active={activeList}/>

        <Education studyInfo={studyInfo}
        onToggleRiseStudy={onToggleRiseStudy}
        active={activeStudyList}
        onActiveStudy={onActiveStudy}/>
        <DescriptionEducation studyInfo={studyInfo}
        active={activeStudyList}/>
      </div>
      

      <Link to={`/after`} className="btn afterBtn atBeforePage">
        <div>Частина життя <br/> після JavaScript</div>
      </Link>
    </div>
  )

  
}

export default BeforePage;