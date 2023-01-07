import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
// import About from "../views/About.vue"
import Jobs from "../views/jobs/Jobs.vue"
import JobDetails from "../views/jobs/JobDetails.vue"
import NotFound from "../views/NotFound.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue') // Lazy loading Components
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  //redirect
  {
    path: '/all-jobs', // old route
    redirect: '/jobs' // new route (route that we want to redirect the '/all-jobs route to.)
  },
  // 404 pages (catch all 404 pages)
  {
    path: '/:catchAll(.*)', // if the url doesnt match any of the given paths, this route object will catch that.
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
