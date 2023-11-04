import { Avatar, Icon, Stack, Typography, Grid } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from "react-redux";
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';


export const CountryBoard = () => {
  const dispatch = useDispatch()
  const headerDisplay = useSelector(state => (state.DashboardHeaders.isShow))
  const selectedChart = useSelector(state => (state.DashboardHeaders.ChartName))

  const closeModal = e => {
    const moreVer = document.querySelector('.moreVer')
    headerDisplay && (e.target !== moreVer) && dispatch(HideModal())
  }
  const openModal = (props) => {
    dispatch(NameModal(props))
    dispatch(ShowModal())
    console.log(selectedChart, headerDisplay)
  }
    
  

  return(
    <Grid 
      container
      bgcolor={'background.paper'}
      borderRadius={2}
      padding={2}
      >
 
      <Grid
        container
        item
        display={'flex'}
        direction={'column'}
        gap={1}
        xs={12}
        >

        <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            >
            <Avatar
              alt="usa"
              src="/united-states-svgrepo-com.svg"
              sx={{
                width: 30, height: 30 
              }}/>

            <Stack 
              alignItems={'start'}
              justifyContent={'center'}
              >
                <Typography
                  color={'text.icon'}
                  fontSize={11}
                  fontWeight={700}
                  lineHeight={.8}
                 >
                  $ 8,632 K
                </Typography>

                <Typography
                  color={'text.primary'}
                  fontSize={10}
                  fontWeight={300}
                  >
                   United State
                </Typography>
            </Stack>

          </Stack>

          <Stack
            direction={'row'}
            alignItems={"center"}
            justifyContent={"center"}
            >

            <Icon>

              <KeyboardArrowUpIcon
                sx={{color:'#28C46D'}}
                fontSize="small"
                />

            </Icon>
            
            <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >
                25.8%
            </Typography>

          </Stack>

        </Stack>

        <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          >
             <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={2}
              >
                <Avatar
                  alt="Brazil"
                  src="/brazil-svgrepo-com.svg"
                  sx={{
                    width: 30, height: 30
                  }}/>
                <Stack 
                  alignItems={'start'}
                  justifyContent={'center'}
                  >
                  <Typography
                      color={'text.icon'}
                      fontSize={11}
                      fontWeight={700}
                      lineHeight={.8}
                    >
                      $ 8,202 K
                  </Typography>
                  <Typography
                      color={'text.primary'}
                      fontSize={10}
                      fontWeight={300}
                      >
                        Brazil
                  </Typography>
                </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={"center"}
            justifyContent={"center"}
            >

            <Icon>

              <KeyboardArrowDownIcon
                sx={{color:'#D04E52'}} fontSize="small"
              />

            </Icon>
            
            <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >
                21.2%
            </Typography>

          </Stack>

        </Stack>

         <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
           >
         <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            >
            <Avatar alt="india" src="/india-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            
           <Stack 
            alignItems={'start'}
            justifyContent={'center'}
            >
               <Typography
                  color={'text.icon'}
                  fontSize={11}
                  fontWeight={700}
                  lineHeight={.8}
                  >
                    $ 8,101 K
                </Typography>
             <Typography
                color={'text.primary'}
                fontSize={10}
                fontWeight={300}
                >
                  India
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={"center"}
            justifyContent={"center"}
            >
            <Icon>
              <KeyboardArrowUpIcon sx={{color:'#28C46D'}} fontSize="small" />
            </Icon>
            <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >20.9%</Typography>
          </Stack>
        </Stack>

         <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
         <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            >
            <Avatar alt="australia" src="/flag-for-flag-australia-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
           <Stack 
            alignItems={'start'}
            justifyContent={'center'}
            >
              <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >$ 7,832 K</Typography>
             <Typography
                color={'text.primary'}
                fontSize={10}
                fontWeight={300}
                >
                  Australia
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={"center"}
            justifyContent={"center"}
            >
            <Icon>
              <KeyboardArrowDownIcon sx={{color:'#D04E52'}} fontSize="small" />
            </Icon>
            <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >20.89%</Typography>
          </Stack>
        </Stack>

         <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
         <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            >
            <Avatar alt="france" src="/flag-for-flag-france-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
           <Stack 
            alignItems={'start'}
            justifyContent={'center'}
            >
              <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >$ 7,622 K</Typography>
             <Typography
                color={'text.primary'}
                fontSize={10}
                fontWeight={300}
                >
                  France
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={"center"}
            justifyContent={"center"}
            >
            <Icon>
              <KeyboardArrowDownIcon sx={{color:'#D04E52'}} fontSize="small" />
            </Icon>
            <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >19.12%</Typography>
          </Stack>
        </Stack>

         <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
         <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            >
            <Avatar alt="china" src="/flag-for-flag-china-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
           <Stack 
            alignItems={'start'}
            justifyContent={'center'}
            >
              <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >$ 7,432 K</Typography>
             <Typography
                color={'text.primary'}
                fontSize={10}
                fontWeight={300}
                >
                  China
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={"center"}
            justifyContent={"center"}
            >
            <Icon>
              <KeyboardArrowUpIcon sx={{color:'#28C46D'}} fontSize="small" />
            </Icon>
            <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >18.82%</Typography>
          </Stack>
        </Stack>

         <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
         <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            >
            <Avatar alt="germany" src="/flag-for-flag-germany-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
           <Stack 
            alignItems={'start'}
            justifyContent={'center'}
            >
              <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >$ 6,432 K</Typography>
             <Typography
                color={'text.primary'}
                fontSize={10}
                fontWeight={300}
                >
                  Germany
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={"center"}
            justifyContent={"center"}
            >
            <Icon>
              <KeyboardArrowUpIcon sx={{color:'#28C46D'}} fontSize="small" />
            </Icon>
            <Typography
              color={'text.icon'}
              fontSize={12}
              fontWeight={700}
              >18.32%</Typography>
          </Stack>
        </Stack>

      </Grid>

    </Grid>
  )
}