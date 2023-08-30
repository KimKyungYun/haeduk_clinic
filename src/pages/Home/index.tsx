import { ReactComponent as Call } from 'assets/svg/call.svg';
import { ReactComponent as Location } from 'assets/svg/location.svg';
import { ReactComponent as Reservation } from 'assets/svg/reservation.svg';
// import { ReactComponent as Test } from 'assets/svg/test2.svg';
import LogoRow from 'assets/image/logo_row_gold_white.png';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <img className={styles.banner__logo} src={LogoRow} alt="" />
          <div className={styles.banner__main}>
            체계적인 진료와
            {'\n'}
            맞춤 의료 서비스
          </div>
          <div className={styles.banner__sub}>
            개개인의 맞춤진료를 통하여 각각의 환자분들에게 최선을 다하는 것이 해운누리의 진료 철학입니다.
            {'\n'}
            정성과 신뢰를 바탕으로 항상 노력하겠습니다.
          </div>
        </div>
        <div className={styles.introduce}>
          <div className={styles.introduce__phrase}>
            <div className={styles['introduce__phrase--main']}>해득금천한의원</div>
            <div className={styles['introduce__phrase--sub']}>
              해득금천만의 신뢰할 수 있는 진료
              {'\n'}
              환자 개개인에게 맞는 최고의 진료를 위해 노력하겠습니다.
            </div>
          </div>
          <div className={styles.introduce__menu}>a</div>
        </div>
        <div className={styles.sideMenu}>
          <a
            className={styles.sideMenu__item}
            href="https://map.naver.com/p/entry/place/1669555615?lng=126.9012693&lat=37.4549376&placePath=%2Fhome%3Fentry%3Dplt&c=15.00,0,0,0,dh"
          >
            <Location />
          </a>
          <a
            className={styles.sideMenu__item}
            href="tel:010-7212-3822"
          >
            <Call />
          </a>
          <a
            className={styles.sideMenu__item}
            href="https://map.naver.com/p/entry/place/1669555615?lng=126.9012693&lat=37.4549376&placePath=%2Fbooking%3FbookingRedirectUrl%3Dhttps%3A%2F%2Fm.booking.naver.com%2Fbooking%2F13%2Fbizes%2F969360%26entry%3Dplt&c=15.00,0,0,0,dh"
          >
            <Reservation />
          </a>
        </div>
      </div>
    </div>
  );
}
