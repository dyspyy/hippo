import {
	HiHeart,
	HiOutlineBadgeCheck,
	HiBookOpen,
	HiMap,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Риск заболеваний',
		path: '/',
		icon: <HiHeart />
	},
	{
		key: 'advices',
		label: 'Рекомендации',
		path: '/advices',
		icon: <HiOutlineBadgeCheck />
	},

]

 export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Помощь и Поддержка',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
