import "./App.css";

//import components
import Slider from "./components/Slider";
import SwiperSample from "./components/SwiperSample";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1557802891-958ecf3d5992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "image1",
    },
    {
      url: "https://images.unsplash.com/photo-1557784873-df9d3dcdf936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
      title: "image2",
    },
    {
      url: "https://images.unsplash.com/photo-1557802891-958ecf3d5992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "image3",
    },
    {
      url: "https://images.unsplash.com/photo-1557784873-df9d3dcdf936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
      title: "image4",
    },
    {
      url: "https://images.unsplash.com/photo-1656751609190-e0168efca2da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "image5",
    },
  ];

  return (
    <div className="App">
      <Slider slides={slides} />
    </div>
  );
}

export default App;
