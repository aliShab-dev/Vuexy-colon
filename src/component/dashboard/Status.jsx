import { Grid, Icon, Stack, Typography } from "@mui/material"
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';



export const Status = () => {


  return(
    <Grid
      bgcolor={'background.paper'}
      borderRadius={2}
      padding={2}
      container
      >

      <Grid
        container
        item
        display={'flex'}
        direction={'column'}
        gap={1}
        width={'100%'}
        >
        <Grid
          container
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          direction={'row'}
          >
             <Grid
              item
              container
              xs={6}
              display={'flex'}
              direction={'row'}
              alignItems={'center'}
              gap={1}
              >
                <Icon sx={{backgroundColor:'#2E4B4F', borderRadius:'5px'}}>
                <LocalPostOfficeOutlinedIcon sx={{color:'#28C16D'}} fontSize="small" />
                </Icon>
                <Stack>
                  <Typography
                    color={'text.icon'}
                    fontWeight={500}
                    fontSize={11}
                    >
                      Emails
                  </Typography>
                
                </Stack>
            </Grid>
            <Stack>
            
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                  22,2%
              </Typography>
              <Typography
                color={'#29C46D'}
                fontWeight={500}
                fontSize={10}
                >
                  0.3%
              </Typography>
            </Stack>
        </Grid>

        <Grid
          container
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          direction={'row'}
          >
           <Grid
            item
            container
            xs={6}
            display={'flex'}
            direction={'row'}
            alignItems={'center'}
            gap={1}
            >
          <Icon sx={{backgroundColor:'#274C62', borderRadius:'5px'}}>
              <ShareOutlinedIcon sx={{color:'#08B3CC'}} fontSize="small" />
            </Icon>
             <Stack>
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                  Opened
              </Typography>
            </Stack>
          </Grid>
          <Stack>
            <Typography
              color={'text.icon'}
              fontWeight={500}
              fontSize={11}
              >
                21.2%
            </Typography>

            <Typography
              color={'#29C46D'}
              fontWeight={500}
              fontSize={10}
              >
              2.1%
            </Typography>

          </Stack>
        </Grid>
        <Grid
          container
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          direction={'row'}
          >
           <Grid
            item
            container
            xs={6}
            display={'flex'}
            direction={'row'}
            alignItems={'center'}
            gap={1}
            >
          <Icon sx={{backgroundColor:'#504448', borderRadius:'5px'}}>
              <NearMeOutlinedIcon sx={{color:'#F29843'}} fontSize="small" />
            </Icon>
             <Stack>
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                  Clicked
                </Typography>
            </Stack>
          </Grid>
          <Stack>
            <Typography
              color={'text.icon'}
              fontWeight={500}
              fontSize={11}
              >
                20.9%
            </Typography>

            <Typography
              color={'#29C46D'}
              fontWeight={500}
              fontSize={10}
              >
                1.4%
            </Typography>

          </Stack>
        </Grid>
        <Grid
          container
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          direction={'row'}
          >
           <Grid
            item
            container
            xs={6}
            display={'flex'}
            direction={'row'}
            alignItems={'center'}
            gap={1}
            >
              <Icon sx={{backgroundColor:'#3A3B64', borderRadius:'5px'}}>
              <GroupOutlinedIcon sx={{color:'#685FD7'}} fontSize="small" />
              </Icon>
             <Stack>
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                  Subscribe
              </Typography>
            </Stack>
          </Grid>
          <Stack>
            <Typography
              color={'text.icon'}
              fontWeight={500}
              fontSize={11}
              >
                20.9%
              </Typography>
              <Typography
                color={'#29C46D'}
                fontWeight={500}
                fontSize={10}
                >
                  0.5%
              </Typography>
          </Stack>
        </Grid>
        <Grid
          container
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          direction={'row'}
          >
           <Grid
            item
            container
            xs={6}
            display={'flex'}
            direction={'row'}
            alignItems={'center'}
            gap={1}
            >
              <Icon sx={{backgroundColor:'#424659', borderRadius:'5px'}}>
                <GppMaybeOutlinedIcon sx={{color:'#9097B6'}} fontSize="small" />
              </Icon>
             <Stack>
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                  Complaints
              </Typography>
            </Stack>
          </Grid>
          <Stack>
            <Typography
              color={'text.icon'}
              fontWeight={500}
              fontSize={11}
              >
                19.1%
            </Typography>
            <Typography
              color={'#29C46D'}
              fontWeight={500}
              fontSize={10}
              >
                1.8%
            </Typography>
          </Stack>
        </Grid>
        <Grid
          container
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          direction={'row'}
          >
           <Grid
            item
            xs={6}
            container
            display={'flex'}
            direction={'row'}
            alignItems={'center'}
            gap={1}
            >
              <Icon sx={{backgroundColor:'#4D384B', borderRadius:'5px'}}>
                  <BlockOutlinedIcon sx={{color:'#B04950'}} fontSize="small" />
              </Icon>
             <Stack>
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                    Blocked
               </Typography>
         
             
            </Stack>
          </Grid>
          <Stack>
            <Typography
              color={'text.icon'}
              fontWeight={500}
              fontSize={11}
              >
                18.2%
             </Typography>
              <Typography
                color={'#29C46D'}
                fontWeight={500}
                fontSize={10}
                >
                  3.1%
              </Typography>
          </Stack>
        </Grid>

      </Grid>

    </Grid>


  )
}