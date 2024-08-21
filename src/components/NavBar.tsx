import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import SwitchDarkModeToggle from "./SwitchDarkModeToggle";

const NavBar = () => {
    return <>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px' />
            <SwitchDarkModeToggle />
        </HStack>
    </>
}

export default NavBar