"use client";
import { useAppDispatch } from '@/redux/hooks';
import { useAppSelector } from '@/redux/hooks';
import { doLogin } from '@/redux/features/authSlice';
import React from 'react'
import { signIn } from "next-auth/react";

type Props = {}


import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from 'next/navigation';

type FormValues = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const searchParams = useSearchParams(); // Obtén los search params
  const router = useRouter(); // Obtén el router

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await dispatch(doLogin({
        url: 'login',
        body: {
          email: data.email,
          password: data.password
        }
      })).unwrap();

      // Almacenar el token en las cookies
      console.log(response)
      document.cookie = `token=${response.token}; path=/; max-age=${60 * 60 * 24 * 7};`; // 1 semana de duración

      // Redirigir al usuario
      const callbackUrl = searchParams.get('callbackUrl') || "/";
      const decodedCallbackUrl = decodeURIComponent(callbackUrl);
      router.push(decodedCallbackUrl);
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
    }
  });

  return {
    register,
    handleSubmit: onSubmit,
    errors,
    loading,
    error,
  };
};


const Login = (props: Props) => {
  const { register, handleSubmit, errors } = useLogin();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600"
              >
                <svg className="h-5 w-5 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8c0-17.8-1.5-35.2-4.3-52H249v98.7h135.7c-5.9 31.9-23.7 58.9-50.7 77v64h81.9c48-44.2 75.1-109.5 75.1-187.7zM249 492c67.2 0 123.6-22.2 164.8-60.3l-81.9-64c-22.7 15.3-51.6 24.3-82.9 24.3-63.8 0-117.8-43-137.2-100.7H27.3v63.3C68.6 435.6 151.7 492 249 492zM111.8 301.3C105.4 283.6 102 264.5 102 244s3.4-39.6 9.8-57.3V123.3H27.3C9.6 157.2 0 199 0 244s9.6 86.8 27.3 120.7l84.5-63.4zM249 98.3c35.3 0 67 12.2 91.9 35.9l68.9-68.9C364.3 27.5 309.5 0 249 0 151.7 0 68.6 56.4 27.3 123.3l84.5 63.4C131.2 141.3 185.2 98.3 249 98.3z" /></svg>
                Iniciar sesión con Google
              </button>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Iniciar sesión
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  {...register("email", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                  placeholder="Correo electrónico"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  {...register("password", {
                    required: "Este campo es requerido",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  })}
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                  placeholder="Contraseña"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  {...register("rememberMe")}
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login