import { ref } from 'vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const formData = ref({});
const handleSubmit = async (data: any) => {
try {
// Lógica para manejar el envío del formulario
console.log('Datos del formulario:', data.email);
// Agrega más lógica según sea necesario, como llamar a la función submitLogin
} catch (error) {
console.error('Error al enviar el formulario:', error);
}
};
const __VLS_componentsOption = {};
let __VLS_name!: 'Login';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'FormKit', typeof __VLS_localComponents, "FormKit", "FormKit", "FormKit">;
__VLS_intrinsicElements.section; __VLS_intrinsicElements.section;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.img;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_components.FormKit; __VLS_components.FormKit; __VLS_components.FormKit; __VLS_components.FormKit; __VLS_components.FormKit; __VLS_components.FormKit;
// @ts-ignore
[FormKit, FormKit, FormKit, FormKit, FormKit, FormKit,];
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
{
const __VLS_0 = __VLS_intrinsicElements["section"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("bg-gray-50 dark:bg-gray-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("bg-gray-50 dark:bg-gray-900"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["a"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, href: ("#"), class: ("flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["img"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("w-10 h-10 mr-2"), src: ("../assets/ESIE.png"), alt: ("logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("w-10 h-10 mr-2"), src: ("../assets/ESIE.png"), alt: ("logo"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("p-6 space-y-4 md:space-y-6 sm:p-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("p-6 space-y-4 md:space-y-6 sm:p-8"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["h1"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_33.slots!).default;
}
{
const __VLS_35 = ({} as 'FormKit' extends keyof typeof __VLS_ctx ? { 'FormKit': typeof __VLS_ctx.FormKit; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormKit;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ onSubmit: {} as any, }, type: ("form"), actions: ((false)), modelValue: ((__VLS_ctx.formData)), }));
({} as { FormKit: typeof __VLS_35; }).FormKit;
({} as { FormKit: typeof __VLS_35; }).FormKit;
const __VLS_37 = __VLS_36({ ...{ onSubmit: {} as any, }, type: ("form"), actions: ((false)), modelValue: ((__VLS_ctx.formData)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, type: ("form"), actions: ((false)), modelValue: ((__VLS_ctx.formData)), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
let __VLS_40 = { 'submit': __VLS_pickEvent(__VLS_39['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_37>).onSubmit) };
__VLS_40 = { submit: (__VLS_ctx.handleSubmit) };
{
const __VLS_41 = __VLS_intrinsicElements["div"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
const __VLS_46 = __VLS_intrinsicElements["label"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, for: ("email"), class: ("block mb-2 text-sm font-medium text-gray-900 dark:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, for: ("email"), class: ("block mb-2 text-sm font-medium text-gray-900 dark:text-white"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
(__VLS_49.slots!).default;
}
{
const __VLS_51 = ({} as 'FormKit' extends keyof typeof __VLS_ctx ? { 'FormKit': typeof __VLS_ctx.FormKit; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormKit;
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
...{}, type: ("email"), name: ("email"), placeholder: ("example@gmail.com"), validation: ("required|email"), config: (({
// config override applies to all nested FormKit components
classes: {
input: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
help: 'text-xs text-gray-500',
message: 'text-red-500 text-xs'
}
})), validationMessages: (({
required: 'Ingrese un correo',
email: 'Ingrese un correo valido'
})),
}));
({} as { FormKit: typeof __VLS_51; }).FormKit;
const __VLS_53 = __VLS_52({
...{}, type: ("email"), name: ("email"), placeholder: ("example@gmail.com"), validation: ("required|email"), config: (({
// config override applies to all nested FormKit components
classes: {
input: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
help: 'text-xs text-gray-500',
message: 'text-red-500 text-xs'
}
})), validationMessages: (({
required: 'Ingrese un correo',
email: 'Ingrese un correo valido'
})),
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({
...{}, type: ("email"), name: ("email"), placeholder: ("example@gmail.com"), validation: ("required|email"), config: (({
// config override applies to all nested FormKit components
classes: {
input: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
help: 'text-xs text-gray-500',
message: 'text-red-500 text-xs'
}
})), validationMessages: (({
required: 'Ingrese un correo',
email: 'Ingrese un correo valido'
})),
});
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
}
(__VLS_44.slots!).default;
}
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
{
const __VLS_61 = __VLS_intrinsicElements["label"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, for: ("password"), class: ("block mb-2 text-sm font-medium text-gray-900 dark:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, for: ("password"), class: ("block mb-2 text-sm font-medium text-gray-900 dark:text-white"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
(__VLS_64.slots!).default;
}
{
const __VLS_66 = ({} as 'FormKit' extends keyof typeof __VLS_ctx ? { 'FormKit': typeof __VLS_ctx.FormKit; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormKit;
const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({
...{}, type: ("password"), name: ("password"), id: ("password"), placeholder: ("••••••••"), validation: ("required|password"), config: (({
// config override applies to all nested FormKit components
classes: {
outer: 'mb-5',
label: 'block mb-1 font-bold text-sm',
input: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
help: 'text-xs text-gray-500',
message: 'text-red-500 text-xs'
}
})), validationMessages: (({
required: 'Ingrese una contraseña',
password: 'Contrase;a no valida'
})),
}));
({} as { FormKit: typeof __VLS_66; }).FormKit;
const __VLS_68 = __VLS_67({
...{}, type: ("password"), name: ("password"), id: ("password"), placeholder: ("••••••••"), validation: ("required|password"), config: (({
// config override applies to all nested FormKit components
classes: {
outer: 'mb-5',
label: 'block mb-1 font-bold text-sm',
input: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
help: 'text-xs text-gray-500',
message: 'text-red-500 text-xs'
}
})), validationMessages: (({
required: 'Ingrese una contraseña',
password: 'Contrase;a no valida'
})),
}, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({
...{}, type: ("password"), name: ("password"), id: ("password"), placeholder: ("••••••••"), validation: ("required|password"), config: (({
// config override applies to all nested FormKit components
classes: {
outer: 'mb-5',
label: 'block mb-1 font-bold text-sm',
input: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500l',
help: 'text-xs text-gray-500',
message: 'text-red-500 text-xs'
}
})), validationMessages: (({
required: 'Ingrese una contraseña',
password: 'Contrase;a no valida'
})),
});
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
}
(__VLS_59.slots!).default;
}
{
const __VLS_71 = ({} as 'FormKit' extends keyof typeof __VLS_ctx ? { 'FormKit': typeof __VLS_ctx.FormKit; } : typeof __VLS_resolvedLocalAndGlobalComponents).FormKit;
const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({
...{}, type: ("submit"), classes: (({
input: 'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
})),
}));
({} as { FormKit: typeof __VLS_71; }).FormKit;
({} as { FormKit: typeof __VLS_71; }).FormKit;
const __VLS_73 = __VLS_72({
...{}, type: ("submit"), classes: (({
input: 'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
})),
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({
...{}, type: ("submit"), classes: (({
input: 'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
})),
});
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
(__VLS_74.slots!).default;
}
(__VLS_38.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[formData, formData, formData, handleSubmit,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
formData: formData as typeof formData,
handleSubmit: handleSubmit as typeof handleSubmit,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
