import { configureStore } from '@reduxjs/toolkit';
import projects from '../projectList/projectSlice';
import filters from '../courseFilters/CourseFilterSlice';


const store = configureStore( {
  reducer: {projects, filters},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;