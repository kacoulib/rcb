import Pagination from "@components/Pagination";
import config from "@config/config.json";
import { generateSeoMetadata } from "@lib/utils/seo";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

export async function generateMetadata({ params }) {
  const currentPage = parseInt((params && params.slug) || 1);
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  const { frontmatter } = postIndex;
  const { title, description } = frontmatter;

  return generateSeoMetadata({
    title: currentPage > 1 ? `${title} - Page ${currentPage}` : title,
    description: description || `Retrouvez toutes les actualités du RCB95 - Rahilou Cergy Boxe. Page ${currentPage}`,
    keywords: ["actualités boxe", "blog boxe", "nouvelles RCB95", "articles boxe"],
    path: currentPage > 1 ? `/blogs/page/${currentPage}` : "/blogs",
  });
}

// blog pagination
const BlogPagination = async ({ params }) => {
  //
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = await getSinglePage(`content/${blog_folder}`).sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  );
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  //
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "h1 text-center font-normal text-[56px]")}
        <Posts posts={currentPosts} />
        <Pagination
          section={blog_folder}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default BlogPagination;

export async function generateStaticParams() {
  const getAllSlug = await getSinglePage(`content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      slug: (i + 1).toString(),
    });
  }

  return paths;
}
