import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button, Form, FormItem, Input)
Vue.use( Form )
Vue.use( FormItem )
Vue.use( Input )
Vue.prototype.$message = Message 