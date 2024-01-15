import { useEffect, useMemo } from 'react';
import useViewModel from '@/lib/mvvm/useViewModel';
import LoginScreenViewModel from '@/modules/educational/presentation/login/LoginScreenViewModel';
import { LoginScreenEvent } from '@/modules/educational/presentation/login/contract/LoginScreenEvent';
import LoginScreenSuccessState from '@/modules/educational/presentation/login/view/LoginScreenSuccessState';
import myContainer from '@/lib/di/inversify.config';
import { TYPES } from '@/modules/educational/di/EducationalModule';
import LoadingState from '@/design-system/state/LoadingState';
import { LoginScreenState } from '@/modules/educational/presentation/login/contract/LoginScreenState.ts';

function LoginRoute() {
  const { uiState, viewModel } = useViewModel(myContainer.get<LoginScreenViewModel>(TYPES.LoginScreenViewModel));

  useEffect(() => {
    viewModel.onTriggerEvent(new LoginScreenEvent.OnCreated());
  }, []);

  useEffect(() => {
    viewModel.sideEffectFlow.subscribe((effect) => {
      switch (effect.kind) {
        default:
      }
    });
  }, []);

  switch (uiState.kind) {
    case 'loading':
      return <LoadingState className="min-h-screen" />;
    case 'success':
      // return (
      //   <input
      //     value={uiState.emailField}
      //     onChange={(e) => {
      //       viewModel.onTriggerEvent(new LoginScreenEvent.OnEmailFieldChanged(e.target.value));
      //     }}
      //   />
      // );
      return <LoginScreenSuccessState successState={uiState} onTriggerEvent={(e) => viewModel.onTriggerEvent(e)} />;
    default:
  }
}

export default LoginRoute;
