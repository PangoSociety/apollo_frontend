import { Either } from 'fp-ts/lib/Either';
import RepositoryFailure from '@/modules/sharedkernel/domain/repository/RepositoryFailure';
import { Course } from '../entity/Course';

export default interface CourseRepository {
  getCourseList: () => Promise<Either<RepositoryFailure, Array<Course>>>;
}
