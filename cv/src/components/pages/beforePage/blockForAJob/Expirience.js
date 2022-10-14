import List from './List';

const  Expirience = ({active, jobInfo, onActive, onToggleRise}) => {
  const elements = jobInfo.map(item => {
    const {id, rise, ...ItemProps} = item;
    
    return (

      <List 
      key={id}
      {...ItemProps}
      rise={rise}
      onToggleRise={() => onToggleRise(id)}/>
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
    <div className="expirience_info__track">
        <div className={classNameforJob}>
          <span onClick={onActive}>Робота</span>
        </div>
        <div className={classNameForList}
        style={active ? {maxHeight: '80px'} : {maxHeight: '0'}}>
          {elements}
        </div>
    </div>
  )
}

export default Expirience;