import * as React from 'react';
import { LoginFormEvent } from '@/modules/educational/presentation/form/loginform/contract/LoginFormEvent';
import { LoginFormState } from '@/modules/educational/presentation/form/loginform/contract/LoginFormState';
import { cn } from '@/design-system/shadcn/lib/utils';
import { Label } from '@/design-system/shadcn/components/ui/label';
import { Input } from '@/design-system/shadcn/components/ui/input';
import { Button } from '@/design-system/shadcn/components/ui/button';
import { pipe } from 'fp-ts/function';
import { match } from 'fp-ts/Option';
import TranslatableFailure from '@/modules/educational/infraestructure/i18n/EducationalValidationFailureToTranslatableFailure';
import { useTranslation } from 'react-i18next';
import InputMessage from '@/design-system/component/form/InputMessage.tsx';

interface LoginFormSuccessProps extends React.HTMLAttributes<HTMLDivElement> {
  successState: LoginFormState.Success;
  onTriggerEvent: (event: LoginFormEvent.Root) => void;
}
export default function LoginFormSuccess({ successState, onTriggerEvent, className, ...props }: LoginFormSuccessProps) {
  const { t } = useTranslation();
  return (
    <div className={cn('grid gap-6', className)} {...props}>
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
      {/*          <FormMessage /> */}
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onTriggerEvent(new LoginFormEvent.OnFormSubmit());
        }}
      >
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              // type="email"
              // autoCapitalize="none"
              // autoComplete="email"
              // autoCorrect="off"
              value={successState.emailField}
              onChange={(event) => {
                console.log('se ejecuta onchange');
                onTriggerEvent(new LoginFormEvent.OnEmailFieldChanged(event.target.value));
              }}
            />
            {pipe(
              successState.emailErrors,
              match(
                () => null,
                (errors) => (
                  <InputMessage>{errors.map((error) => new TranslatableFailure(error).toUiText(t))}</InputMessage>
                )
              )
            )}
          </div>
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Password
            </Label>
            <Input id="password" placeholder="********" type="password" />
          </div>
          <Button className="mt-4">
            {/* {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} */}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  );
}
