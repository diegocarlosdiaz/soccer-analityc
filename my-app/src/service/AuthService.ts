import axios from 'axios';

interface login {
    url: string;
    jwt: string;
    body: {
        email: string;
        password: string;
    }
}

class AuthService {
    private static baseURL = process.env.NEXT_PUBLIC_API_AUTH_URL;

    static {
        if (!process.env.NEXT_PUBLIC_API_AUTH_URL) {
            console.warn('WARNING: NEXT_PUBLIC_API_AUTH_URL is not defined');
        }
        axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_AUTH_URL;
    }

    static async login(params: login) {
        try {
            if (params.jwt) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${params.jwt}`;
            }
            const response = await axios.post(`/${params.url}`, {
                email: params.body.email,
                password: params.body.password
            },
                { withCredentials: true });
            console.log(response)
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Error en la autenticación');
        }
    }

    static async registro(usuario: {
        email: string,
        password: string,
        username: string
    }) {
        try {
            const response = await axios.post(`${this.baseURL}/register`, usuario);
            return response.data;
        } catch (error) {
            throw new Error('Error en el registro');
        }
    }

    static async cerrarSesion() {
        try {
            const response = await axios.post(`${this.baseURL}/logout`, {}, {
                withCredentials: true,  // Importante para manejar cookies
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            // Eliminar la cookie manualmente en el cliente
            document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=' + window.location.hostname;
            document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
            
            return response.data;
        } catch (error) {
            throw new Error('Error al cerrar sesión');
        }
    }
    static async obtenerUsuarioActual() {
        try {
            const response = await axios.get(`${this.baseURL}/usuario`);
            return response.data;
        } catch (error) {
            throw new Error('Error al obtener usuario');
        }
    }
}

export default AuthService;
