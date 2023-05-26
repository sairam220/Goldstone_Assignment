import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, status, name, email, gender} = blogItemDetails
  const maleImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vYc4bsg9JQogEhBMA0iPlbe-mabMPRu-DA&usqp=CAU'
  const femaleImage =
    'https://res.cloudinary.com/dyivs1j8u/image/upload/v1685094733/images_dft5bj.jpg'

  const image = gender === 'male' ? maleImage : femaleImage

  return (
    <li className="blog-item">
      <div className="blog-item-container">
        <img className="blog-item-image" src={image} alt={`item${id}`} />
        <div className="blog-item-info">
          <h1 className="blog-item-title">Name: {name}</h1>
          <p className="blog-item-topic">Status: {status}</p>
          <div className="author-info">
            <p className="author-name">Email: {email}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BlogItem
