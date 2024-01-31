import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログ記事一覧' />
      <Hero title='Blog' subtitle='Recent Posts' />
    </Container>
  )
}
export default Blog
