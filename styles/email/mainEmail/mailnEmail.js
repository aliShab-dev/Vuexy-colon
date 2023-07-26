import styled from "@emotion/styled";


export const MainBarContainer = styled.div(props => ({
  backgroundColor: '#2F3349', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '700px',
  height: '100%',
  position: 'relative',
  width: '100%',
  opacity: 1,

    '@media(max-width:940px)': {
      opacity: props.show ? .4 : 1,
  },
  
  '& .header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottom: '1px solid #434968',

     '@media(max-width:940px)': {
      width: '95%',
      paddingLeft : 30
     },

     '& .leftBar-collapsed':{
    display: 'none',

    '@media(max-width:940px)': {
    position: 'absolute',
    left: 15,
    borderRadius: 5,
    border: '1px solid #7A809F',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',

    '&:hover':{
      border: '1px solid #ACB4D7',

      '& .MuiSvgIcon-root': {
        color: '#ACB4D7',
        fontSize: '13px',
      },
    },

    '& .MuiSvgIcon-root': {
      color: '#7A809F',
      fontSize: '13px',
    },
  },
  },

    '& .input':{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '10px 10px',

      '& .MuiSvgIcon-root': {
        marginRight: '7px',
        fontSize: '18px',
        color:'#C6CAE3',
      },

      '& input':{
        flex: 1,
        backgroundColor: 'inherit',
        border: 'none',
        outline: 'none',
        fontSize: '13px',
        color:'#C6CAE3',
      }
    },

    '& .options':{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& .MuiSvgIcon-root': {
        marginRight: '7px',
        fontSize: '18px',
        color:'#C6CAE3',
        cursor: 'pointer',
      },

    }
  },
  '& .menu':{
    borderBottom: '1px solid #434968',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:  '100%',
    padding: '8px',

    '& .left':{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '5px',

      '& .MuiSvgIcon-root': {
        fontSize: '16px',
        color:'#C6CAE3',
        cursor: 'pointer'
      },

    },
    '& .right':{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      '& p': {
        fontSize: '11px',
        fontWeight: '400',
        color:'#7A809F',
      },

      '& .MuiSvgIcon-root': {
        fontSize: '15px',
        color:'#C6CAE3',
      },
      '& .emails':{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        overflow: 'scroll',
        position: 'relative',
      
        '::-webkit-scrollbar':{
          display: 'none'
        },
      
      },

    },
  },
  '& .sent':{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    position: 'relative',
  
    '::-webkit-scrollbar':{
      display: 'none'
    },
  
  },

}))

export const EmailContainer = styled.div(props => ({
  display :'flex',
  width: '100%',
  height: '84.7vh',
  boxShadow: '-1px 7px 5px 4px #202537',
  position: 'relative',

  '::-webkit-scrollbar':{
    width:'0'
  },
    '@media(max-width:1200px)': {
     height: '86vh',
     marginTop: 25,
     marginBottom: 20
},
}))