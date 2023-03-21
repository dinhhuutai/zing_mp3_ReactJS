import styles from './BannerSidebarVip.module.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);


function BannerSidebarVip() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-banner-sidebar')}>
                Nghe nhạc không quảng cáo cùng kho nhạc VIP
                <button className={cx('btn-banner-sidebar')}>nâng cấp vip</button>
            </div>
        </div>
    );
}

export default BannerSidebarVip;