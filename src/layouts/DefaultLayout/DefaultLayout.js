import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import bg0 from '~/assets/img/main_bg-0.svg';


const cx = classNames.bind(styles);


function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')} style={{backgroundImage: `url(${bg0})`}}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;