import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';

import { ImFileMusic, ImRadioChecked } from "react-icons/im";
import { BsPlayCircle } from "react-icons/bs";
import { BiBoltCircle, BiRadar, BiNews } from "react-icons/bi";

import { NavLink } from 'react-router-dom';

import config from '~/config';


const cx = classNames.bind(styles);


function Navbar() {
    return (  
        <div className={cx('wrapper')}>
            <ul className={cx('navbar-list')}>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.mymusic} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <ImFileMusic className={cx('icon-item')} />
                        <span className={cx('title-item')}>Cá Nhân</span>
                        <div className={cx('icon-item-hover-wrapper')}>
                            <BsPlayCircle className={cx('icon-item-hover')} />
                        </div>
                    </NavLink>
                </li>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.home} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <ImRadioChecked className={cx('icon-item')} />
                        <span className={cx('title-item')}>Khám Phá</span>
                    </NavLink>
                </li>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.zingchart} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <BiBoltCircle className={cx('icon-item')} style={{fontSize: '1.9rem'}} />
                        <span className={cx('title-item')}>#zingchart</span>
                        <div className={cx('icon-item-hover-wrapper')}>
                            <BsPlayCircle className={cx('icon-item-hover')} />
                        </div>
                    </NavLink>
                </li>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.radio} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <BiRadar className={cx('icon-item')} style={{fontSize: '1.9rem'}} />
                        <span className={cx('title-item')}>
                            Radio
                        </span>
                        <div className={cx('notice')}>live</div>
                        <div className={cx('icon-item-hover-wrapper')}>
                            <BsPlayCircle className={cx('icon-item-hover')} />
                        </div>
                    </NavLink>
                </li>
                <li className={cx('navbar-item-wrapper')}>
                    <NavLink to={config.routes.follow} className={(nav) => cx('navbar-item', { active: nav.isActive })}>
                        <BiNews className={cx('icon-item')} style={{fontSize: '1.9rem'}} />
                        <span className={cx('title-item')}>Theo Dõi</span>
                    </NavLink>
                </li>
            </ul>
            
            <div className={cx('line-top')}></div>
        </div>
    );
}

export default Navbar;