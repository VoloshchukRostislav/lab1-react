import { useParams, useNavigate } from 'react-router-dom'
import { postsData } from '../../data'

const PostPage = () => {

  const { postId } = useParams()
  const navigate = useNavigate()

  const post = postsData.find(p => p.id === Number(postId))

  if (!post) {
    return <h2>Пост не знайдено</h2>
  }

  return (
    <div>

      <button onClick={() => navigate(-1)}>
        Назад
      </button>

      <h1>{post.title}</h1>

      <p>
        Автор: <b>{post.author}</b>
      </p>

      <p>{post.content}</p>

    </div>
  )
}

export default PostPage