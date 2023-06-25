import { PropsRoutesType, RouterType } from "../@types/routes";
import { Text } from 'react-native'
import Home from '../pages/Home'
import Photos from "../pages/Photos";

const HomeScreen = (message: string) => ({ navigation, route }: PropsRoutesType) => {
    console.log('route.params: ', route.params);
    
    
    return (
        <Text>{message}</Text>
    )
};

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
        component: HomeScreen('Details'),
        icon: 'overscan'
    }
]

export default routes