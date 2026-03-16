import { postsData } from '../../data'
import Post from '../../components/molecules/Post/Post'

const Feed = () => {
  return (
    <div>
      <h1>Стрічка новин</h1>

      {postsData.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Feed