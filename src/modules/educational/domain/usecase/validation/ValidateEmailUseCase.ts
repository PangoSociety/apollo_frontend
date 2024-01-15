import { Either, getApplicativeValidation, left, map, right } from 'fp-ts/Either';
import { EducationalValidationFailure } from '@/modules/educational/domain/failure/EducationalValidationFailure';
import { pipe } from 'fp-ts/function';
import { sequenceT } from 'fp-ts/Apply';
import { getSemigroup, NonEmptyArray } from 'fp-ts/NonEmptyArray';
import lift from '@/lib/functional/lift';
import { z } from 'zod';
import { injectable } from 'inversify';

@injectable()
export default class ValidateEmailUseCase {
  invoke(value: string): Either<NonEmptyArray<EducationalValidationFailure.Root>, string> {
    const isEmailParsed = z.string().email().safeParse(value);
    const isEmail = (word: string): Either<EducationalValidationFailure.Root, string> =>
      isEmailParsed.success ? right(word) : left(new EducationalValidationFailure.EmailInvalid());

    const isEmailLifted = lift(isEmail);
    return pipe(
      sequenceT(getApplicativeValidation(getSemigroup<EducationalValidationFailure.Root>()))(isEmailLifted(value)),
      map(() => value)
    );
  }
}
