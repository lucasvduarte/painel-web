import { http } from "../../core/http/Http.interceptor";
import { InterfacePagination } from './interface/MiniGamesPagination';
import MiniGames from './interface/MiniGames';

const URL: string = 'miniGames/';

export const getMiniGames = (params?: InterfacePagination) => {
    return http.get<Array<MiniGames>>(URL, { params: params })
}

export const getByMiniGames = (id: string) => {
    return http.get<MiniGames>(`${URL}${id}`)
}

export const postMiniGames = (MiniGames: MiniGames) => {
    return http.post<MiniGames>(`${URL}/register/`, MiniGames)
}

export const deleteMiniGames = (id: string) => {
    return http.delete<string>(`${URL}/${id}`)
}

export const putMiniGames = (MiniGames: MiniGames) => {
    return http.put<MiniGames>(`${URL}${MiniGames._id}`, MiniGames)
}