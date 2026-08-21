import Promo from '../components/Promo/Promo';
import Trending from '../components/Trending/Trending';
import Creator from '../components/Creator/Creator';
import Categories from '../components/Catogories/Categories';
import Others from '../components/Others/Others';
import Highlight from '../components/Highlight/Highlight';
import Works from '../components/Works/Works';
import Subscribe from '../components/Subscribe/Subscribe';

function Home() {
  return (
    <>
      <Promo />
      <Trending />
      <Creator />
      <Categories />
      <Others />
      <Highlight />
      <Works />
      <Subscribe />
    </>
  );
}

export default Home;
