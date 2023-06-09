import { Card } from "../../../styles/dashboard/bar/barChart"
import styled from "@emotion/styled";


export const StyledCard = styled(Card)(props=>({
  flex:1,
  height: 'auto',
  '& .main':{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25px',
    gap: '18px',

    '& .items':{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& .right':{
        display:'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        gap: '15px',
          
        '& p':{
          color:'#CFD3EC',
          fontSize: '11px',
          fontWeight: '600',
          fontFamily: 'sans-serif',
        },   
        '& small':{
          color:'#28C46D',
          fontSize: '11px',
          fontWeight: '600',
          fontFamily: 'sans-serif',
        },   
      },

      '& .left': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',

        '& .detail':{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',

          '& p':{
            color:'#CFD3EC',
            fontSize: '11px',
            fontWeight: '600',
            fontFamily: 'sans-serif',
          },

          '& small':{
            color:'#ACB3D8',
            fontSize: '10px',
            fontWeight: '400',
            fontFamily: 'sans-serif',
          },
        } 
      }
    }, 
  }
}))
