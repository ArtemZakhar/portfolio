import { useSelector } from "react-redux";

const ProjectDescription = () => {

  const {projects, activeCourse} = useSelector(state => state.projects);
  const { activeFilter } = useSelector(state => state.filters);

  const viewProject = (arr, activeFilter) => {

    return arr.map(({id, name, description, githubLink, gDiskLink, course}) => {
            
      if (activeCourse === name && activeFilter === course ) {
        return <div key={id}>
          Проект <span>{name}</span> <br/><br/>
          Опис: {description} <br/><br/>
          <a href={githubLink}>GitHub</a> <br/><br/>
          <a href={gDiskLink}>GoogleDisk</a> <br/><br/>
        </div>
      } else {
        return null
      }

    })
  }
  const elements = viewProject(projects, activeFilter);

  return (
      <div>
        {elements}
      </div>
  )
}

export default ProjectDescription;