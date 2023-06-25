import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import PhotoModel from "../../models/PhotoModel"
import { ImageItem, ContainerList } from "./styles"
import {Dimensions} from 'react-native';
import { ListImagesProps } from "../../@types/components"
import { ActivityIndicator } from "react-native-paper"

const ListImages = ({ loadImages: loadImagesParent, options }: ListImagesProps) => {
    const [images, setImages] = useState<PhotoModel[]>([])
    const [loading, setLoading] = useState(false)
    const windowWidth = Dimensions.get('window').width;

    const loadImages = async () => {
        setLoading(true)
        const imagesLoaded = await loadImagesParent()

        setImages(images.concat(imagesLoaded))
        setLoading(false)
    }

    useEffect(() => {
        if (!images.length) {
            loadImages()
        }
    }, [])

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
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (<ImageItem source={{
                            uri: item.urls.small,
                        }}
                        key={item.id + index}
                        style={{
                            width: calculateWidthImage
                        }}
                    />)
                }}
                ListFooterComponent={renderFooter}
                onEndReached={loadImages}
                onEndReachedThreshold={0.1}
            />
        </ContainerList>
    )
}

export default ListImages