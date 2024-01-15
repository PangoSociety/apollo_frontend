// eslint-disable-next-line max-classes-per-file
import { Sealed } from '@/lib/ts/Sealed';
import { Course } from '@/modules/educational/domain/entity/Course';

export namespace LoginScreenState {
  export class Loading implements Sealed {
    kind = 'loading' as const;
  }

  export class Success implements Sealed {
    kind = 'success' as const;

    constructor(
      public logoUrl: string,
      public emailField: string,
      public courseList: Array<Course>
    ) {}
  }

  export type Root = Loading | Success;
}
