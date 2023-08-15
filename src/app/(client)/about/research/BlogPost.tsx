import { Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import { Post } from './data'

type PostProps = {
  post: Post
}

export const BlogPost = (props: PostProps) => {
  const { post } = props
  return (
    <Link _hover={{ textDecor: 'none' }} role="group">
      <Flex bgImage={post.image} bgSize="cover" bgPos="center" minH="sm" direction="column-reverse">
        <Stack
          spacing="3"
          alignSelf="start"
          w="xs"
          bg="bg.canvas"
          paddingEnd="16"
          paddingTop="8"
          paddingBottom="4"
        >
          <Text textStyle={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="accent">
            {post.category}
          </Text>
          <Heading size={{ base: 'xs', md: 'sm' }}>{post.title}</Heading>
        </Stack>
      </Flex>
    </Link>
  )
}