import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecordsApp from '../views/RecordsApp.vue'
import CreateRecord from '../views/CreateApp.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ViewRecords from '../views/ViewRecords.vue'
import GalleryApp from '../views/GalleryApp.vue'
import vueSamplefunctions from '../views/vueSamplefunctions.vue'
import EditRecords from '../views/EditRecord.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'records',
    component: HomeView
  },
  {
    path: '/records',
    name: 'RecordsApp', 
    component: RecordsApp
  },
  {
    path: '/create',
    name: 'CreateApp', 
    component: CreateRecord
  },
  {
    path: '/gallery',
    name: 'GalleryApp', 
    component: GalleryApp
  },
  {
    path: '/viewrecords:ID',
    name: 'ViewRecords', 
    component: ViewRecords
  },
  {
    path: '/records/:recordId',
    name: 'ViewRecords', 
    component: ViewRecords
  },
  {
    path: '/edit/:EditRecordsID',
    name: 'EditRecords', 
    component: EditRecords
  },
  {
    path: '/vuesamplefunctions',
    name: 'vueSamplefunctions', 
    component: vueSamplefunctions
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound', 
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
