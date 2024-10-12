import { FC } from "react";
import { LinksWrap, LogoLinkWrap, NavbarWrap, NavLinksWrap } from "./navbar.s";
import Image from "next/image";
import Logo from "@/assets/img/logo.png"
import Link from "next/link";
import { navLinks } from "@/mock/nav";
import { Language } from "@/components/language";
import { Container } from "flex-box-packg-lib";
import { useRouter } from "next/router";
interface INavbarProps { }
export const Navbar: FC<INavbarProps> = ({ }) => {
    const router = useRouter();
    console.log(router)
    return (
        <>
            <NavbarWrap>
                <Container>
                    <NavLinksWrap>
                        <LogoLinkWrap>
                            <Link href={'/'}>
                                <Image width={142} src={Logo} alt="brand logo" />
                            </Link>
                            <LinksWrap>
                                {navLinks.map((link, key) => {
                                    return (
                                        <Link key={key} href={link.url} className={router.pathname===link.url ? 'active':""}>{link.text}</Link>
                                    )
                                })}
                            </LinksWrap>
                        </LogoLinkWrap>
                        <Language />
                    </NavLinksWrap>
                </Container>
            </NavbarWrap>
        </>
    )
}