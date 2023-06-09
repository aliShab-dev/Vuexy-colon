import styled from "@emotion/styled";

export const StyledBox = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '10px',
  borderBottom: '1px solid #434968',
  backgroundColor: props.readed > 40 ? '#343952': 'inherit',
  

  '&:hover':{
    opacity: '.75',
    transition: 'opacity .3s ease',   
    '& .email':{
    '& .data' :{
    
      '& .hide':{
        display: 'block',

        '& .MuiSvgIcon-root': {
          marginRight: '7px',
          fontSize: '15px',
          color: '#C6CAE3',
          cursor: 'pointer'
        },
      },

      '& .dot': {
        display: 'none',
        transition:'all .3s ease',
      },
      '& span': {
        display: 'none',
        transition:'all .3s ease',
      },
    },
  },

  },
  
  '& .email':{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    
    '& .MuiSvgIcon-root': {
      marginRight: '7px',
      fontSize: '18px',
      cursor: 'pointer',
    },
 
  
    '& .detail':{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      gap: '5px',
  
      '& p':{
        color: '#C6CAE3',
        fontSize: '13px',
        flex: 1,
        cursor: 'pointer',
      },
      '& .text':{
        color:'#7A809F',
        fontSize: '12px',
        fontWeight: '400',
        fontFamily: 'sans-serif',
        flex: 1,
        marginRight: '7px',
        cursor: 'pointer',
      },
      '& span':{
        color:'#7A809F',
        fontSize: '20px',
        padding:0,
        width: '18px',
        fontWeight: '400',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
      },
      '& .MuiSvgIcon-root': {
        marginRight: '7px',
        fontSize: '18px',
        cursor: 'pointer',
      },
    },  
  
    '& .data' :{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      color: '#C6CAE3',
      fontSize: '10px',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',

      '& .hide':{
        top: '20px',
        display: 'none',


        '& .MuiSvgIcon-root': {
          marginRight: '7px',
          fontSize: '13px',
          color: 'white'
        },
      },
      
      '& .dot': {
        marginRight: '7px',
        fontSize: '10px',
        color: props.readed > 55 ? '#28C76F' : '#EA5455'
      },
      '& .MuiAvatar-root': {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
      },
    
    }
    
  }
  }))
  
  