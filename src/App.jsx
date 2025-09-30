import "./styles/app.css";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";
import useFetch from "./hooks/useFetch";
import GalleryContextProvider from "./contexts/GalleryContext";

export default function App() {
  const { loading, error, data } = useFetch("/data.json");
  if(loading) return <p>Loading data...</p>
  if(error) return <Error message={error.message}/>

  return (
    <GalleryContextProvider value={{data}}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </BrowserRouter>
    </GalleryContextProvider>
  )
};