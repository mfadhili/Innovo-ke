'use client'

import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

type NavItemProps ={
    text: string,

}

function NavItem({text}:NavItemProps) {
    return (
        <NavigationMenu.Item className={"font-normal text-white leading-none no-underline outline-none select-none block px-3 py-2 text-xl  "}>
            <NavigationMenu.Link>
                {text}
            </NavigationMenu.Link>
        </NavigationMenu.Item>
    );
}

const NavLinks:{
    title: string,
    description: string
}[] = [
    {
        title: "Home",
        description: "Return to the homepage",
    },
    {
        title: "About",
        description: "Learn more about our company and mission",
    },
    {
        title: "Resources",
        description: "Explore our range of products and services",
    },
    {
        title: "Solutions",
        description: "Discover the services we offer",
    },
    {
        title: "Contact",
        description: "Get in touch with us",
    },
]

function NavItems() {
    return (
        <NavigationMenu.Root className={"w-2/3"}>
            <NavigationMenu.List className={"flex flex-row list-none"}>
                <div className={"flex flex-row justify-evenly w-full "}>
                    {NavLinks.map((NavLink) => (
                        <NavItem key={NavLink.title} text={NavLink.title}/>
                    ))}
                </div>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}

export default NavItems;