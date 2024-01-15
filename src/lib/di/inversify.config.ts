import { Container } from 'inversify';
import CourseRepository from '@/modules/educational/domain/repository/CourseRepository';
import { TYPES } from '@/modules/educational/di/EducationalModule';
import { FakeCourseRepository } from '@/modules/educational/infraestructure/fake/FakeCourseRepository';
import LoginScreenViewModel from '@/modules/educational/presentation/login/LoginScreenViewModel';
import { AxiosClient } from '@/lib/http/axios';
import NetworkCourseRepository from '@/modules/educational/infraestructure/network/NetworkCourseRepository';
import LoginFormViewModel from '@/modules/educational/presentation/form/loginform/LoginFormViewModel';
import ValidateEmailUseCase from '@/modules/educational/domain/usecase/validation/ValidateEmailUseCase.ts';
import ValidatePasswordUseCase from '@/modules/educational/domain/usecase/validation/ValidatePasswordUseCase.ts';

const myContainer = new Container();
myContainer.bind<CourseRepository>(TYPES.FakeCourseRepository).to(FakeCourseRepository).inSingletonScope();
myContainer.bind<CourseRepository>(TYPES.NetworkCourseRepository).to(NetworkCourseRepository).inSingletonScope();
myContainer.bind<LoginScreenViewModel>(TYPES.LoginScreenViewModel).to(LoginScreenViewModel);
myContainer.bind<LoginFormViewModel>(TYPES.LoginFormViewModel).to(LoginFormViewModel);
myContainer.bind<ValidateEmailUseCase>(TYPES.ValidateEmailUseCase).to(ValidateEmailUseCase).inSingletonScope();
myContainer.bind<ValidatePasswordUseCase>(TYPES.ValidatePasswordUseCase).to(ValidatePasswordUseCase).inSingletonScope();
// myContainer.bind<interfaces.Factory<LoginScreenViewModel>>(TYPES.LoginScreenViewModelFactory).toFactory<LoginScreenViewModel>((context: interfaces.Context) => {
//   return () => {
//     return context.container.get<LoginScreenViewModel>(TYPES.LoginScreenViewModel);
//     // return new LoginScreenViewModel(context.container.get<CourseRepository>(TYPES.FakeCourseRepository));
//   }
// })
// myContainer.bind<interfaces.Factory<LoginScreenViewModel>>(TYPES.LoginScreenViewModelFactory).toAutoFactory<LoginScreenViewModel>(TYPES.LoginScreenViewModel)

myContainer.bind<AxiosClient>(TYPES.AxiosClient).to(AxiosClient).inSingletonScope();
// myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
// myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
// myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default myContainer;
