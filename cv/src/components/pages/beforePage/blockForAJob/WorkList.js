const Worklist = (props) => {

  const viewDuties = props.duties.map((item) => 
    <li>{item}</li>
  )

  return (
   <>
        <h2>
          {props.terms}<br/>{props.time}
        </h2>
        <span className="grey">{props.place}, <a href={props.web}>{props.webToShow}</a></span>
        <div className="compInfo">{props.profile}<br/>
          <ul className="ulList">
            <li>- {props.descr}</li>
          </ul>
        </div>
        <h2>{props.position}</h2>
        <span>
          <ul className="ulList">
            {viewDuties}
          </ul>
        </span>
    </>
  )
}

export default Worklist;