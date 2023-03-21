import styles from './NavbarLibrary.module.scss';
import classNames from 'classnames/bind';

import NavbarLibraryTop from './NavbarLibraryTop';
import LoginSidebar from './LoginSidebar';
import BannerSidebarVip from './BannerSidebarVip';
import SidebarLibrary from './SidebarLibrary';

import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function NavbarLibrary() {

    const [login, setLogin] = useState(true);

    const [scroll, setScroll] = useState(0);
    const wrNavLib = useRef();



    useEffect(() => {
        wrNavLib.current.onscroll = () => {
            setScroll(wrNavLib.current.scrollTop);
        }
    },);

    return (
        <div ref={wrNavLib} className={cx('wrapper', {active: scroll > 2})}>
            <NavbarLibraryTop />
            {login || <LoginSidebar />}
            <BannerSidebarVip />
            {login && <SidebarLibrary />}
        </div>
    );
}

export default NavbarLibrary;
