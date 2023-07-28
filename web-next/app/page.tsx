import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import OtherInformation from "./components/otherInformation/OtherInformation";
import Trending from "./components/trending/Trending";
import getTrending from "@/lib/getProducts";

export default async function Home() {
  const productsData: Promise<Product[]> = await getTrending();
  const data = await productsData;

  return (
    <div>
      <Banner />
      <Categories />
      <Trending products={data} />
      <OtherInformation />
    </div>
  );
}
