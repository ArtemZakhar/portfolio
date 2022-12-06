import { useDispatch, useSelector } from 'react-redux';

import { activeProject } from './../projectList/projectSlice';

const ProjectsListItem = ({id, image, name}) => {
  const {activeFilter} = useSelector(state => state.filters);
  const {activeCourse} = useSelector(state => state.projects);

  const dispatch = useDispatch();

  let activeClass = null
  let chosenCourse = null

  if (activeCourse === name) {
    chosenCourse = "courses__item_clicked";
  }

  const projectsToShow = {
    display: activeFilter === "Udemy" ? "none" : "block"
  }

  function selectedItem (e) {
    e.target.classList.add('courses__item_selected');
  }
  function nonSelectedItem (e) {
    e.target.classList.remove('courses__item_selected');
    
  }
  return (
      <div

        style={projectsToShow}
        onClick ={() => dispatch(activeProject(name))}
        key = {id}>
          <img src={image} 
              onMouseOver = {selectedItem}
              onMouseOut = {nonSelectedItem}
              className={`${chosenCourse} ${activeClass}`} 
              id = {id}
              alt={name} 
             
              style={{'objectFit': 'cover'}}/>
      </div>
  )
}

export default ProjectsListItem;