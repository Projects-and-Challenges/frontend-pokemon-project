import api from "@/services/api";
import { RegisterUserResponse, User } from "@/types";
import { AxiosResponse } from "axios";

type RegisterProps = Pick<User, 'username' | 'email' | 'password'>;

export const register = async ({ username, email, password }: RegisterProps): Promise<AxiosResponse> => {
	const response = await api.post<RegisterUserResponse>('/user/register', {
		username,
		email,
		password,
	} satisfies RegisterProps);
	
	return response;
};