const BlogDetail = ({ title, image, description, tags }) => (
    <div className="blog-detail">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
  
  export default BlogDetail;
  