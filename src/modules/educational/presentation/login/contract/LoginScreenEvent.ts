// eslint-disable-next-line max-classes-per-file
import { Sealed } from '@/lib/ts/Sealed';

export namespace LoginScreenEvent {
  export class OnLoginFormSubmit implements Sealed {
    kind = 'onLoginFormSubmit' as const;
  }
  export class OnEmailFieldChanged implements Sealed {
    kind = 'onEmailFieldChanged' as const;

    constructor(public value: string) {}
  }

  export class OnCreated implements Sealed {
    kind = 'onCreated' as const;
  }

  export type Root = OnLoginFormSubmit | OnEmailFieldChanged | OnCreated;
}
