import { FC, useEffect, useState } from 'react';
import { MviViewModel } from './MviViewModel';

interface MviViewModelProps<STATE, EVENT, EFFECT> {
  viewModel: MviViewModel<STATE, EVENT, EFFECT>;
}

function useViewModel<STATE, EVENT, EFFECT>({ viewModel }: MviViewModelProps<STATE, EVENT, EFFECT>): null {
  const [uiState, setUiState] = useState(viewModel.setInitialState());

  useEffect(() => {
    const uiStateSubscription = viewModel.uiState.subscribe(setUiState);

    return () => {
      uiStateSubscription.unsubscribe();
    };
  }, [viewModel]);

  useEffect(() => {
    const effectSubscription = viewModel.effectChannel.subscribe((effectValue: EFFECT) => {
      // Handle side effect in your React component
      console.log('Side Effect:', effectValue);
    });

    return () => {
      effectSubscription.unsubscribe();
    };
  }, [viewModel]);

  const onTriggerEvent = async (event: EVENT) => {
    await viewModel.onTriggerEvent(event);
  };

  return null; // Render your React component here
}

// export const MviViewModelComponent: FC<MviViewModelProps<any, any, any>> = ({
//   viewModel,
// }) => {
//   const [uiState, setUiState] = useState(viewModel.setInitialState());

//   useEffect(() => {
//     const uiStateSubscription = viewModel.uiState$.subscribe(setUiState);

//     return () => {
//       uiStateSubscription.unsubscribe();
//     };
//   }, [viewModel]);

//   useEffect(() => {
//     const effectSubscription = viewModel.effectChannel.subscribe(
//       (effectValue) => {
//         // Handle side effect in your React component
//         console.log("Side Effect:", effectValue);
//       }
//     );

//     return () => {
//       effectSubscription.unsubscribe();
//     };
//   }, [viewModel]);

//   const onTriggerEvent = async (event: any) => {
//     await viewModel.onTriggerEvent(event);
//   };

//   return null; // Render your React component here
// };
