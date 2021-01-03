import { http } from "../../core/http/Http.interceptor";
import { InterfacePagination } from './interface/QuizzesPagination';
import Quizzes from './interface/Quizzes';

const URL: string = 'Quizzes/';

export const getQuizzes = (params?: InterfacePagination) => {
    return http.get<Array<Quizzes>>(URL, { params: params })
}

export const getByQuizzes = (id: string) => {
    return http.get<Quizzes>(`${URL}${id}`)
}

export const postQuizzes = (quizzes: Quizzes) => {
    return http.post<Quizzes>(`${URL}/register/`, quizzes)
}

export const deleteQuizzes = (id: string) => {
    return http.delete<string>(`${URL}/${id}`)
}

export const putQuizzes = (quizzes: Quizzes) => {
    return http.put<Quizzes>(`${URL}${quizzes._id}`, quizzes)
}