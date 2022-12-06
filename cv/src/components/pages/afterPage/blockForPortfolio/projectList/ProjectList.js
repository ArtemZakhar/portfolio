import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { fetchProjects } from './projectSlice';
import ProjectsListItem from "../projectsListItem/ProjectsListItem";
import Spinner from '../../../../spinner/Spinner';

const ProjectList = () => {

    const filteredProjectSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.projects.projects,
        (filter, projects) => {
            if (filter === 'Udemy') {
                return projects;
            } else {
                return projects.filter(item => item.course === filter)            
            }
        }
    );
    const filtredProjects = useSelector(filteredProjectSelector);
    const projectsLoadingStatus = useSelector(state => state.projects.projectsLoadingStatus);
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
  
        // eslint-disable-next-line
    }, []);

    if (projectsLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (projectsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Помилка завантаження</h5>
    }

    const renderProjectList = (arr) => {
    
        return arr.map(({id, ...props}) => {
            return <ProjectsListItem key={id} {...props}  />
        })
    }

    const elements = renderProjectList(filtredProjects);

    return (
        <div className='portfolio_info__track'>
            {elements}
        </div>
    )
}

export default ProjectList;