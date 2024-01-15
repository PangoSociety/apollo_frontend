import { Either } from 'fp-ts/lib/Either';
import { either } from 'fp-ts';
import { inject, injectable } from 'inversify';
import CourseRepository from '@/modules/educational/domain/repository/CourseRepository';
import RepositoryFailure from '@/modules/sharedkernel/domain/repository/RepositoryFailure';
import { Course } from '@/modules/educational/domain/entity/Course';
import { TYPES } from '@/modules/educational/di/EducationalModule';
import { AxiosClient } from '@/lib/http/axios';
// import {injectable} from "inversify";
//
// @injectable()
@injectable()
export default class NetworkCourseRepository implements CourseRepository {
  constructor(@inject(TYPES.AxiosClient) private client: AxiosClient) {}

  async getCourseList(): Promise<Either<RepositoryFailure, Array<Course>>> {
    const response = await this.client.instance.get<Array<Course>>('/v1/courses');
    console.log('TENEMOS la respuesta');
    console.log(response.data);
    return either.right(response.data);
  }

  // async getCourseList(): Either<RepositoryFailure, Array<Course>> {
  //   const courses =  await this.client.instance.get<Array<Course>>("/v1/courses")
  //   return either.right([{id: "1", name: "Course 1"}, {id: "2", name: "Course 2"}]);
  // }
}
