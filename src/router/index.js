import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import EmployeeView from '../views/Employees/View.vue'
import EmployeeCreateView from '../views/Employees/Create.vue'
import DepartmentCreateView from '../views/Department/Create.vue'
import DepartmentView from '../views/Department/View.vue'
import EmployeeEdit from '../views/Employees/Edit.vue'
import DepartmentEdit from '../views/Department/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/employee',
      name: 'employee',
      component: EmployeeView
    },
    {
      path: '/employeeCreate',
      name: 'employeeCreate',
      component: EmployeeCreateView
    },
    {
      path: '/departmentCreate',
      name: 'departmentCreate',
      component: DepartmentCreateView
    },
    {
      path: '/department',
      name: 'department',
      component: DepartmentView
    },
    {
      path: '/employees/:id',
      name: 'employeeEdit',
      component: EmployeeEdit
    },
    {
      path: '/department/:id',
      name: 'departmentEdit',
      component: DepartmentEdit
    }
  ]
})

export default router
