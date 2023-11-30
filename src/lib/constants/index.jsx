import {
	HiHeart,
	HiOutlineBadgeCheck,
	HiBookOpen,
	HiMap,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { ImTree } from 'react-icons/im';
import { FaBabyCarriage } from 'react-icons/fa';


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Здоровье',
		path: '/',
		icon: <HiHeart />
	},
	{
		key: 'product',
		label: 'Рекомендации',
		path: '/products',
		icon: <HiOutlineBadgeCheck />
	},
	{
		key: 'customers',
		label: 'Медицинская карта',
		path: '/customers',
		icon: <HiBookOpen />
	},
	{
		key: 'transactions',
		label: 'Происхождение',
		path: '/transactions',
		icon: <HiMap />
	},
	/*{
		key: 'messages',
		label: 'Генеологическое древо',
		path: '/messages',
		icon: <ImTree />
	}, 
	{
		key: 'planning',
		label: 'Планирование беременности',
		path: '/planning',
		icon: <FaBabyCarriage/>
	},*/
]

 export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
//	{
//		key: 'settings',
//		label: 'Настройки',
//		path: '/settings',
//		icon: <HiOutlineCog />
//	},
	{
		key: 'support',
		label: 'Помощь и Поддержка',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
