import axios from 'axios';

class AuthService {
    private baseURL = 'https://api.ejemplo.com';

    async login(email: string, password: string) {
        try {
            const response = await axios.post(`${this.baseURL}/auth/login`, {
                email,
                password
            });
            return response.data;
        } catch (error) {
            throw new Error('Error en la autenticación');
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
        } catch (error) {
            throw new Error('Error en el registro');
        }
    }

    async cerrarSesion() {
        try {
            const response = await axios.post(`${this.baseURL}/auth/logout`);
            return response.data;
        } catch (error) {
            throw new Error('Error al cerrar sesión');
        }
    }

    async obtenerUsuarioActual() {
        try {
            const response = await axios.get(`${this.baseURL}/auth/usuario`);
            return response.data;
        } catch (error) {
            throw new Error('Error al obtener usuario');
        }
    }
}

export default AuthService;
