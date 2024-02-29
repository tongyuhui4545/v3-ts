import { createPinia } from 'pinia';
import piniaPluginPresistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(piniaPluginPresistedstate);
export default pinia;