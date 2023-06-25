import { CardDetailProps } from "../../@types/components"
import { Container, Icon, Subtitle, TitleContainer, Title } from "./styles"

export const CardDetail = ({ imgUrl, title, subtitle }: CardDetailProps) => {
    return (
        <Container>
            <Icon source={imgUrl} />
            <TitleContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleContainer>
        </Container>
    )
}

export default CardDetail