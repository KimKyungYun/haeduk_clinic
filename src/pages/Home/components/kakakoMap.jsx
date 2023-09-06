import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Main from 'assets/image/marker.PNG';

export default function KakaoMap() {
  return (
    <Map
      center={{ lat: 37.454963, lng: 126.9014 }}
      style={{ width: '400px', height: '400px' }}
      level={1}
    >
      <MapMarker
        position={{ lat: 37.454964, lng: 126.901244 }}
        clickable
        onClick={() => window.open('https://map.naver.com/p/entry/place/1669555615?c=15.00,0,0,0,dh')}
        image={{ src: Main, size: { width: 150, height: '100%' } }}
      >
        {/* <img src={Main} alt="" /> */}
      </MapMarker>
    </Map>
  );
}
