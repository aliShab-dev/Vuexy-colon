import { Card } from "../../../styles/dashboard/bar/barChart"
import styled from "@emotion/styled";

export const StyledCard = styled(Card)(props => ({
  height: 'auto',
  minWidth: '300px',
  margin: 0,


  '& .info':{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '18px',
    marginTop: '10px',

    '& .item':{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',


      '& .left':{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        gap:'5px',

        '& .detail':{
          display: 'flex',
          flexDirection:'column',
          alignItems:'start',
          justifyContent: 'center',
          
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
        },
      
        
      },
      '& .right':{

        '& bold':{
          fontSize: '11px',
          fontWeight: '600',
          fontFamily: 'sans-serif',
          color:'#28C46D'
        },  
      }

    }
  }
}))