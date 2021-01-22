export default interface UserInterface {
    _id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    type: '' | 'professor' | 'gestor' | 'estudante' | 'usuarioComum';
    institution: string;
    can_edit: boolean | string;
}