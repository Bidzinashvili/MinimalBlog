import Hero from "@/components/Home/Hero";
import RecentPosts from "@/components/Home/RecentPosts";
import Categories from "@/components/Home/Categories";
import Newsletter from "@/components/Home/Newsletter";
import { Article } from "@/interfaces/interfaces";

const GetArticles = async (): Promise<Article[]> => {
  const response = await fetch('http://localhost:3001/blogs');
  const data = await response.json();
  return data;
};

export default async function BlogHomepage() {
  const articles = await GetArticles();

  return (
    <main className="flex-1">
      <Hero article={articles[0]} />
      <RecentPosts articles={articles} />
      <Categories />
      <Newsletter />
    </main>
  );
}
