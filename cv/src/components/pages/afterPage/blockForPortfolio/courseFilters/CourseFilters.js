import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { activeFilterChanged, filtersFetch } from "./CourseFilterSlice";
import Spinner from "../../../../spinner/Spinner";


const CourseFilters = () => {

  const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersFetch());
    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner/>;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Помилка завантаження</h5>
  }

  const renderFilters = (arr) => {

    return arr.map(({id, label}) => {
      let btnClass = '';
      if (id === activeFilter) {
        btnClass = 'active-style';
      }
      
      return <p key={id}>
        <span
        className={btnClass}
        
        id={id}
        onClick={() => dispatch(activeFilterChanged(id))}
        >{label}</span>
      </p>
    })
  }

  const elements = renderFilters(filters);

  return (
      <div className="courses_info__track">
          {elements}
      </div>
  )
}

export default CourseFilters;