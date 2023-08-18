import { AxiosResponse } from "axios";
import api from "@/services/api";
import { GetPokemonByNameProps, Pokemon } from "@/types";

export const getPokemonByName = async ({ name }: GetPokemonByNameProps): Promise<AxiosResponse<Pokemon>> => 
	api.get<Pokemon>(`/poke/${name}`);