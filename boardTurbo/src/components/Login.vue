<script setup lang="ts">
import { loginServices } from '@/services/login' // Reemplaza la ruta según tu estructura de archivos
import { ref } from 'vue'

const credenciales = ref({
  email: '',
  password: '',
  no_expire: 'true'
})

const alertError = () => {
  console.error('error')
}

async function login(formdata: any) {
  localStorage.clear()
  credenciales.value.email = formdata.email
  credenciales.value.password = formdata.password
  console.log(credenciales.value)

  try {
    const response = await loginServices(credenciales.value)

    if (response?.status === 200 && response?.data !== '') {
      // localStorage.setItem('token', response?.data)
      // localStorage.setItem('sesion', 'login')
      // localStorage.setItem('username', credenciales.value.password)
      // localStorage.setItem('password', credenciales.value.password)
      console.log(response?.data)
    } else if (response?.status === 401) {
      alertError()
    }
    console.log('el metodo post fue exelente su clave key es:', response?.data.auth)
  } catch (error) {
    console.log('este error')
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="w-10 h-10 mr-2" src="../assets/ESIE.png" alt="logo" />
        Esie
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Ingresar al panel
          </h1>
          <!-- Formulario -->
          <FormKit type="form" :actions="false" @submit="login">
            <!-- Usuario -->
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Correo</label
              >
              <FormKit
                type="email"
                name="email"
                placeholder="example@gmail.com"
                validation="required|email"
                :config="{
                  classes: {
                    input:
                      'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
                    help: 'text-xs text-gray-500',
                    message: 'text-red-500 text-xs'
                  }
                }"
                :validation-messages="{
                  required: 'Ingrese un correo',
                  email: 'Ingrese un correo valido'
                }"
              />
            </div>
            <!-- Password -->
            <div>
              <label
                for="password"
                class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <FormKit
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                validation="required|password"
                :config="{
                  // config override applies to all nested FormKit components
                  classes: {
                    outer: 'mb-5',
                    label: 'block mb-1 font-bold text-sm',
                    input:
                      'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
                    help: 'text-xs text-gray-500',
                    message: 'text-red-500 text-xs'
                  }
                }"
                :validation-messages="{
                  required: 'Ingrese una contraseña',
                  password: 'Contrase;a no valida'
                }"
              />
            </div>
            <!-- confirmacion -->
            <FormKit
              type="submit"
              :classes="{
                input:
                  'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              }"
            >
              Entrar
            </FormKit>
          </FormKit>
        </div>
      </div>
    </div>
  </section>
</template>

