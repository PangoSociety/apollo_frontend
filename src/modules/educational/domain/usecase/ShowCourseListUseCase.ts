import { Either } from 'fp-ts/lib/Either';
import { either } from 'fp-ts';
import { CourseRepository } from '../repository/CourseRepository';
import { Course } from '../entity/Course';

enum CourseDomainFailure {
  CourseListNotAvailable,
}

export class ShowCourseListUseCase {
  constructor(private courseRepository: CourseRepository) {}

  invoke(): Either<CourseDomainFailure, Array<Course>> {
    return either.left(CourseDomainFailure.CourseListNotAvailable);
  }
}
