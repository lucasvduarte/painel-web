import Quizzes from './Quizzes';

export interface FormProps {
    handleSubmit(event: Quizzes): void;
    initialValues: Quizzes;
    request: boolean;
}