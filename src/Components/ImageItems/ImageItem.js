import './ImageItem.css'

const ImageItem = props => {
  const {imagesList, clickImageId} = props
  const {thumbnailUrl, category, id} = imagesList

  const onClickImage = () => {
    clickImageId(id)
  }

  return (
    <li className="image-item-list0elements">
      <button type="button" className="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          category={category}
          className="item-images"
        />
      </button>
    </li>
  )
}

export default ImageItem
