import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/api";


//*1.adım: Context yapısının temelini oluşturduk.
export const VideoContext = createContext();

//* 2. adım: sağlayıcı bileşeni oluşturduk
export const VideoProvider= ({ children }) => {
const [selectedCategory, setSelectedCategory] = useState(categories[0]);
const [isLoading, setIsLoading] = useState(true);
const [videos, setVideos] = useState();
const [error, setError] = useState(null);

useEffect(() => {
    //seçilen type belirle
    const type = selectedCategory.type;
    //seçilen kategorinin type i menü ise fonksiyonunu burada durdurur.
    if (type === 'menu') return;
    //yüklemeyi true ya çek
    setIsLoading(true);
    //istek atılacak urk i belirle
    const url = 
    type === "home" 
    ? "/home" 
    : type === "trending" 
    ? "/trending" 
    : type === "category" 
    ? `/search?query=${selectedCategory.name}` 
    : "";
    //api isteği at ve durumu state aktar
    api
    .get(url)
    .then((res)  => {setVideos(res.data.data);
        setError(null);//eskiden olan hataları kaldır
    })
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false));
}, [selectedCategory]);
return(
    <VideoContext.Provider value={{ selectedCategory, setSelectedCategory,videos,error,isLoading }}>
        {children}
        </VideoContext.Provider>
 );
};