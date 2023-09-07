/* eslint-disable react/no-unescaped-entities */
import { ReactComponent as Call } from 'assets/svg/call.svg';
import { ReactComponent as Location } from 'assets/svg/location.svg';
import { ReactComponent as Reservation } from 'assets/svg/reservation.svg';
import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import LogoRow from 'assets/image/logo_row_gold_white.png';
import LogoRowMobile from 'assets/image/logo_row_gold.png';
import Yeji from 'assets/image/doctor/yeji.png';
import Dahee from 'assets/image/doctor/dahi.png';
import Hyein from 'assets/image/doctor/hyein.png';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import Slide from 'assets/image/slider/slide.png';
import Slide1 from 'assets/image/slider/slide1.png';
import Slide2 from 'assets/image/slider/slide2.png';
import Slide3 from 'assets/image/slider/slide3.png';
import Slider from 'react-slick';
import KakaoMap from './components/kakakoMap';
import styles from './Home.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const { isMobile } = useMediaQuery();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 700,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <div className={styles.banner__wrap}>
            <img className={!isMobile ? styles.banner__logo : styles.disabled} src={LogoRow} alt="" />
            <img className={isMobile ? styles.banner__logo : styles.disabled} src={LogoRowMobile} alt="" />
          </div>
          <div className={styles.banner__main}>
            체계적인 진료
            {'\n'}
            체질 맞춤 처방
          </div>
          <div className={styles.banner__sub}>
            개개인의 맞춤 진료를 통하여 환자분들에게 최선을 다하는 것이 해득금천의 진료 철학입니다.
            {'\n'}
            정성과 진심을 다해 진료하겠습니다.
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
            {isMobile && (
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
            )}
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
            {!isMobile && (
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
            )}
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
        <div className={styles.slide}>
          <span className={styles.slide__title}>
            해득금천 한의원
          </span>
          둘러보기
          <Slider className={styles.slider} {...settings}>
            <img src={Slide} alt="" />
            <img src={Slide1} alt="" />
            <img src={Slide2} alt="" />
            <img src={Slide3} alt="" />
          </Slider>
        </div>

        <div className={styles.time}>
          <div className={styles.time__cover} />
          <div className={styles.time__left}>
            <span className={styles['time__left--title']}>해득금천한의원</span>
            서울시 금천구 금하로 631, 2층, 3층 (시흥동)
            <a className={styles['time__left--phone']} href="tel:02-6952-3988">
              <Phone />
              02-6952-3988
            </a>
          </div>
          <div className={styles.time__left}>
            <span className={styles['time__left--title']}>진료시간</span>
            <div className={styles['time__left--info']}>
              <div className={styles.time__container}>
                <span className={styles['time__container--day']}>평일</span>
                <span className={styles['time__container--time']}>오전 8:00 ~ 오후 9:00</span>
              </div>
              <div className={styles.time__container}>
                <span className={styles['time__container--day']}>점심시간</span>
                <span className={styles['time__container--time']}>오후 1:00 ~ 오후 2:00</span>
              </div>
              <div />
              <div className={styles.time__container}>
                <span className={styles['time__container--day']}>주말·공휴일</span>
                <span className={styles['time__container--time']}>오전 8:00 ~ 오후 5:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <span className={styles.map__title}>
            해득금천한의원 오시는길
          </span>
          <KakaoMap />
          <div className={styles.map__parking}>
            <div className={styles['map__parking--title']}>
              해득금천한의원
              {'\n'}
              {' '}
              주차장안내
            </div>
            <div className={styles['map__parking--guide']}>
              시흥대로 224 리메인시티 주차장 (우리은행 건물)
              {'\n'}
              최대
              <strong style={{ color: '#ff0000' }}>2시간</strong>
              주차지원 가능합니다.
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footer__info}>
            <span className={styles['footer__info--title']}>
              @해득금천한의원
            </span>
            <span>
              주소: 서울시 금천구 금하로 631, 2층,3층(시흥동)
            </span>
            <span>
              <span className={styles['footer__info--phone']}>
                전화번호: 02-6952-3988
                {'\n'}
              </span>
              사업자 등록번호 : 568-90-01753
              <span className={styles['footer__info--ceo']}>
                대표: 김혜인
              </span>
            </span>
            <span>
              COPYRIGHT @ 2023 HaeDeukGeumCheon.
              {' '}
              ALL RIGHTS RESERVED
            </span>
          </div>
          <div className={styles.footer__phone}>
            <Call />
            02-6952-3988
          </div>
          <div className={styles.footer__logo}>
            <img src={LogoRow} alt="" />
          </div>
        </div>

        <div className={styles.sideMenu}>
          <a
            className={styles.sideMenu__map}
            href={isMobile ? 'https://m.map.naver.com/search2/search.naver?query=%ED%95%B4%EB%93%9D%EA%B8%88%EC%B2%9C%ED%95%9C%EC%9D%98%EC%9B%90&sm=sug&style=v5'
              : 'https://map.naver.com/p/entry/place/1669555615?lng=126.9012693&lat=37.4549376&placePath=%2Fhome%3Fentry%3Dplt&c=15.00,0,0,0,dh'}
          >
            <Location />
          </a>
          <a
            className={styles.sideMenu__phone}
            href="tel:02-6952-3988"
          >
            <Call />
          </a>
          <a
            className={styles.sideMenu__register}
            href={isMobile ? 'https://m.booking.naver.com/booking/13/bizes/969360?theme=place&area=ple'
              : 'https://map.naver.com/p/entry/place/1669555615?lng=126.9012693&lat=37.4549376&placePath=%2Fbooking%3FbookingRedirectUrl%3Dhttps%3A%2F%2Fm.booking.naver.com%2Fbooking%2F13%2Fbizes%2F969360%26entry%3Dplt&c=15.00,0,0,0,dh'}
          >
            <Reservation />
          </a>
        </div>
      </div>
    </div>
  );
}
