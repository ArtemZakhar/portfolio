import { useSelector } from "react-redux";

const CourseDescription = () => {

  const {filters, activeFilter} = useSelector(state => state.filters);

  const viewDescr = (arr) => {

    return arr.map(({id, description}) => {
            
      if (activeFilter === id) {
        return <div key={id}>
          Курс <span>{id}</span> <br/><br/>
          Опис: {description}
        </div>
      } else {
        return null
      }

    })
  }

  const elements = viewDescr(filters);

  return (
      <div>
          {elements}
      </div>
  )
}

export default CourseDescription;