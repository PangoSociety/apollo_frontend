import { Either } from 'fp-ts/lib/Either';
import { either } from 'fp-ts';
import { injectable } from 'inversify';
import { CourseRepository } from '@/modules/educational/domain/repository/CourseRepository.ts';
import { RepositoryFailure } from '@/modules/sharedkernel/domain/repository/RepositoryFailure.ts';
import { Course } from '@/modules/educational/domain/entity/Course.ts';
// import {injectable} from "inversify";
//
// @injectable()
@injectable()
export class FakeCourseRepository implements CourseRepository {
  async getCourseList(): Promise<Either<RepositoryFailure, Array<Course>>> {
    return either.right([
      { id: '1', name: 'Course 1' },
      { id: '2', name: 'Course 2' },
    ]);
  }
}
