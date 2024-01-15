import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/design-system/shadcn/components/ui/button';
import { Input } from '@/design-system/shadcn/components/ui/input';
import { cn } from '@/design-system/shadcn/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/design-system/shadcn/components/ui/form';
import useViewModel from '@/lib/mvvm/useViewModel';
import myContainer from '@/lib/di/inversify.config';
import { TYPES } from '@/modules/educational/di/EducationalModule';
import LoginFormViewModel from '@/modules/educational/presentation/form/loginform/LoginFormViewModel';
import { Label } from '@/design-system/shadcn/components/ui/label.tsx';
import { LoginFormEvent } from '@/modules/educational/presentation/form/loginform/contract/LoginFormEvent.ts';
import { LoginFormState } from '@/modules/educational/presentation/form/loginform/contract/LoginFormState.ts';
import LoginFormSuccess from '@/modules/educational/presentation/form/loginform/view/LoginFormSuccess.tsx';
import LoadingState from '@/design-system/state/LoadingState.tsx';
import { useEffect, useMemo } from 'react';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  // onSuccessFormSubmit: () => void;
}

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
  // const viewModel = useMemo(() => myContainer.get<LoginFormViewModel>(TYPES.LoginFormViewModel), []);
  const { uiState, viewModel } = useViewModel(myContainer.get<LoginFormViewModel>(TYPES.LoginFormViewModel));
  const { t } = useTranslation();

  const loginFormSchema = z.object({
    email: z.string().email({ message: t('authuser.failureEmailInvalid') }),
    password: z.string(),
  });
  type LoginFormSchema = z.infer<typeof loginFormSchema>;

  // const form = useForm<LoginFormSchema>({
  //   resolver: zodResolver(loginFormSchema),
  // });

  useEffect(() => {
    viewModel.onTriggerEvent(new LoginFormEvent.OnCreated());
  }, []);

  // React.useEffect(() => {
  //   const subscription = form.watch(({ email }) => {
  //     console.log(email);
  //   });
  //
  //   return () => subscription.unsubscribe();
  // }, [form.watch]);

  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault();
  //   setIsLoading(true);
  //
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }
  // const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
  //   props.onSuccessFormSubmit();
  // };

  const renderState = (state: LoginFormState.Root) => {
    switch (state.kind) {
      case 'loading':
        return <LoadingState />;
      case 'success':
        return (
          <LoginFormSuccess
            successState={state}
            onTriggerEvent={(event: LoginFormEvent.Root) => viewModel.onTriggerEvent(event)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn(className)} {...props}>
      {renderState(uiState)}
      {/* <Form {...form}> */}
      {/*  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2"> */}
      {/*    <FormField */}
      {/*      control={form.control} */}
      {/*      name="email" */}
      {/*      render={({ field }) => ( */}
      {/*        <FormItem> */}
      {/*          <FormLabel>{t('authuser.loginFormEmailLabel')}</FormLabel> */}
      {/*          <FormControl> */}
      {/*            <Input */}
      {/*              placeholder="name@example.com" */}
      {/*              autoCapitalize="none" */}
      {/*              autoComplete="email" */}
      {/*              autoCorrect="off" */}
      {/*              {...field} */}
      {/*            /> */}
      {/*          </FormControl> */}
      {/*          /!* <FormDescription>This is your public display name.</FormDescription> *!/ */}
      {/* <FormMessage /> */}
      {/*        </FormItem> */}
      {/*      )} */}
      {/*    /> */}
      {/*    <FormField */}
      {/*      control={form.control} */}
      {/*      name="email" */}
      {/*      render={({ field }) => ( */}
      {/*        <FormItem> */}
      {/*          <FormLabel>{t('authuser.loginFormEmailLabel')}</FormLabel> */}
      {/*          <FormControl> */}
      {/*            <Input */}
      {/*              placeholder="name@example.com" */}
      {/*              autoCapitalize="none" */}
      {/*              autoComplete="email" */}
      {/*              autoCorrect="off" */}
      {/*              {...field} */}
      {/*            /> */}
      {/*          </FormControl> */}
      {/*          /!* <FormDescription>This is your public display name.</FormDescription> *!/ */}
      {/*          <FormMessage /> */}
      {/*        </FormItem> */}
      {/*      )} */}
      {/*    /> */}
      {/*    <Button className="w-full mt-4 "> */}
      {/*      /!* {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} *!/ */}
      {/*      Sign In with Email */}
      {/*    </Button> */}
      {/*  </form> */}
      {/* </Form> */}
    </div>
  );
}
