import { Either, getApplicativeValidation, left, map, right } from 'fp-ts/Either';
import { EducationalValidationFailure } from '@/modules/educational/domain/failure/EducationalValidationFailure';
import { pipe } from 'fp-ts/function';
import { sequenceT } from 'fp-ts/Apply';
import { getSemigroup, NonEmptyArray } from 'fp-ts/NonEmptyArray';
import lift from '@/lib/functional/lift';
import { z } from 'zod';
import { injectable } from 'inversify';

@injectable()
export default class ValidatePasswordUseCase {
  invoke(value: string): Either<NonEmptyArray<EducationalValidationFailure.Root>, string> {
    const minLengthParseResult = z.string().min(8).safeParse(value);
    const hasMinLength = (word: string): Either<EducationalValidationFailure.Root, string> =>
      minLengthParseResult.success ? right(word) : left(new EducationalValidationFailure.EmailInvalid());

    return pipe(
      sequenceT(getApplicativeValidation(getSemigroup<EducationalValidationFailure.Root>()))(lift(hasMinLength)(value)),
      map(() => value)
    );
  }
}
