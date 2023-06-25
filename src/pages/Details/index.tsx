import { useEffect, useState } from "react"
import { PropsRoutesType } from "../../@types/routes"
import PhotoModel from "../../models/PhotoModel"
import { useIsFocused } from "@react-navigation/native"
import api from "../../configs/api"
import { AvatarImage, Container, ContainerCardDetails, ImageFocused, LocationText, UserCard, UsernameSession, UsernameText } from "./styles"
import { Dimensions } from "react-native"
import CardDetail from "../../components/CardDetail"


const Details = ({ route, navigation }: PropsRoutesType<'Details'>) => {
    const [image, setImage] = useState<PhotoModel | undefined>()
    const windowWidth = Dimensions.get('window').width;
    
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!route.params?.id && isFocused) {
            return navigation.goBack()
        } 
        
        if (route.params?.id) {
            loadImage(route.params.id)
        }
    }, [isFocused])

    const loadImage = async (id: string) => {
        const response = await api.get(`/photos/${id}`)

        const formattedImage: PhotoModel = new PhotoModel(response.data)
     
        setImage(formattedImage)
    }

    const calculateWidthImage = (windowWidth - (26 * 2))

    return (
        <Container>
            <UserCard>
                <AvatarImage 
                    source={{
                        uri: image?.user.profile_image.small
                    }}
                    size={36}
                />
                <UsernameSession>
                    <UsernameText>{image?.user.name}</UsernameText>
                    <LocationText>{image?.location.name || ''}</LocationText>
                </UsernameSession>
            </UserCard>
            <ImageFocused
                style={{
                    width: calculateWidthImage
                }}
                source={{
                    uri: image?.urls.small
                }}
            />
            <ContainerCardDetails>
                <CardDetail imgUrl={require('../../assets/icons/view.png')} title="Visualizações" subtitle={`${image?.views}`} />
                <CardDetail imgUrl={require('../../assets/icons/download.png')} title="Downloads" subtitle={`${image?.downloads}`} />
            </ContainerCardDetails>
        </Container>
    )
}

export default Details