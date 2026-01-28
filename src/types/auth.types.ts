export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface VerifyOtpResponse {
  user: User;
  userHasCompany: boolean;
  areUserDetailedFilled: boolean;
}
