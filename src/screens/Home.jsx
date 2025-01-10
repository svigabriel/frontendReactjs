import OpenLink from "../components/Core/OpenLink.jsx";
import Body from '../components/home/body.jsx';
import Footer from '../components/home/footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.jpeg";
const Home = () => {
  return (
      <div>
        <div>
          <OpenLink
              redirectURL="https://vite.dev"
              logoImage={viteLogo}
          />
            <OpenLink
              redirectURL="https://react.dev"
              logoImage={reactLogo}
          />
          <OpenLink
              redirectURL="https://github.com/svigabriel/frontendReactjs"
              logoImage={githubLogo}
          />
        </div>
          <Body />
          <Footer />
        </div>
      
  );
}
export default Home;