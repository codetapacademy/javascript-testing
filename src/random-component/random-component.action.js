import { CREATE_COURSE } from "./random-component.constant";

export const createCourse = (title = '') => ({
  type: CREATE_COURSE,
  title
})
