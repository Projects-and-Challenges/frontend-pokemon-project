export type User = {
	id: number;
	username: string;
	email: string;
	password: string;
	image: string | null;
};

export type LoginUserResponse = User;

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

export type GetPokemonByNameResponse = Pokemon;

export type GetAllPokemonResponse = {
	results: Pick<Pokemon, 'name'>[];
};