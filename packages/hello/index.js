import Hello from './src/index.vue';

Hello.install = function(Vue) {
  Vue.component(Hello.name, Hello)
}

export default Hello;