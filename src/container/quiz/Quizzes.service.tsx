import { http } from "../../core/http/Http.interceptor";
import { InterfacePagination } from './interface/QuizzesPagination';
import Quizzes from './interface/Quizzes';

const URL: string = 'quizzes';

export const getQuizzes = (params?: any) => {
    return http.get<Array<Quizzes>>(URL, { params: params })
}

export const getByQuizzes = (id: string) => {
    return http.get<Quizzes>(`${URL}/${id}`)
}

export const postQuizzes = (quizzes: Quizzes) => {
    return http.post<Quizzes>(`${URL}/register/`, quizzes)
}

export const deleteQuizzes = (id: string) => {
    return http.delete<string>(`${URL}/${id}`)
}

export const putQuizzes = (quizzes: Quizzes) => {
    return http.put<Quizzes>(`${URL}/${quizzes._id}`, quizzes)
}

export const getAnalyticsChoices = (id: string) => {
    return http.get<any>(`${URL}/${id}/analytics`)
}

export const getQuizzesAnswers = (id: string) => {
    return http.get<any>(`${URL}/${id}/answers`)
}