import { Sealed } from '@/lib/ts/Sealed';

export namespace EducationalValidationFailure {
  export class EmailInvalid implements Sealed {
    kind = 'emailInvalid' as const;
  }

  export type Root = EmailInvalid;
}
