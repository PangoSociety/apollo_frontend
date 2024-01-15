import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import ApolloImages from '@/assets/ApolloImages';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/effect-fade';

function SwiperFadeAbsoluteBackground() {
  const { t } = useTranslation();

  const swiperSlideClassName =
    'before:absolute before:top-0  before:bottom-0 before:right-0 before:left-0 before:bg-blue-950 before:opacity-70';
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 -z-10">
      <div className=" ">
        <Swiper
          spaceBetween={30}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay]}
          className="max-h-screen"
        >
          {/* <BlueSwiperSlide /> */}
          <SwiperSlide className={swiperSlideClassName}>
            <img src={ApolloImages.loginBg1} alt={t('authuser.loginBgImageAlt')} />
          </SwiperSlide>
          <SwiperSlide className={swiperSlideClassName}>
            <img src={ApolloImages.loginBg2} alt={t('authuser.loginBgImageAlt')} />
          </SwiperSlide>
          <SwiperSlide className={swiperSlideClassName}>
            <img src={ApolloImages.loginBg3} alt={t('authuser.loginBgImageAlt')} />
          </SwiperSlide>
          <SwiperSlide className={swiperSlideClassName}>
            <img src={ApolloImages.loginBg4} alt={t('authuser.loginBgImageAlt')} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperFadeAbsoluteBackground;
