export default (url: string) => () => import(`@/views/${url}.vue`);
