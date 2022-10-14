import { useId } from 'react';

import WorkList from './WorkList';

const Description = ({active, jobInfo}) => {
  const idForAch = useId();
  
  const elements = jobInfo.map(item => {
    const {id, rise, achievements, ...itemProps} = item;
    
    const workStyle = {
      display: rise && active ? "block" : "none"
    }

    const viewAchivments = achievements.map((item) =>
        <li>{item}</li> 
    )

    return (
      <>
        <div className='descr_info__track'
          key={id}
          style={workStyle}>
          <WorkList {...itemProps}/>
        </div>
        <div className="achievements_info__track"
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

export default Description;
