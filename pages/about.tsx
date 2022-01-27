import React from 'react';
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { GlobalHeader } from '../components/global-header';
import { OpensourceBanner } from '../components/opensource-banner';
import { UpdatesBanner } from '../components/updates-banner';
import { Footer } from '../components/footer';
import MdRenderer from '../components/md-renderer';
import Helmet from '../components/helmet';

function AboutHeader() {
  return (
    <Box pt={['45px', '45px', '70px']} pb={['45px', '45px', '55px']} borderBottomWidth={1} mb='30px' textAlign='left'
        position='static'
        top='10px'>
      <Helmet
        title={'About developers-roadmap'}
      />
      <Container maxW='container.md' position='relative' textAlign='left'>
        <Flex alignItems='center'>
          <Image alt={'Cuppari'} d={['none', 'none', 'block']} src='/me.png' h='170px' rounded='10px' mr='25px' />
          <Box>
            <Heading as='h1' color='black' fontSize={['35px', '35px', '40px']} fontWeight={700} mb='10px'>Hello, I am
              Edgar Cuppari
            </Heading>
            <Text fontSize={['15px', '15px', '17px']} color='gray.700' mb='15px'>
              I created developers-roadmap to help developers find their path if they are confused and help them grow in
              their career.</Text>

            <Stack isInline flexDirection={['column', 'column', 'row']} spacing={0} shouldWrapChildren>
              <Button as={Link} bg='blue.500' color='white' size='sm'
                      mr='10px'
                      mb={['7px', '7px', 0]}
                      _hover={{ textDecoration: 'none', bg: 'blue.700' }} href='https://twitter.com/blendit4ent'
                      arget='_blank'>
                @Blendit4Ent
              </Button>

              <Button as={Link} bg='green.500' color='white' size='sm'
                      _hover={{ textDecoration: 'none', bg: 'green.700' }} href='mailto:cuparikun.@gmail.com'
                      target='_blank'>
                cuparikun.@gmail.com
              </Button>
            </Stack>

          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default function About() {
  const AboutContent = require(`../content/pages/about.md`).default;

  return (
    <Box bg='#fdf5de' minH='100vh'>
      <GlobalHeader />
      <Box mb='60px'>
        <AboutHeader />
        <Container maxW={'container.md'} position='relative'>
          <MdRenderer>
            <AboutContent />
          </MdRenderer>
        </Container>
      </Box>

      <OpensourceBanner />
      <UpdatesBanner />
      <Footer />
    </Box>
  );
}
