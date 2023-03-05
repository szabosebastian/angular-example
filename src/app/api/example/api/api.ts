export * from './auth-controller.service';
import { AuthControllerService } from './auth-controller.service';
import { UserControllerService } from './user-controller.service';

export * from './user-controller.service';
export const APIS = [AuthControllerService, UserControllerService];
