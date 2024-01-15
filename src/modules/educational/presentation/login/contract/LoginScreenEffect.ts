import { Sealed } from '@/lib/ts/Sealed';

export namespace LoginScreenEffect {
  export class ShowToast implements Sealed {
    kind = 'showToast' as const;
  }

  export type Root = ShowToast;
}
