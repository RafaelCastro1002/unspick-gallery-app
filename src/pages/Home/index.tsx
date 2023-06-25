import { useState } from "react"
import ListImages from "../../components/ListImages"
import api from "../../configs/api"
import PhotoModel from "../../models/PhotoModel"
import { SearchArea, SearchInput } from "./styles"
import { PropsRoutesType } from "../../@types/routes"



const Home = ({ navigation }: PropsRoutesType<'Home'>) => {
    const [search, setSearch] = useState('')

    const loadImages = async () => {
        const response = await api.get('/photos/random', {
            params: {
                count: 30
            }
        })

        console.log('response: ', response.data);
        

        const results = response.data

        const formattedResults: PhotoModel[] = results.map((data: any) => new PhotoModel(data))
        
        return formattedResults
    }

    return (
        <>
            <SearchArea>
                <SearchInput 
                    placeholder={'Busque aqui suas imagens'}
                    value={search}
                    onChangeText={setSearch}
                    onEndEditing={() => {
                        search !== '' && navigation.navigate('List Photos', {
                            search    
                        });
                    }}
                />
            </SearchArea>
            <ListImages loadImages={loadImages}/>
        </>
    )
}

export default Home