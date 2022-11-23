const { v4: uuidv4 } = require('uuid');

export interface InputInterface {
    type: string;
    name: string;
    placeholder: string;
    id: string;
    required: boolean
}

export const InputPropsInterfaceArray: Array<InputInterface> = [
    { type: "text", name: "name", placeholder: "Name...", id: uuidv4(), required: true },
    { type: "email", name: "email", placeholder: "Email...", id: uuidv4(), required: true },
    { type: "password", name: "password", placeholder: "Password", id: uuidv4(), required: true },
    // { type: "text", name: "gender", placeholder: "Gender...", id: uuidv4(), required: true },
]




