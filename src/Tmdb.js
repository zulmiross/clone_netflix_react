const API_KEY = '1a9847701b3189a90811732014ae8a9c';
const API_URL = 'https://api.themoviedb.org/3';

const basicFetch = async (res) => {
    const req = await fetch(`${API_URL}${res}`);
    const json = await req.json();
    return json;
}


export default {

    getList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items:await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },           
          
        ];
    },

    getMovieInfo: async (movieId, type) => {

       let info = {};
       
       if(movieId){
        switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?laguage=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?laguage=pt-BR&api_key=${API_KEY}`);              
                    break;
                default:
                    info = null;
                    break;
          
            }
        }
       return info;
    }
}