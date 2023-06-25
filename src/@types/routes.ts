import type { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import PhotoModel from '../models/PhotoModel';

export type RouterType = {
    name: string
    component: any
    icon: string
} 

type RootStackParamList = {
  Home: undefined;
  'List Photos': { search: string };
  'Details': { image: PhotoModel } | undefined;
};

export type PropsRoutesType<test extends keyof RootStackParamList> = MaterialBottomTabScreenProps<RootStackParamList, test>;