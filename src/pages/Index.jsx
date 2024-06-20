import { Container, Text, VStack, Heading, Box, Image, Link, Flex } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h1" size="xl" mb={4}>Financial Times</Heading>
          <Text fontSize="lg">Your trusted source for financial news and analysis.</Text>
        </Box>

        <Box>
          <Image src="/images/financial-news.jpg" alt="Financial News" borderRadius="md" />
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Market Analysis: Stocks on the Rise</Heading>
              <Text mt={2}>An in-depth look at the recent trends in the stock market and what they mean for investors.</Text>
              <Link color="teal.500" mt={2} href="#">Read more</Link>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Cryptocurrency: The Future of Finance?</Heading>
              <Text mt={2}>Exploring the potential of cryptocurrencies and their impact on the global financial system.</Text>
              <Link color="teal.500" mt={2} href="#">Read more</Link>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Economic Outlook: What to Expect in 2023</Heading>
              <Text mt={2}>Predictions and insights into the economic trends that will shape the coming year.</Text>
              <Link color="teal.500" mt={2} href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Follow Us</Heading>
          <Flex>
            <Link href="https://twitter.com" isExternal mr={4}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mr={4}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;