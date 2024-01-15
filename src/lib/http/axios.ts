import axios from 'axios';
import { z } from 'zod';
import { injectable } from 'inversify';

const CourseDTOSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

const CourseListDTOSchema = z.array(CourseDTOSchema);

type CourseDTO = z.infer<typeof CourseDTOSchema>;
@injectable()
export class AxiosClient {
  public instance = axios.create({
    // TODO: move to env
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000,
  });
}
