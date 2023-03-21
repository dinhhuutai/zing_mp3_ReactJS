import styles from './LoginSidebar.module.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);


function LoginSidebar() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-login-sidebar')}>
                Đăng nhập để khám phá playlist dành riêng cho bạn
                <button className={cx('btn-login-sidebar')}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default LoginSidebar;