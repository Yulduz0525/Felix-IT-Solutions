import React, { ReactNode, useEffect, useState } from 'react';
// import NavArrow from "../../assets/navArrow.png"
import { useTranslation } from 'react-i18next';
import { CustomDropdown, DropDownBtn, DropdownItem, DropdownMenu, LangWrap } from './language.s';
import English from '@/assets/img/eng.png'
import Russian from "@/assets/img/rus.png"
import Uzbek from "@/assets/img/uzb.webp"
import Image from 'next/image';
type LanguageOption = 'uz' | 'ru' | 'en';

 export const Language: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [rotate, setRotate] = useState<boolean>(false);
    const { i18n } = useTranslation();

    const rotateArrow = () => {
        setRotate(!rotate);
    }

    // Tilni localStorage-dan olish
    const initialLanguage: LanguageOption = 
        typeof window !== "undefined" 
            ? (localStorage.getItem("language") as LanguageOption) || "uz" 
            : "uz";
    
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(initialLanguage);

    // Tilni o'zgartirganda
    useEffect(() => {
        if (i18n && typeof i18n.changeLanguage === "function") {
            i18n.changeLanguage(selectedLanguage);
            localStorage.setItem("language", selectedLanguage);
        } else {
            console.error("i18n object or changeLanguage method is not available.");
        }
    }, [selectedLanguage, i18n]);

    // Tilni tanlash funksiyasi
    const onChangeLanguage = (value: LanguageOption) => {
        setSelectedLanguage(value);
        setIsMenuOpen(false); // Menu yopish
    };

    // Har bir til uchun matn
    const getLanguageText = (lang: LanguageOption): ReactNode => {
        switch (lang) {
            case "uz":
                return <LangWrap><Image width={24} src={Uzbek} alt='uzbek'/> O'zbekcha</LangWrap>;
            case "ru":
                return <LangWrap><Image width={24} src={Russian} alt='Russian'/> Русский</LangWrap>;
            case "en":
                return <LangWrap><Image width={24} src={English} alt='english'/>English</LangWrap>;
            default:
                return "English";
        }
    };

    const languageText = getLanguageText(selectedLanguage);

    return (
        <CustomDropdown onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <DropDownBtn onClick={rotateArrow}>
                <p>{languageText}</p> 
                {/* <img className={`${rotate && "rotate"} arrowImg`} src={NavArrow} alt="Nav arrow" /> */}
            </DropDownBtn>
            {
                isMenuOpen && (
                    <DropdownMenu>
                        <DropdownItem 
                            onClick={() => onChangeLanguage("uz")}
                        >
                            <p className='btnText fs-5'>{getLanguageText("uz")}</p>
                        </DropdownItem>
                        <DropdownItem className="custom-dropdown-item py-1 px-2"
                            onClick={() => onChangeLanguage("ru")}
                        >
                            <p className='btnText fs-5'>{getLanguageText("ru")}</p>
                        </DropdownItem>
                        <DropdownItem className="custom-dropdown-item py-1 px-2"
                            onClick={() => onChangeLanguage("en")}
                        >
                            <p className='btnText fs-5'>{getLanguageText("en")}</p>
                        </DropdownItem>
                    </DropdownMenu>
                )
            }
        </CustomDropdown>
    )
}

