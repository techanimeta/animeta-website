import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuIcon from "../../public/images/menuIcon.png";
import CloseIcon from "../../public/images/close-icon.png";
import { useRouter } from 'next/router';

function Navbar() {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const router = useRouter();
    const handleClick = () => {
        setIsMenuShow(!isMenuShow);
    };
    useEffect(() => {
        console.log("testestset", router);
        if (isMenuShow) {
            setIsMenuShow(false);
        }
    }, [router]);

    return (
        <>
            {/* <nav className='navbar' id='navbar'>
                <div className='navWrapp'>
                    <div></div>
                    <div className='Logo'>
                        <Link href='/' className={`${router.asPath === "/" ? 'active' : ''}`}>
                            <a>
                                <Image src={Logo} className="lazyload" alt="Logo" height={33} width={200} />
                            </a>
                        </Link>
                        <button type='button' className='MenuToggler' onClick={handleClick}>
                            <RxHamburgerMenu className='MenuImage' />
                        </button>
                    </div>
                    <ul className='desktop-menu'>
                        <li>
                            <Link href='/people' legacyBehavior>
                                <a className={`${router.asPath === "/people" ? 'active' : ''}`}>People</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/news' legacyBehavior>
                                <a className={`${router.asPath === "/news" ? 'active' : ''}`}>News</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='shadow-nav'></div>
                {isMenuShow && (<div className='NavItems'>
                        <ul>
                            <li>
                                <Link href='/people' legacyBehavior>
                                    <a className={`${router.asPath === "/people" ? 'active' : ''}`}>People</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/news' legacyBehavior>
                                    <a className={`${router.asPath === "/news" ? 'active' : ''}`}>News</a>
                                </Link>
                            </li>
                        </ul>
                    </div>)}
            </nav> */}
        </>
    )
}

export default Navbar