import type { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import PhotoModel from '../models/PhotoModel';

export type RouterType = {
    name: string
    component: any
    icon: string
} 

export type RootStackParamList = {
  Home: undefined;
  'List Photos': { search: string };
  'Details': { id: string } | undefined;
};

export type PropsRoutesType<test extends keyof RootStackParamList> = MaterialBottomTabScreenProps<RootStackParamList, test>;