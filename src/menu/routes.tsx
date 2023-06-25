import { RouterType } from "../@types/routes";
import Home from '../pages/Home'
import Photos from "../pages/Photos";
import Details from "../pages/Details";

const routes: RouterType[] = [
    {
        name: 'Home',
        component: Home,
        icon: 'home'
    },
    {
        name: 'List Photos',
        component: Photos,
        icon: 'image-multiple'
    },
    {
        name: 'Details',
        component: Details,
        icon: 'overscan'
    }
]

export default routes