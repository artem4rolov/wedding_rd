import "./App.css";
import DressCodeColors from "./components/DressCodeColors/DressCodeColors";
import {
  Main,
  InfoBlock,
  Program,
  Location,
  DressCode,
  GallerySecond,
  Presents,
  Contacts,
  Timeout,
  GalleryFirst,
} from "./components/index";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

{
  /* <a href="https://ibb.co/rH6Wbsj"><img src="https://i.ibb.co/njcW3CG/1.jpg" alt="1" border="0"></a>
<a href="https://ibb.co/nwC6Xk5"><img src="https://i.ibb.co/hgfLG8t/2.jpg" alt="2" border="0"></a>
<a href="https://ibb.co/7J9VY9T"><img src="https://i.ibb.co/nsWfgWV/3.jpg" alt="3" border="0"></a>
<a href="https://ibb.co/Lz6kMLL"><img src="https://i.ibb.co/5WvMdNN/4.jpg" alt="4" border="0"></a>
<a href="https://ibb.co/0s6Swm7"><img src="https://i.ibb.co/rdzSWFj/5.jpg" alt="5" border="0"></a>
<a href="https://ibb.co/R9SgY4P"><img src="https://i.ibb.co/5691Gxv/6.jpg" alt="6" border="0"></a>
<a href="https://ibb.co/cCsp3Z9"><img src="https://i.ibb.co/hZTn94N/7.jpg" alt="7" border="0"></a>
<a href="https://ibb.co/47QD5vG"><img src="https://i.ibb.co/yX3Mbv1/8.jpg" alt="8" border="0"></a>
<a href="https://ibb.co/23zdGLW"><img src="https://i.ibb.co/ZzQxqwG/9.jpg" alt="9" border="0"></a>
<a href="https://ibb.co/CmQ6R9p"><img src="https://i.ibb.co/WGf0mzN/10.jpg" alt="10" border="0"></a>
<a href="https://ibb.co/Lk3FPHQ"><img src="https://i.ibb.co/kHt7yv3/12.jpg" alt="12" border="0"></a>
<a href="https://ibb.co/nC8n76Z"><img src="https://i.ibb.co/jRZWybB/13.jpg" alt="13" border="0"></a>
<a href="https://ibb.co/yNCFG3q"><img src="https://i.ibb.co/qD8YXZp/14.jpg" alt="14" border="0"></a>
<a href="https://ibb.co/bR6WCH6"><img src="https://i.ibb.co/2YFnC8F/15.jpg" alt="15" border="0"></a>
<a href="https://ibb.co/g9GgpV0"><img src="https://i.ibb.co/h9k8jfG/16.jpg" alt="16" border="0"></a>
<a href="https://ibb.co/9qqFBds"><img src="https://i.ibb.co/0ffg1zh/IMG-8938-1.jpg" alt="IMG-8938-1" border="0"></a>
<a href="https://ibb.co/kHM81Gv"><img src="https://i.ibb.co/0DQMtnv/IMG-0355.jpg" alt="IMG-0355" border="0"></a>
<a href="https://ibb.co/Lz27GgP"><img src="https://i.ibb.co/d0zYhpc/IMG-0389.jpg" alt="IMG-0389" border="0"></a>
<a href="https://ibb.co/ZhGDxkT"><img src="https://i.ibb.co/RCYwcVH/IMG-0391.jpg" alt="IMG-0391" border="0"></a>
<a href="https://ibb.co/HYg6z9C"><img src="https://i.ibb.co/0ZJTMzK/17.jpg" alt="17" border="0"></a> */
}

function App() {
  return (
    <div className="App">
      <Main />
      <InfoBlock />
      <GalleryFirst />
      <Program />
      <Location />
      <GallerySecond />
      <DressCode />
      <DressCodeColors />
      <Presents />
      <Contacts />
      <Timeout />
    </div>
  );
}

export default App;
