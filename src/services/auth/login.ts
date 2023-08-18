import api from "@/services/api";
import { LoginProps, User } from "@/types";
import { AxiosResponse } from "axios";


export const login = async ({ email, password }: LoginProps): Promise<AxiosResponse<User>> => {
	const response = await api.get<User>('/user/login', {
		headers: {
			email,
			password,
		},
	});
	
	return response;
};