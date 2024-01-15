import { injectable } from 'inversify';
import { z } from 'zod';
import i18n from '@/lib/i18n/i18n';

@injectable()
export default class ValidateLoginFormUseCase {
  invoke() {
    i18n.t('authuser.failureEmailInvalid');
    const loginFormSchema = z.object({
      email: z.string().email({ message: t('authuser.failureEmailInvalid') }),
      password: z.string(),
    });
  }
}
