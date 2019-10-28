import CountTo from './vue-testPackage.vue';
export default CountTo;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('test-package', CountTo);
}
