import { Box, Container, Flex, Heading, Text, VStack, HStack, IconButton, Divider } from "@chakra-ui/react";
import { FaProjectDiagram, FaTasks, FaBell } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">AI Project Dashboard</Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Projects" icon={<FaProjectDiagram />} />
          <IconButton aria-label="Tasks" icon={<FaTasks />} />
          <IconButton aria-label="Notifications" icon={<FaBell />} />
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} mt={8}>
        {/* Project Overview Section */}
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Project Overview</Heading>
          <Text>Details about the current projects will be displayed here.</Text>
        </Box>

        {/* Recent Activities Section */}
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Recent Activities</Heading>
          <Text>Updates and recent activities will be displayed here.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;