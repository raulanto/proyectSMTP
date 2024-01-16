<script setup lang="ts"></script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Correo</h2>
      <FormKit type="form" :actions="false">
        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Envio de correo</label
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
          <div class="w-full">
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Para</label
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

          <div>
            <label
              for="item-weight"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Asunto del correo</label
            >
            <FormKit
              type="text"
              name="email"
              placeholder="asunto del correo"
              validation="required|text"
              :config="{
                classes: {
                  input:
                    'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
                  help: 'text-xs text-gray-500',
                  message: 'text-red-500 text-xs'
                }
              }"
              :validation-messages="{
                required: 'Ingrese un asunto'
              }"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Contenido del correo</label
            >
            <FormKit
              type="textarea"
              name="instructions"
              :config="{
                classes: {
                  input:
                    'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
                  help: 'text-xs text-gray-500',
                  message: 'text-red-500 text-xs'
                }
              }"
              class=""
              placeholder="Write a product description here..."
            >

            </FormKit>
          </div>
          <div class="sm:col-span-2">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Contenido html</label
            >
            <FormKit
              type="textarea"
              name="instructions"
              :config="{
                classes: {
                  input:
                    'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
                  help: 'text-xs text-gray-500',
                  message: 'text-red-500 text-xs'
                }
              }"
              class=""
              placeholder="Write a product description here..."
            >

            </FormKit>
          </div>
          
        </div>
        <div class="flex items-center space-x-4">
          <button
            type="submit"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Update product
          </button>
        </div>
      </FormKit>
    </div>
  </section>
</template>
