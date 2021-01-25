import User from '../interface/User';

export interface FormProps {
    handleSubmit(event: User): void;
    initialValues: User;
    request: boolean;
    isRequired: boolean;
}