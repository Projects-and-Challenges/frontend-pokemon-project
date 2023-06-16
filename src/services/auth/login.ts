import api from "@/services/api";
import { LoginUserResponse, User } from "@/types";
import { AxiosResponse } from "axios";

type LoginProps = Pick<User, 'email' | 'password'>;

export const login = async ({ email, password }: LoginProps): Promise<AxiosResponse> => {
	const response = await api.get<LoginUserResponse>('/user/login', {
		headers: {
			email,
			password,
		},
	});
	
	return response;
};