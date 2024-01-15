import { useEffect, useMemo, useState } from 'react';
import { MviViewModel } from './MviViewModel';

const useViewModel = <STATE, EVENT, EFFECT>(baseViewModel: MviViewModel<STATE, EVENT, EFFECT>) => {
  const viewModel = useMemo(() => baseViewModel, []);
  const [uiState, setUiState] = useState(viewModel.setInitialState());

  useEffect(() => {
    const uiStateSubscription = viewModel.uiState.subscribe((state: STATE) => {
      setUiState(state);
    });

    return () => {
      uiStateSubscription.unsubscribe();
    };
  }, []);

  return {
    uiState,
    viewModel,
  };
};

export default useViewModel;
