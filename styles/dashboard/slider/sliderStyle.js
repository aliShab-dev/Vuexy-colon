import styled from "@emotion/styled";


export const Wraper = styled.div({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '350px',
  flex:1,

  '& .right':{
    width: 'auto'
  },

  '& .left':{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    gap: '14px',
    width:'60%',

    '& strong':{
      fontSize:13,
      fontFamily: 'sans-serif'    
      },
      '& p':{
        fontSize:10,
        fontFamily: 'sans-serif'    
        },

    '& .second':{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'start',
      alignItems:'start',
      gap: '5px',

      '& small':{
        fontSize:11,
        fontWeight: '600',
        fontFamily: 'sans-serif'    
        },
      
      '& .table':{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: '40px',
        rowGap: '20px',

        '& p':{
          fontSize:11,
          fontFamily: 'sans-serif'    
          },
          '& .boxed':{
            backgroundColor: '#6258CC',
            padding:'4px 6px',
            borderRadius: '3px',
            fontSize:11,
            fontFamily: 'sans-serif'    
            },

        '& div': {
          display:'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      },
    },

  }
})