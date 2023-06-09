import styled from "@emotion/styled";
import { Card } from "../../../styles/dashboard/bar/barChart"

export const StyledCard = styled(Card)(props=>({

  minWidth: '300px',
  height: 'auto',

  '& .main':{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    gap: '15px',

    '& .items':{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& .right':{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',

        '& p':{
          color:'#CFD3EC',
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