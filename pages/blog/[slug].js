export async function getStaticPaths () {
  return {
    paths: [{ params: { slug: 'schedule' } }, { params: { slug: 'music' } }],
    fallback: false
  }
}

export async function getStaticProps (context) {
  // export async function getServerSideProps(context) {
  console.log('posts:', context.params)
  return {
    props: { message: 'Dynamic Routes' }
  }
}
