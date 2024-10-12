import { HeaderWrap } from "./header.s"
import { Column, Container, Row } from "flex-box-packg-lib"
import { ButtonDefault, H1, Subtext } from "typography-packgs"
import HeaderImg1 from "@/assets/img/header-img1.png"
import HeaderImg2 from "@/assets/img/header-img2.png"
import HeaderImg3 from "@/assets/img/header-img3.png"
import Image from "next/image"
export const Header = () => {
    return (
        <>
            <HeaderWrap>
                <Container>
                    <Row wrap={{ sm: "nowrap", md: "wrap" }}
                        direction="row"
                        content="space-between"
                        align_items="center"
                        gap={{ sm: 10, md: 20 }}
                        width="100%">
                        <Column size={{ sm: 6, md: 4 }}
                            difference={{ sm: 10, md: 20 }}
                            wrap="wrap"
                            direction="column">
                            <H1>A fully translated website,<Subtext>the simple way</Subtext></H1>
                            <ButtonDefault>Join us</ButtonDefault>
                            <ButtonDefault>Donate</ButtonDefault>
                        </Column>
                        <Column size={{ sm: 6, md: 8 }}
                            difference={{ sm: 10, md: 20 }}
                            wrap="wrap"
                            direction="column">
                            <Image src={HeaderImg1} alt="header-image-one"/>
                            <Image src={HeaderImg2} alt="header-image-two"/>
                            <Image src={HeaderImg3} alt="header-image-three"/>
                        </Column>
                    </Row>
                </Container>
            </HeaderWrap>
        </>
    )
}