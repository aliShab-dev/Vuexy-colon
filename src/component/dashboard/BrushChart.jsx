import { Bar, BarChart, ReferenceLine, ResponsiveContainer } from "recharts";
import { Grid, Icon, Stack, Typography } from "@mui/material"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { StyledCard } from "../../../styles/dashboard/brush/brushChart";
import { useDispatch, useSelector } from "react-redux";
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';


const data = [
  { name: '1', uv: 700, pv: -456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -500, pv: 645 },
  { name: '4', uv: -823, pv: 450 },
  { name: '5', uv: -100, pv: 321 },
  { name: '6', uv: -901, pv: 235 },
  { name: '7', uv: 823, pv: -267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: -279, pv: 490 },
  { name: '10', uv: 294, pv: -203 }
]

export const BrushBar = () => {
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
      bgcolor={'background.paper'}
      borderRadius={2}
      padding={2}
      container
       >
      <Grid item xs={6}>
        <ResponsiveContainer minWidth={400} width="100%" height={200}>
          <BarChart
              style={{alignItems: 'center'}}
              width="100%"
              height={200}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
      
      <Grid
        item
        xs={6}
        display={'flex'}
        direction={'column'}
        gap={1}
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
            xs={6}
            display={'flex'}
            direction={'row'}
            gap={1}
            >
            <Icon sx={{backgroundColor:'#424659', borderRadius:'5px'}}>
              <AttachMoneyIcon sx={{color:'#A3A5A9'}} fontSize="small" />
            </Icon>
            <Stack>
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                  Total Sales
              </Typography>

              <Typography
                color={'text.primary'}
                fontWeight={400}
                fontSize={10}
                lineHeight={'.5'}
                >
                  Refund
              </Typography>
            </Stack>
          </Grid>
         
          <Grid
            item
            xs={6}
            display={'flex'}
            justifyContent={'end'}
            >
            <Typography
                color={'#29C46D'}
                fontWeight={500}
                fontSize={11}
                >
              +$ 68
            </Typography>
          </Grid>
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
            display={'flex'}
            direction={'row'}
            gap={1}
            >
            <Icon sx={{backgroundColor:'#2F3349', borderRadius:'5px'}}>
              <CurrencyExchangeIcon sx={{color:'#685FD7'}} fontSize="small" />
            </Icon>
            <Stack>
              <Typography
                color={'text.icon'}
                fontWeight={500}
                fontSize={11}
                >
                  Total Revaneue
              </Typography>
              <Typography
                color={'text.primary'}
                fontWeight={400}
                fontSize={10}
                lineHeight={'.5'}
                >
                  Client Payment
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={6}
            display={'flex'}
            justifyContent={'end'}
            >

              <Typography
                color={'#29C46D'}
                fontWeight={500}
                fontSize={11}
                >
                +$ 29
              </Typography>
          </Grid>

        </Grid>

      </Grid>
      
    </Grid>
  )
}