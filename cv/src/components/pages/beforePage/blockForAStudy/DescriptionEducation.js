import { useId } from 'react';
import DescrEducationkList from './DescrEducationkList';

const DescriptionEducation = ({studyInfo, active}) => {
  const idForAch = useId();
  
  const elements = studyInfo.map(item => {
    const {id, rise, achievements, ...itemProps} = item;
    
    const workStyle = {
      display: rise && active ? "block" : "none"
    }

    const viewAchivments = achievements.map((item) =>
        <li>{item}</li> 
    )

    return (
      <>
        <div className="descr_study_info__track"
          key={id}
          style={workStyle}>
          <DescrEducationkList {...itemProps}/>
        </div>
        <div className="achievements_study_info__track"
          key={idForAch}
          style={workStyle}>
          <ul>{viewAchivments}</ul>
        </div>
      </>
    )
  })
  
  return (
    <>
      {elements}
    </>
  )
}

export default DescriptionEducation;