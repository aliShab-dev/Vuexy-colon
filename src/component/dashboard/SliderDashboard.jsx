import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import Image from 'next/image';
import { Wraper } from '../../../styles/dashboard/slider/sliderStyle';


const sliderData = [
{id:'analytics',title: 'Website Analytics', disc: 'Trafic', data1: {title:'direct', num: '286'},data2: {title:'organic', num: '900'}, data3: {title:'referral', num: '62'} ,data4: {title:'campaign', num: '1.2k'}},
{id:'traffic', title:  'Website Analytics', disc: 'Traffic', data1: {title:'session', num: '28%'},data2: {title:'page view', num: '3.1k'}, data3: {title:'leads', num: '1.3k'} ,data4: {title:'conversation', num: '12%'}},
{id:'speeding', title: 'Website Analytics', disc: 'Speeding', data1: {title:'spend', num: '2h'},data2: {title:'order size', num: '24'}, data3: {title:'order', num: '62'} ,data4: {title:'items', num: '3.2k'}},]





const SliderDashboard = () => {


  return(
    <>
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination,Autoplay]}
        autoplay={{delay: 1000, disableOnInteraction: false}}
        pagination={{clickable: true}}
        navigation={false}
        style={{zIndex:1,flex:1,minWidth:'400px', height: '160px',backgroundColor:"#685DD8", borderRadius: '5px',
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-inactive-color": "#A49DE7",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "6px",
        "--swiper-pagination-bullet-horizontal-gap": "2px"}}>
{

    sliderData.map(card => (

        <SwiperSlide key={card.id}> 

          <Wraper>
           
            <div className='left'>
              <div>
              <strong>
                {card.title}
              </strong>
              <p>
                Total 27% Conversation Rate
              </p>
              
              </div>
              <div className='second'>
                <small>{card.disc}</small>
                <div className='table'>
                <div>
                  <p>  {card.data1.title}: </p>
                  <p className='boxed'>  {card.data1.num}</p>
                </div>
       
              <div>
                  <p>{card.data2.title}:</p>
                  <p className='boxed'>  {card.data2.num}</p>
                </div>
       
              <div>
                  <p>{card.data3.title}:</p>
                  <p className='boxed'>  {card.data3.num}</p>
                </div>

              <div>
                  <p>{card.data4.title}:</p>
                  <p className='boxed'>  {card.data4.num}</p>
                </div>
            
                </div>
              </div>
            </div>

            <div className='rignt'>
              <div>
                <Image src="/Datacubes.svg" alt='pic' width={130} height={150}/>
              </div>
            </div>

          </Wraper>
          
        </SwiperSlide>
                ))
            }

      </Swiper>

    </>

  )
}


export default SliderDashboard