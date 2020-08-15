import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';

import placeRouter from './place.router';

Vue.use(VueRouter);

const baseRouter: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/about.vue')
	},
	{
		path: '*',
		name: 'pagenotfound',
		component: () =>
			import(
				/* webpackChunkName: "page-not-found" */ '@/views/page-not-found.vue'
			)
	}
];

const routes = baseRouter.concat(placeRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
