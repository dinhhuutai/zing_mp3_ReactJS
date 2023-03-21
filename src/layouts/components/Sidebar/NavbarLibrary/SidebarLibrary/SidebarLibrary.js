import styles from './SidebarLibrary.module.scss';
import classNames from 'classnames/bind';

import { BiPencil } from "react-icons/bi";
import { BsFillFileEarmarkMusicFill, BsPlayCircle, BsMusicNoteList, BsClockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import config from '~/config';

const cx = classNames.bind(styles);


function SidebarLibrary() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-title')}>
                <div className={cx('title')}>Thư viện</div>
                <BiPencil className={cx('icon-title')} />
            </div>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Link className={cx('item-link')} to={config.routes.mymusic}>
                        <BsFillFileEarmarkMusicFill className={cx('icon-item')} style={{fontSize: '1.7rem', color: '#009dff'}} />
                        <span className={cx('title-item')}>Bài hát</span>
                        <div className={cx('icon-item-hover-wrapper')}>
                            <BsPlayCircle className={cx('icon-item-hover')} />
                        </div>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link className={cx('item-link')} to={config.routes.mymusic}>
                        <BsMusicNoteList className={cx('icon-item')} style={{fontSize: '1.7rem', color: '#6cea00'}} />
                        <span className={cx('title-item')}>Playlist</span>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link className={cx('item-link')} to={config.routes.mymusic}>
                        <BsClockFill className={cx('icon-item')} style={{fontSize: '1.7rem', color: '#76ff00d9'}} />
                        <span className={cx('title-item')}>Gần đây</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SidebarLibrary;