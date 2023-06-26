import { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import PhotoModel from "../../models/PhotoModel"
import { ImageItem, ContainerList } from "./styles"
import {Dimensions} from 'react-native';
import { ListImagesProps } from "../../@types/components"
import { ActivityIndicator } from "react-native-paper"
import { useNavigation } from "@react-navigation/native";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import { RootStackParamList } from "../../@types/routes";

const ListImages = ({ loadImages: loadImagesParent, options }: ListImagesProps) => {
    const [images, setImages] = useState<PhotoModel[]>([])
    const [loading, setLoading] = useState(false)
    const windowWidth = Dimensions.get('window').width;
    const [noResults, setNoResults] = useState(false)

    const navigation = useNavigation<MaterialBottomTabNavigationProp<RootStackParamList, "Home", undefined>>()

    const loadImages = async () => {
        if (noResults) return
        setLoading(true)
        const imagesLoaded = await loadImagesParent()

        if (imagesLoaded.length === 0) {
            setNoResults(true)
        }

        setImages(images.concat(imagesLoaded))
        setLoading(false)
    }

    useEffect(() => {
        if (!images.length) {
            loadImages()
        }
    }, [])

    useEffect(() => {
        if (noResults) {
            setNoResults(true)
        }
    }, [navigation])

    const renderFooter = () => {
        if (!loading) return null;
        return (
          <View>
            <ActivityIndicator color='gray' />
          </View>
        );
    };

    const calculateWidthImage = (windowWidth - 20 - 5) / 2

    return (
        <ContainerList style={{ height: options?.height }}>
            <FlatList 
                data={images}
                horizontal={false}
                numColumns={2}
                style={{
                    marginHorizontal: 12,
                    width: '100%',
                    backgroundColor: '#FFF;',
                    marginTop: 12,
                }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{
                    // flexDirection: 'row',
                    // flexWrap: 'wrap',
                    // justifyContent: 'space-between'
                }}
                // keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                return navigation.navigate('Details', {
                                    id: item.id
                                })
                            }}
                        >
                            <ImageItem 
                                source={{
                                    uri: item.urls.small,
                                }}
                                key={item.id + index}
                                style={{
                                    width: calculateWidthImage
                                }}
                            />
                        </TouchableOpacity>
                    )
                }}
                ListFooterComponent={renderFooter}
                onEndReached={loadImages}
                onEndReachedThreshold={0.1}
            />
        </ContainerList>
    )
}

export default ListImages