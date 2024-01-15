import { inject, injectable } from 'inversify';
import { MviViewModel } from '@/lib/mvvm/MviViewModel';
import { LoginScreenEvent } from '@/modules/educational/presentation/login/contract/LoginScreenEvent';
import { LoginScreenEffect } from '@/modules/educational/presentation/login/contract/LoginScreenEffect';
import { TYPES } from '@/modules/educational/di/EducationalModule';
import type CourseRepository from '@/modules/educational/domain/repository/CourseRepository';
import { pipe } from 'fp-ts/function';
import { fold } from 'fp-ts/Either';
import delay from '@/lib/ts/Delay.ts';
import { LoginScreenState } from './contract/LoginScreenState';

// @injectable()
export default class LoginScreenViewModel extends MviViewModel<
  LoginScreenState.Root,
  LoginScreenEvent.Root,
  LoginScreenEffect.Root
> {
  // constructor(@inject(TYPES.NetworkCourseRepository) private courseRepository: CourseRepository) {
  //   super();
  // }

  setInitialState(): LoginScreenState.Root {
    return new LoginScreenState.Loading();
  }

  async onTriggerEvent(event: LoginScreenEvent.Root) {
    switch (event.kind) {
      case 'onEmailFieldChanged':
        await this.onEmailFieldChanged(event.value);
        break;
      case 'onCreated':
        await this.onCreated();
        break;
      default:
    }
  }

  private async onCreated() {
    this.reduce(new LoginScreenState.Success('', '', []));
  }

  private async onEmailFieldChanged(value: string) {
    const stateShot = this.uiStateValue as LoginScreenState.Success;
    this.reduce({ ...stateShot, emailField: value });
  }
}
