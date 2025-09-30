import useSize from "../hooks/useSize";
import Figure from "../components/Figure";
import Figurewrapper from "../components/Figurewrapper";
import { useContext } from "react";
import { GalleryContext } from "../contexts/GalleryContext";


export default function Home() {
  const { width } = useSize();
  const { data } = useContext(GalleryContext);
  
  // 
  //  create masonry layout
  // 
  
  // mobile size width < 599px
  const mobilesize = (
    <div className="column-1">
      {data
        .map((item, index) => <Figure key={index} data={item}/>) 
      }
    </div>
  );

  // tablet size width 600px - 999px
  const tabletsize = (
    <>
      <div className="column-1">
        {data
          .filter((_, index) => index % 2 == 0)
          .map((item, index) => <Figure key={index} data={item}/>)
        }
      </div>
      <div className="column-2">
        {data
          .filter((_, index) => index % 2 == 1)
          .map((item, index) => <Figure key={index} data={item}/>)
        }
      </div>
    </>
  );
  
  // desktop size width >= 1000px
  const desktopsize = (
    <>
      <div className="column-1">
        {data
          .filter((_, index) => index % 4 == 0)
          .map((item, index) => <Figure key={index} data={item}/>)
        }
      </div>
      <div className="column-2">
        {data
          .filter((_, index) => index % 4 == 1)
          .map((item, index) => <Figure key={index} data={item}/>)
        }
      </div>
      <div className="column-3">
        {data
          .filter((_, index) => index % 4 == 2)
          .map((item, index) => <Figure key={index} data={item}/>)
        }
      </div>
      <div className="column-4">
        {data
          .filter((_, index) => index % 4 == 3)
          .map((item, index) => <Figure key={index} data={item}/>)
        }
      </div>
    </>
  );

  return (
    <main className="container">
      <Figurewrapper>
        { width < 599 && mobilesize }
        { width >= 600 && width < 999 && tabletsize }
        { width >= 1000 && desktopsize }
      </Figurewrapper>
    </main>
  )
}