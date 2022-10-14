import EducationList from "./EducationList";

const Education = ({studyInfo, onToggleRiseStudy, active, onActiveStudy}) => {
  const elements = studyInfo.map(item => {
    const {id, rise, ...ItemProps} = item;
    
    return (

      <EducationList 
      key={id}
      {...ItemProps}
      rise={rise}
      onToggleRiseStudy={() => onToggleRiseStudy(id)}/>
    )
  })

  let classNameforJob = 'accordion-heading';
  if (active) {
    classNameforJob += ' active-style';
  }


  let classNameForList = 'accordion-block-content';
  if (active) {
    classNameForList = 'accordion-block-content__active';
  }


  return (
    <div className="expirience_study_info__track">
        <div className={classNameforJob}>
          <span onClick={onActiveStudy}>Освіта</span>
        </div>
        <div className={classNameForList}
        style={active ? {maxHeight: '80px'} : {maxHeight: '0'}}>
          {elements}
        </div>
    </div>
  )
}

export default Education;