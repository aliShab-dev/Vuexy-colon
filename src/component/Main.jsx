import styled from "@emotion/styled"
import { CardContent, CardMedia, Typography,Card } from "@mui/material"
import Link from "next/link"
import { MainContainer } from "../../styles/global"




const StyledCard = styled(Card)({
  boxShadow: '-7px 7px 5px -2px #202537',
  height: '280px',
  backgroundColor: '#343952',  


  '&:hover' :{
    boxShadow: '-7px 11px 10px -2px #202537',
    scale: '1.02',
    transition: '.3s ease',
  }
})


export const Main = ({data}) => {


  return(
    
 <MainContainer style={{background:'#2F3349', }}>

      {
        data.map( card => (
          <Link key={card.id} href={`/app/${card.id}`}>
            <StyledCard className="card" >
            <CardMedia
              component="img"
              alt="440*500"
              height="130"
              image={card.img}
            />
            <CardContent>
              <Typography sx={{color: '#ACB3D8'}} gutterBottom variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography sx={{color: '#C6CAE3'}}  variant="body2" color="text.secondary">
              {card.disc}
              </Typography>
            </CardContent>
          </StyledCard>
        </Link>
          
          ))
        }
  </MainContainer>
  )
}
