import { createContext } from "react";

const GalleryContext = createContext(null);

function GalleryContextProvider({ children, value}) {
  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  )
}

export { GalleryContext }
export default GalleryContextProvider
