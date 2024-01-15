const TYPES = {
  FakeCourseRepository: Symbol.for('FakeCourseRepository'),
  NetworkCourseRepository: Symbol.for('NetworkCourseRepository'),
  LoginScreenViewModel: Symbol.for('LoginScreenViewModel'),
  LoginFormViewModel: Symbol.for('LoginFormViewModel'),
  LoginScreenViewModelFactory: Symbol.for('Factory<LoginScreenViewModel>'),
  AxiosClient: Symbol.for('AxiosClient'),
  ValidateEmailUseCase: Symbol.for('ValidateEmailUseCase'),
  ValidatePasswordUseCase: Symbol.for('ValidatePasswordUseCase'),
};

export { TYPES };
