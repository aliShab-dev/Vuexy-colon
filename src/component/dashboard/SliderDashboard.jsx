import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import Image from 'next/image';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';


const sliderData = [
{id:'analytics',title: 'Website Analytics', disc: 'Trafic', data1: {title:'direct', num: '286'},data2: {title:'organic', num: '900'}, data3: {title:'referral', num: '62'} ,data4: {title:'campaign', num: '1.2k'}},
{id:'traffic', title:  'Website Analytics', disc: 'Stocks', data1: {title:'session', num: '28%'},data2: {title:'page view', num: '3.1k'}, data3: {title:'leads', num: '1.3k'} ,data4: {title:'conversation', num: '12%'}},
{id:'speeding', title: 'Website Analytics', disc: 'Speeding', data1: {title:'spend', num: '2h'},data2: {title:'order size', num: '24'}, data3: {title:'order', num: '62'} ,data4: {title:'items', num: '3.2k'}},]


 const StyledSwiper = styled(Swiper)({
  width: '100%',
  backgroundColor:"#685DD8", 
  '& .swiper-wrapper':{
    width: '100%'
  }
 })


const SliderDashboard = () => {
  return(
        <StyledSwiper
          spaceBetween={3}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination,Autoplay]}
          autoplay={{delay: 1000, disableOnInteraction: false}}
          pagination={{clickable: true}}
          navigation={false}
          style={{
            zIndex:1,
            borderRadius: '5px',
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#A49DE7",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "7px",
            "--swiper-pagination-bullet-horizontal-gap": "3px"
            }}>
          {

            sliderData.map(card => (

                <SwiperSlide key={card.id}> 

                  <Grid container spacing={0}>

                  <Grid
                    xs={12}
                    sm={4}
                    md={6}
                    item
                    alignItems={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                    >
                      <Image
                        src="/Datacubes.svg"
                        alt='pic'
                        width={160}
                        height={160}
                        />
                    </Grid>
                  
                    <Grid
                      item
                      justifyContent={'start'}
                      width={'60%'}
                      gap={1}
                      paddingLeft={5}
                      paddingTop={2}
                      paddingBottom={2}
                      xs={12}
                      sm={8}
                      md={6}
                      >

                      <Grid item>
                          <Typography
                            color={'white'}
                            fontSize={15}
                            fontWeight={700}
                          >
                            {card.title}
                          </Typography>

                          <Typography
                            color={'white'}
                            fontSize={13}
                            fontWeight={400}
                          >
                            Total 27% Conversation Rate
                          </Typography>
                      </Grid >

                      <Grid
                        item
                        marginTop={1}
                        >
                        <Typography
                          fontWeight={700}
                          color={'white'}
                          >
                          {card.disc}
                        </Typography>

                        <Grid
                          container
                          spacing={0}
                        >
                            
                          <Grid
                            item
                            xs={6}
                            >
                            <Typography
                              color={'white'}
                              fontSize={13}
                              fontWeight={300}
                              >
                                {card.data1.title} : {card.data1.num}
                            </Typography>

                          </Grid>
                
                          <Grid
                            item
                            xs={6}
                            >
                            <Typography
                              color={'white'}
                              fontSize={13}
                              fontWeight={300}
                              >
                              {card.data2.title} : {card.data2.num}
                            </Typography>

                          </Grid>
                
                          <Grid
                            item
                            xs={6}
                            >
                            <Typography
                              color={'white'}
                              fontSize={13}
                              fontWeight={300}
                              >
                              {card.data3.title} : {card.data3.num}
                            </Typography>
                          </Grid>

                          <Grid
                            item
                            xs={6}
                            >
                            <Typography
                              color={'white'}
                              fontSize={13}
                              fontWeight={300}
                              >
                              {card.data4.title} : {card.data4.num}
                            </Typography>
                          </Grid>
                      
                          
                          
                          
                        </Grid>


                      </Grid>

                    </Grid>

                  </Grid>
                  
                </SwiperSlide>
              ))
          }
      </StyledSwiper>
  )
}


export default SliderDashboard