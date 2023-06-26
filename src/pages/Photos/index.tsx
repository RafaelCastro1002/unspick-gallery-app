import { useEffect, useState } from "react";
import { PropsRoutesType } from "../../@types/routes";
import ListImages from "../../components/ListImages";
import api from "../../configs/api";
import PhotoModel from "../../models/PhotoModel";
import { useIsFocused } from "@react-navigation/native";

const Photos = ({ route, navigation }: PropsRoutesType<"List Photos">) => {
  const [page, setPage] = useState(10);
  const [per_page] = useState(30);
  const [key, setKey] = useState(0)

  const [isRenderList, setRenderList] = useState(false);

  const isFocused = useIsFocused();

  const verifyIfGoBack = () => {
    if (!route?.params?.search) {
      setRenderList(false);

      return navigation.goBack();
    } else {
      setRenderList(true);
    }
  };

  // useEffect(() => {
  //     navigation.addListener('focus', () => {
  //         verifyIfGoBack()
  //     })
  // }, [navigation])

  useEffect(() => {
    if (isFocused) {
      verifyIfGoBack();
      loadImages();
    }
  }, [isFocused]);

  useEffect(() => {
    setKey((key) => key + 1)
  }, [route])

  const loadImages = async () => {
    if (!isRenderList) return [];

    const response = await api.get("/search/photos", {
      params: {
        page,
        per_page,
        query: route.params.search,
      },
    });

    const { results } = response.data;

    const formattedResults: PhotoModel[] = results.map(
      (data: any) => new PhotoModel(data)
    );

    setPage((page) => page + 1);

    return formattedResults;
  };

  return (
    <>
      {isRenderList ? (
        <ListImages
          loadImages={loadImages}
          options={{
            height: "100%",
          }}
          key={key}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Photos;
