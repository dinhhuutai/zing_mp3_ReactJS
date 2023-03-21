import styles from './NavbarLibraryTop.module.scss';
import classNames from 'classnames/bind';

import { NavLink } from 'react-router-dom';
import { BsPlayCircle, BsFilm } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";
import { AiOutlineAppstore, AiOutlineStar } from "react-icons/ai";

import config from '~/config';


const cx = classNames.bind(styles);


function NavbarLibraryTop() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('navbar-list')}>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.newrelease} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <BiMusic className={cx('icon-item')} />
                        <span className={cx('title-item')}>Nhạc mới</span>
                        <div className={cx('icon-item-hover-wrapper')}>
                            <BsPlayCircle className={cx('icon-item-hover')} />
                        </div>
                    </NavLink>
                </li>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.hub} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <AiOutlineAppstore className={cx('icon-item')} />
                        <span className={cx('title-item')}>Thể Loại</span>
                    </NavLink>
                </li>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.top100} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <AiOutlineStar className={cx('icon-item')} />
                        <span className={cx('title-item')}>Top 100</span>
                    </NavLink>
                </li>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.categorymv} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <BsFilm className={cx('icon-item')} style={{fontSize: '1.5rem'}} />
                        <span className={cx('title-item')}>MV</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavbarLibraryTop;