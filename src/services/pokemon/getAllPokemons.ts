import api from "@/services/api";
import { GetAllPokemonResponse, GetAllPokemonProps } from "@/types";

export const getAllPokemons: GetAllPokemonProps = async (page, offSet) => {
  const query = page && offSet ? `?page=${page}&offSet=${offSet}` : page ?
    `?page=${page}` : offSet ? `?offSet=${offSet}`: '';
  
  const { data } = await api.get<GetAllPokemonResponse>(`/poke/getAll${query}`);
	
	return data;
};