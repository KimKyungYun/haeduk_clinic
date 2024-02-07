import Youngha from 'assets/image/doctor/youngha.png';
import HeeWon from 'assets/image/doctor/heewon.png';
import Hyein from 'assets/image/doctor/hyein.png';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from '../Home.module.scss';

export default function Doctor() {
  const { isMobile } = useMediaQuery();
  return (
    <div className={styles.doc}>
      <span className={styles.doc__title}>의료진 소개</span>
      <div className={styles.doc__list}>
        <div className={!isMobile ? styles.disabled : styles.doc__wrap}>
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
              <li className={styles['doc__career--list']}>전) 광덕안정한의원 일산주엽점 진료원장</li>
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
            <img src={Hyein} alt="chief" />
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
                최희원
                {' '}
              </span>
              <span className={styles['doc__career--rank']}>진료원장</span>
              <span>한의사</span>
            </div>
            <ul className={styles['doc__career--ul']}>
              <li className={styles['doc__career--list']}>현) 해득금천한의원 진료원장</li>
              <li className={styles['doc__career--list']}>전) 북가좌경희한의원 진료원장</li>
              <li className={styles['doc__career--list']}>전) 금맥한의원 진료원장</li>
              <li className={styles['doc__career--list']}>전) 누베베한의원 부산점 진료원장</li>
              <li className={styles['doc__career--list']}>전) 누베베한의원 홍대점 진료원장</li>
              <li className={styles['doc__career--list']}>동의대학교 한의과대학 졸업</li>
              <li className={styles['doc__career--list']}>척추신경추나의학회 정회원</li>
              <li className={styles['doc__career--list']}>한방비만학회 회원</li>
              <li className={styles['doc__career--list']}>대한한의학회 회원</li>
            </ul>
          </div>
          <div className={styles.doc__img}>
            <img style={{ height: '90%' }} src={HeeWon} alt="doc" />
          </div>
          <div className={styles.doc__name}>
            <span className={styles['doc__name--name']}>최희원</span>
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
            <img src={Hyein} alt="chief" />
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
                박영하
                {' '}
              </span>
              <span className={styles['doc__career--rank']}>진료원장</span>
              <span>한의사</span>
            </div>
            <ul className={styles['doc__career--ul']}>
              <li className={styles['doc__career--list']}>현) 해득금천한의원 진료원장</li>
              <li className={styles['doc__career--list']}>전) 부야한의원 부원장</li>
              <li className={styles['doc__career--list']}>전) 광덕안정한의원 영등포대림점 진료원장</li>
              <li className={styles['doc__career--list']}>동신대학교 한의과대학 졸업</li>
              <li className={styles['doc__career--list']}>척추신경추나학회 정회원</li>
              <li className={styles['doc__career--list']}>척추신경추나학회 정규워크샵 수료</li>
              <li className={styles['doc__career--list']}>한의기능영양학회 정회원</li>
              <li className={styles['doc__career--list']}>대한동의방약학회 회원</li>
              <li className={styles['doc__career--list']}>심리상담사 2급</li>
            </ul>
          </div>
          <div className={styles.doc__img}>
            <img src={Youngha} alt="doc" />
          </div>
          <div className={styles.doc__name}>
            <span className={styles['doc__name--name']}>박영하</span>
            진료원장
          </div>
        </div>

      </div>
    </div>
  );
}
