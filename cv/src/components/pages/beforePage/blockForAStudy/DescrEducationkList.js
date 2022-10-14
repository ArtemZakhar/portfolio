const DescrEducationkList = (props) => {

  return (
   <>
        <h2>
          {props.name} <br/>
          {props.graduated}
        </h2>
        <span className="grey">{props.place}</span>
        <div className="compInfo">{props.descr}</div>
    </>
  )
}

export default DescrEducationkList;