import { useEffect, useState } from "react"
import { PropsRoutesType } from "../../@types/routes"
import ListImages from "../../components/ListImages"
import api from "../../configs/api"
import PhotoModel from "../../models/PhotoModel"

const Photos = ({ route, navigation }: PropsRoutesType<'List Photos'>) => {
    const [page, setPage] = useState(10)
    const [per_page] = useState(20)

    const verifyIfGoBack = () => {
        if (!route?.params?.search) {
            console.log('aqui');
            
            console.log('canGoBack: ', navigation.canGoBack());
            
    
            return navigation.goBack()
        }
    }
    
    useEffect(() => {
        verifyIfGoBack()
    })

    const loadImages = async () => {
        if (route?.params?.search) {
            const response = await api.get('/search/photos', {
                params: {
                    page,
                    per_page,
                    query: route.params.search
                }
            })

            console.log('response: ', response.data);
            

            const { results } = response.data

            const formattedResults: PhotoModel[] = results.map((data: any) => new PhotoModel(data))

            setPage((page) => page + 1)
            
            return formattedResults
        } else {
            return []
        }
    }

    return (
        <>
            <ListImages loadImages={loadImages} options={{
                height: '100%'
            }} />
        </>
    )
}

export default Photos