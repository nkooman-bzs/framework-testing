import { Box, Heading,  } from 'rebass'
import { useTheme } from 'styled-components'

const HomePage = () =>{
  const theme = useTheme()

  return (
    <Box>
      <Box>
        About
        Services
        Projects
        Contact
      </Box>

      <Box>
        <Heading fontFamily={theme.fonts.heading} fontWeight={theme.fontWeights.title} fontSize={65} sx={{ textTransform: 'uppercase', letterSpacing: '0.175em' }}>We are creatives</Heading>

      </Box>


  Transform your brand

  We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.

  Learn more

  Stand out to the right audience

  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&apos;ll build and extend your brand in digital places. 

  Learn more

  Graphic design
  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients&apos; attention.

  Photography
  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.

  Client testimonials

  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
  Emily R.
  Marketing Director

  Sunnyside&apos;s enthusiasm coupled with their keen interest in our brand&apos;s success made it a satisfying and enjoyable experience.
  Thomas S.
  Chief Operating Officer

  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
  Jennie F.
  Business Owner

  About
  Services
  Projects
  Contact
    </Box>
  )
}

export default HomePage
