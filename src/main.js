import { createApp } from 'vue'
import App from './App.vue'
import components from './componenst/UI'
import directives from './directives/directives'
import router from './router/router'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

directives.forEach(directive => {
  app.directive(directive.name, directive)
})




app.use(router).mount('#app')
