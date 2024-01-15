// eslint-disable-next-line max-classes-per-file
import { Sealed } from '@/lib/ts/Sealed';
import { NonEmptyArray } from 'fp-ts/NonEmptyArray';
import { EducationalValidationFailure } from '@/modules/educational/domain/failure/EducationalValidationFailure.ts';
import { Option } from 'fp-ts/Option';

export namespace LoginFormState {
  export class Loading implements Sealed {
    kind = 'loading' as const;
  }

  export class Success implements Sealed {
    kind = 'success' as const;

    constructor(
      public emailField: string,
      public emailErrors: Option<NonEmptyArray<EducationalValidationFailure.Root>>
    ) {}
  }
  export type Root = Success | Loading;
}
