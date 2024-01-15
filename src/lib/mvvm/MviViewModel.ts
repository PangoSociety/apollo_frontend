import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { injectable } from 'inversify';

@injectable()
export abstract class MviViewModel<STATE, EVENT, EFFECT> {
  private readonly initialState: STATE;

  private uiStateFlow$: BehaviorSubject<STATE>;

  public uiState: Observable<STATE>;

  private effectChannel$: Subject<EFFECT>;

  public sideEffectFlow: Observable<EFFECT>;

  constructor() {
    this.initialState = this.setInitialState();
    this.uiStateFlow$ = new BehaviorSubject<STATE>(this.initialState);
    this.effectChannel$ = new Subject<EFFECT>();
    this.sideEffectFlow = this.effectChannel$.asObservable();
    this.uiState = this.uiStateFlow$.asObservable();
  }

  abstract setInitialState(): STATE;

  abstract onTriggerEvent(event: EVENT): void;

  public get uiStateValue() {
    return this.uiStateFlow$.value;
  }

  protected reduce(state: STATE) {
    this.uiStateFlow$.next(state);
  }

  protected async postSideEffect(effectValue: EFFECT): Promise<void> {
    this.effectChannel$.next(effectValue);
  }
}
