'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import Logo from "./ui/Logo";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>

{/* fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 */}
{/* text-black dark:text-white */}

        <Logo /> 

        <Menu setActive={setActive}>
            
        
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={'#'} item="Home">
                    </MenuItem>
                </Link>

                {/* <Link href="/aboutus">
                    <MenuItem setActive={setActive} active={'#'} item="About Us">
                    </MenuItem>
                </Link> */}

                <Link href="/portfolio">
                    <MenuItem setActive={setActive} active={'#'} item="Portfolio">
                    </MenuItem>
                </Link>

                <Link href={"/blogs"}>
                    <MenuItem setActive={setActive} active={'#'} item="Blogs">
                    </MenuItem>
                </Link>

                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={'#'} item="Contact">
                    </MenuItem>
                </Link>
                </Menu>
            </div>
            
        
  );
}

export default Navbar;