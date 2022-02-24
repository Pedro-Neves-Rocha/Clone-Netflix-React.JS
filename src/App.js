import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

useEffect(()=>{
  const loadAll = async () => {
let list = await Tmdb.getHomeList();
 test(list)

 let originals = list.filter(i=>i.slug === 'originais');
 let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
 let chosen = originals[0].items.results[randomChosen];
 let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
 setFeaturedData(chosenInfo);
  }

  loadAll();
}, []);

useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll',scrollListener);

    return () => {
    window.removeEventListener('scroll',scrollListener);
    }
}, []);
    
    const test = (list) => {
      setMovieList(list);
    }
  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
       <FeaturedMovie item={featuredData}/> 
      }
      

       <section className="lists">
         {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
         ))}
       </section>

       <footer>
         Feito com <span role="img" aria-label="coração">💙</span> pelo Snow <br/>
         Direitos de imagem para Netflix <br/>
         Dados pegos do site Themoviedb.org
       </footer>
    </div>
  );
}

