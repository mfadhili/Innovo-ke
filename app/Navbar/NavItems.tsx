'use client'

import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink, NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function NavItems() {
    return (
        <div className={"flex items-center gap-4 justify-center p-4 "}>
            {/*Nav Items*/}
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Nav Menu Item 1*/}
                    <NavigationMenuItem >
                        <Link href={""} legacyBehavior passHref >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <span className="">Home</span>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default NavItems;