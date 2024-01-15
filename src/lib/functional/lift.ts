import { Either, mapLeft } from 'fp-ts/Either';
import { NonEmptyArray } from 'fp-ts/NonEmptyArray';
import { pipe } from 'fp-ts/function';

export default function lift<LEFT, RIGHT>(
  cbRightInput: (right: RIGHT) => Either<LEFT, RIGHT>
): (rightReturned: RIGHT) => Either<NonEmptyArray<LEFT>, RIGHT> {
  return (abstractRight) =>
    pipe(
      cbRightInput(abstractRight),
      mapLeft((abstractLeft) => [abstractLeft])
    );
}
