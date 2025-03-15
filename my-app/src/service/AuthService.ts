import axios from 'axios';

class AuthService {
    private baseURL = process.env.AUTH_URL;

    async login(email: string, password: string) {
        try {
            const response = await axios.post(`${this.baseURL}/auth/login`, {
                email,
                password
            });
            return response.data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error en ls autenticacion: ${error.message}`);
            }
            throw new Error('Error en la autenticacion');
        }
    }

    async registro(usuario: {
        email: string,
        password: string,
        nombre: string
    }) {
        try {
            const response = await axios.post(`${this.baseURL}/auth/registro`, usuario);
            return response.data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error en el registro: ${error.message}`);
            }
            throw new Error('Error en el registro');
        }
    }

    async cerrarSesion() {
        try {
            const response = await axios.post(`${this.baseURL}/auth/logout`);
            return response.data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al cerrar cesion: ${error.message}`);
            }
            throw new Error('Error al cerrar cesion');
        }
    }

    async obtenerUsuarioActual() {
        try {
            const response = await axios.get(`${this.baseURL}/auth/usuario`);
            return response.data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al obtener usuario actual: ${error.message}`);
            }
            throw new Error('Error al obtener usuario actual');
        }
    }
}

export default AuthService;
