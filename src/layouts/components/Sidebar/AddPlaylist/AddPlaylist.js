import styles from './AddPlaylist.module.scss';
import classNames from 'classnames/bind';

import { AiOutlinePlus } from "react-icons/ai";

const cx = classNames.bind(styles);


function AddPlaylist() {
    return (  
        <div className={cx('wrapper')}>
            <AiOutlinePlus className={cx('icon')} />
            Tạo playlist mới
        </div>
    );
}

export default AddPlaylist;