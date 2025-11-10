import "./styles/style.scss"
import { PortableText } from "@portabletext/react";

const Blogs = ({ data }) => {
  if (!data) return null;

  return (
    <section className="blogs-container">
      <h2 className="blog-title">{data.title}</h2>
      <div key={data._id} className="blog-item">
        {data.subheading && <h3 className="blog-subheading">{data.subheading}</h3>}
        <div className="blog-body">
          <PortableText value={data.body} />
        </div>
      </div>
    </section>
  );
};

export default Blogs;