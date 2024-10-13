import "./BlogList.scss";
import React from "react";

const BlogPost = ({ title, description, imgSrc, link }) => (
  <div className={"blog-card"}>
    <a className={"imgPart"} href={link} title={title}>
      <img alt={title} src={imgSrc} />
    </a>
    <div className={"textPart"}>
      <a className={"aTagTitle"} href={link} title={title}>
        <p className={"titleNews"}>{title}</p>
      </a>
      <p className={"description"}>{description}</p>
    </div>
  </div>
);

function BlogList() {
  const posts = [
    {
      title: "Review Sekiguchi Koi Farm - Trại Cá KOI Showa Nổi Tiếng Nhật Bản",
      description:
        "Với lịch sử lâu đời và những kỹ thuật tiên tiến, Sekiguchi koi farm đã tạo ra những chú cá koi chất lượng cao, thu hút sự chú ý của các tín đồ yêu thích cá cảnh.",
      imgSrc:
        "https://sieuthicakoi.vn/storage/xs/5n/xs5nku68ysd1a1os6hcdrmt4lqnn_sekiguchi-koi-farm.webp",
      link: "/review-trai-ca-koi-sekiguchi-koi-farm/",
    },
    {
      title: "Review Sekiguchi Koi Farm - Trại Cá KOI Showa Nổi Tiếng Nhật Bản",
      description:
        "Với lịch sử lâu đời và những kỹ thuật tiên tiến, Sekiguchi koi farm đã tạo ra những chú cá koi chất lượng cao, thu hút sự chú ý của các tín đồ yêu thích cá cảnh.",
      imgSrc:
        "https://sieuthicakoi.vn/storage/xs/5n/xs5nku68ysd1a1os6hcdrmt4lqnn_sekiguchi-koi-farm.webp",
      link: "/review-trai-ca-koi-sekiguchi-koi-farm/",
    },
    {
      title: "Review Sekiguchi Koi Farm - Trại Cá KOI Showa Nổi Tiếng Nhật Bản",
      description:
        "Với lịch sử lâu đời và những kỹ thuật tiên tiến, Sekiguchi koi farm đã tạo ra những chú cá koi chất lượng cao, thu hút sự chú ý của các tín đồ yêu thích cá cảnh.",
      imgSrc:
        "https://sieuthicakoi.vn/storage/xs/5n/xs5nku68ysd1a1os6hcdrmt4lqnn_sekiguchi-koi-farm.webp",
      link: "/review-trai-ca-koi-sekiguchi-koi-farm/",
    },
    {
      title: "Review Sekiguchi Koi Farm - Trại Cá KOI Showa Nổi Tiếng Nhật Bản",
      description:
        "Với lịch sử lâu đời và những kỹ thuật tiên tiến, Sekiguchi koi farm đã tạo ra những chú cá koi chất lượng cao, thu hút sự chú ý của các tín đồ yêu thích cá cảnh.",
      imgSrc:
        "https://sieuthicakoi.vn/storage/xs/5n/xs5nku68ysd1a1os6hcdrmt4lqnn_sekiguchi-koi-farm.webp",
      link: "/review-trai-ca-koi-sekiguchi-koi-farm/",
    },
  ];

  return (
    <div className={"bloglist-main-container"}>
      <span className={"title"}>Blog</span>
      <div className={"row"}>
        <div className={"row-list"}>
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              description={post.description}
              imgSrc={post.imgSrc}
              link={post.link}
            />
          ))}
        </div>
      </div>
      <div className="bloglist-footer">
        <button className="view-all-btn">Xem tất cả</button>
      </div>
    </div>
  );
}

export default BlogList;
