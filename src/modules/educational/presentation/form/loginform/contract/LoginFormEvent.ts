// eslint-disable-next-line max-classes-per-file
import { Sealed } from '@/lib/ts/Sealed';

export namespace LoginFormEvent {
  export class OnCreated implements Sealed {
    kind = 'onCreated' as const;
  }
  export class OnFormSubmit implements Sealed {
    kind = 'onFormSubmit' as const;
  }
  export class OnEmailFieldChanged implements Sealed {
    kind = 'onEmailFieldChanged' as const;

    constructor(public value: string) {}
  }
  export type Root = OnCreated | OnEmailFieldChanged | OnFormSubmit;
}
