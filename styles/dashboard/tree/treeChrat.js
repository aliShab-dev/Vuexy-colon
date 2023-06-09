import styled from "@emotion/styled";
import { Card } from "../../../styles/dashboard/bar/barChart";



export const StyledCard = styled(Card)(props =>({
  padding: '10px',
  height: 'auto',
  minWidth: '295px',


'& .main':{
display: 'flex',
alignItems: 'end',
gap: '8px',
justifyContent: 'space-between',
marginTop: '15px',

'& .chart':{
  display:'flex',
  alignItems: 'start',
  width: '200px'
},


  '& .info':{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '15px',
     
    '& .title':{
      display:'flex',
      flexDirection: 'column',
      alignItems: 'start',

      '& bold':{
        color:'#CFD3EC',
        fontSize: '26px',
        fontWeight: '600',
        fontFamily: 'sans-serif',
      },
      '& p':{
        color:'#ACB3D8',
        fontSize: '11px',
        fontWeight: '400',
        fontFamily: 'sans-serif',
      }
    },
    '& .detail':{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      gap:'7px',

      '& .item-detail':{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        gap:'4px',

        '& .caption':{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',

          '& p':{
            color:'#CFD3EC',
            fontSize: '11px',
            fontWeight: '600',
            fontFamily: 'sans-serif', 
          },
          '& small':{
            color:'#ACB3D8',
            fontSize: '11px',
            fontWeight: '400',
            fontFamily: 'sans-serif',
          }
        }
      }
    }
  }

  },


  


}))