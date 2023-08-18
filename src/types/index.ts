import { AxiosResponse } from "axios";

export type User = {
	id: number;
	username: string;
	email: string;
	password: string;
	image: string | null;
};

export type LoginProps = Pick<User, 'email' | 'password'>;


export type RegisterUserResponse = Pick<User, 'email'> & {
	code: string;
	status: string;
}

export type Pokemon = {
	id: number;
	order: number;
	name: string;
	types: [
		{
			type: {
				name: string
			}
		}
	];
	moves: [
		{
			move: {
				name: string
			}
		}
	];
	weight: number;
	height: number;
	sprites: {
		front_default: string;
	}
}

export type GetPokemonByNameProps = Pick<Pokemon, 'name'>;

export type GetAllPokemonProps = (page?: number, offSet?: number) => Promise<GetAllPokemonResponse>;

export type GetAllPokemonResponse = {
	results: Pick<Pokemon, 'name'>[];
};