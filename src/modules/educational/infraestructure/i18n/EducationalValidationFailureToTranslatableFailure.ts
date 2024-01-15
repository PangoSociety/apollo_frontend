import { TFunction } from 'i18next';
import { EducationalValidationFailure } from '../../domain/failure/EducationalValidationFailure';

export default class TranslatableFailure {
  constructor(private failure: EducationalValidationFailure.Root) {}

  public toUiText(t: TFunction<'translation', undefined>): string {
    switch (this.failure.kind) {
      case 'emailInvalid':
        return t('authuser.failureEmailInvalid');
      default:
        return this.failure.kind;
    }
  }
}
