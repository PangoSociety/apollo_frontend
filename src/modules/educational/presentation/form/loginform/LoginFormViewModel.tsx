import { MviViewModel } from '@/lib/mvvm/MviViewModel.ts';
import { LoginFormState } from '@/modules/educational/presentation/form/loginform/contract/LoginFormState.ts';
import { LoginFormEvent } from '@/modules/educational/presentation/form/loginform/contract/LoginFormEvent.ts';
import { LoginFormEffect } from '@/modules/educational/presentation/form/loginform/contract/LoginFormEffect.ts';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { undefined } from 'zod';
import { getSemigroup, NonEmptyArray } from 'fp-ts/NonEmptyArray';
import {
  getApplicativeValidation,
  getAltValidation,
  Either,
  mapLeft,
  right,
  left,
  getOrElse,
  orElse,
  fold,
} from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { sequenceT } from 'fp-ts/Apply';
import { inject, injectable } from 'inversify';
import ValidateEmailUseCase from '@/modules/educational/domain/usecase/validation/ValidateEmailUseCase.ts';
import { TYPES } from '@/modules/educational/di/EducationalModule.ts';
import { getLeft, getRight, none } from 'fp-ts/Option';

@injectable()
export default class LoginFormViewModel extends MviViewModel<
  LoginFormState.Root,
  LoginFormEvent.Root,
  LoginFormEffect.Root
> {
  constructor(@inject(TYPES.ValidateEmailUseCase) private validateEmailUseCase: ValidateEmailUseCase) {
    super();
  }

  onTriggerEvent(event: LoginFormEvent.Root) {
    switch (event.kind) {
      case 'onEmailFieldChanged':
        this.onEmailFieldChanged(event.value);
        break;
      case 'onCreated':
        this.onCreated();
        break;
      case 'onFormSubmit':
        break;
      default:
        break;
    }
  }

  setInitialState(): LoginFormState.Root {
    return new LoginFormState.Loading();
  }

  private async onCreated() {
    this.reduce(new LoginFormState.Success('', none));
  }

  public async otraCosa() {
    console.log('otra cosa');
  }

  private onEmailFieldChanged(value: string) {
    const stateShot = this.uiStateValue as LoginFormState.Success;
    const either = this.validateEmailUseCase.invoke(value);
    const emailErrors = pipe(either, getLeft);
    this.reduce({ ...stateShot, emailField: value, emailErrors });
    // this.reduce({ ...stateShot, emailField: value });
  }
}
