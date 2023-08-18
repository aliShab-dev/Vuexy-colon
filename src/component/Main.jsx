import styled from "@emotion/styled"
import { CardContent, CardMedia, Typography,Card, Paper, Stack } from "@mui/material"
import Link from "next/link"


// const StyledCard = styled(Card)(props =>({
//   height: '250px',
// }))

export const MainContainer = styled(Paper)(props => ({
  width: '100%',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
  gap: '15px',
  borderRadius: '8px',
  padding: 8 ,
  overflow: 'hidden',

  '@media(max-width:1200px)': {
    marginTop: '50px',
  },
}))


export const Main = ({data}) => {

  return(
   <MainContainer  sx={{boxShadow: 5}}>

        {
        data.map( card => (
          <Link key={card.id} href={`/app/${card.id}`}>
            <Card
              variant="outlined"
              sx={{
                boxShadow: 5,
                height: '250px',
                '& .MuiCardMedia-root':{
                  transition: '.3s ease',
                  height: '130px',
                  overflow:'hidden',
                  '&:hover':{
                    scale: '1.1'
                  }
                }
              }}>
               <Stack
                sx={{
                  height:'130px',
                  overflow: 'hidden'}}
                >

                  <CardMedia
                    component="img"
                    alt="440*500"
                    height="130"
                    image={card.img}
                    />

                </Stack>   

                <CardContent >

                  <Typography 
                    gutterBottom
                    fontSize={15}
                    fontWeight={700}
                    color="text.icon"
                    variant="h5" 
                    component="p">
                    {card.title}
                  </Typography>
                
                  <Typography  
                    variant="subtitle1"
                    fontSize={12}
                    color="text.light"
                    component="span">
                    {card.disc}
                  </Typography>

                </CardContent>

            </Card>

          </Link>
          ))
        }
          
    </MainContainer>
  )
}
