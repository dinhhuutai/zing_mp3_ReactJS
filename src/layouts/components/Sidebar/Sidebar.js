import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import logoZing from '~/assets/img/ZingMP3logo.svg.png';
import config from '~/config';
import Navbar from './Navbar';
import NavbarLibrary from './NavbarLibrary';
import AddPlaylist from './AddPlaylist';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


function Sidebar() {

    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home} className={cx('wrapper-logo')}>
                <img className={cx('logo')} alt="logo" src={logoZing} />
            </Link>
            <Navbar />
            <NavbarLibrary />
            <AddPlaylist />
        </div>
    );
}

export default Sidebar;