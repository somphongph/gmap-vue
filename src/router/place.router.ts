const Page = () => import('@/views/page.vue');
const PlaceSearch = () => import('@/views/places/components/place-search.vue');

const router = [
	{
		path: '/places',
		component: Page,
		children: [
			{
				path: 'search',
				name: 'place-search',
				component: PlaceSearch
			}
		]
	}
];

export default router;
