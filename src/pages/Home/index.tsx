import { ReactComponent as Call } from 'assets/svg/call.svg';
import { ReactComponent as Location } from 'assets/svg/location.svg';
import { ReactComponent as Reservation } from 'assets/svg/reservation.svg';
import LogoRow from 'assets/image/logo_row_gold_white.png';
import LogoRowMobile from 'assets/image/logo_row_gold.png';
import Yeji from 'assets/image/doctor/yeji.png';
import Dahee from 'assets/image/doctor/dahi.png';
import Hyein from 'assets/image/doctor/hyein.png';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './Home.module.scss';

export default function Home() {
  const { isMobile } = useMediaQuery();
  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <div className={styles.banner__wrap}>
            <img className={!isMobile ? styles.banner__logo : styles.disabled} src={LogoRow} alt="" />
            <img className={isMobile ? styles.banner__logo : styles.disabled} src={LogoRowMobile} alt="" />
          </div>
          <div className={styles.banner__main}>
            체계적인 진료와
            {'\n'}
            맞춤 의료 서비스
          </div>
          <div className={styles.banner__sub}>
            개개인의 맞춤진료를 통하여 각각의 환자분들에게 최선을 다하는 것이 해득금천의 진료 철학입니다.
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
          <div className={styles.introduce__menu}>
            <div className={styles['introduce__menu--item']}>
              1대1 맞춤
              {'\n'}
              한방치료
            </div>
            <div className={styles['introduce__menu--item']}>
              365일
              {'\n'}
              상시 입원가능
            </div>
            <div className={styles['introduce__menu--item']}>
              입원환자
              {'\n'}
              24시간 모니터링
            </div>
          </div>
        </div>

        <div className={styles.doc}>
          <span className={styles.doc__title}>의료진 소개</span>
          <div className={styles.doc__list}>
            <div className={styles.doc__wrap}>
              <div className={styles.doc__career}>
                <div className={styles['doc__career--top']}>
                  <span className={styles['doc__career--name']}>
                    방예지
                    {' '}
                  </span>
                  <span className={styles['doc__career--rank']}>진료원장</span>
                  <span>한의사</span>
                </div>
                <ul className={styles['doc__career--ul']}>
                  <li className={styles['doc__career--list']}>현) 해득금천한의원 진료원장</li>
                  <li className={styles['doc__career--list']}>전) 맑은숲한의원 인천논현점 진료원장</li>
                  <li className={styles['doc__career--list']}>원광대학교 한의과대학 졸업</li>
                  <li className={styles['doc__career--list']}>소문학회 정회원</li>
                  <li className={styles['doc__career--list']}>대한한의학회 정회원</li>
                  <li className={styles['doc__career--list']}>척추신경추나의학회 회원</li>
                  <li className={styles['doc__career--list']}>대한동의방약학회 회원</li>
                  <li className={styles['doc__career--list']}>한방비만학회 회원</li>
                  <li className={styles['doc__career--list']}>대한한방신경정신과학회 회원</li>
                  <li className={styles['doc__career--list']}>대한스포츠한의학회 회원</li>
                </ul>
              </div>
              <div className={styles.doc__img}>
                <img src={Yeji} alt="" />
              </div>
              <div className={styles.doc__name}>
                <span className={styles['doc__name--name']}>방예지</span>
                진료원장
              </div>
            </div>
            <div className={styles.doc__wrap}>
              <div className={styles.doc__career}>
                <div className={styles['doc__career--top']}>
                  <span className={styles['doc__career--name']}>
                    김혜인
                    {' '}
                  </span>
                  <span className={styles['doc__career--rank']}>대표원장</span>
                  <span>한의사</span>
                </div>
                <ul className={styles['doc__career--ul']}>
                  <li className={styles['doc__career--list']}>현) 해득금천한의원 대표원장</li>
                  <li className={styles['doc__career--list']}>전) 광덕안정한의원 일산주엽점 원장</li>
                  <li className={styles['doc__career--list']}>전) 미올한의원 파주운정점 진료원장</li>
                  <li className={styles['doc__career--list']}>전) 누베베한의원 강남점 진료원장</li>
                  <li className={styles['doc__career--list']}>원광대학교 한의과대학 졸업</li>
                  <li className={styles['doc__career--list']}>한방비만학회 회원</li>
                  <li className={styles['doc__career--list']}>대한약침학회 회원</li>
                  <li className={styles['doc__career--list']}>대한한방부인과학회 회원</li>
                  <li className={styles['doc__career--list']}>척추신경추나의학회 회원</li>
                  <li className={styles['doc__career--list']}>대한한의학회 회원</li>
                  <li className={styles['doc__career--list']}>턱관절균형의학회 FCST 일반과정 수료</li>
                </ul>
              </div>
              <div className={styles.doc__img}>
                <img src={Hyein} alt="" />
              </div>
              <div className={styles.doc__name}>
                <span className={styles['doc__name--name']}>김혜인</span>
                대표원장
              </div>
            </div>
            <div className={styles.doc__wrap}>
              <div className={styles.doc__career}>
                <div className={styles['doc__career--top']}>
                  <span className={styles['doc__career--name']}>
                    허다희
                    {' '}
                  </span>
                  <span className={styles['doc__career--rank']}>진료원장</span>
                  <span>한의사</span>
                </div>
                <ul className={styles['doc__career--ul']}>
                  <li className={styles['doc__career--list']}>현) 해득금천한의원 진료원장</li>
                  <li className={styles['doc__career--list']}>한방부인과 전문의</li>
                  <li className={styles['doc__career--list']}>세명대학교한방병원 한방부인과 레지던트 수료</li>
                  <li className={styles['doc__career--list']}>세명대학교 한의과대학 졸업</li>
                  <li className={styles['doc__career--list']}>대한한방부인과학회 정회원</li>
                  <li className={styles['doc__career--list']}>한방비만학회 회원</li>
                  <li className={styles['doc__career--list']}>대한약침학회 회원</li>
                  <li className={styles['doc__career--list']}>대한한의학회 회원</li>
                </ul>
              </div>
              <div className={styles.doc__img}>
                <img src={Dahee} alt="" />
              </div>
              <div className={styles.doc__name}>
                <span className={styles['doc__name--name']}>허다희</span>
                진료원장
              </div>
            </div>
          </div>
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
