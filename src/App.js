
import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

// 5f110dbb570520136fb124bb54e83936

// https://api.themoviedb.org/3/movie/550?api_key=5f110dbb570520136fb124bb54e83936 -----for testing in postman 

export default App;


