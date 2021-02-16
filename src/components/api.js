import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4ac5c6cb760790d5187aaaafea8cb8f3",
    language: "ko-KR"
  }
});

export const movieApi = {
  getLatest: () => api.get("movie/latest"),
  getNowPlaying: () => api.get("movie/now_playing"),
  getPopular: () => api.get("movie/popular"),
  getTopRate: () => api.get("movie/top_rated"),
  getUpComing: () => api.get("movie/upcoming"),
  getMovieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: (query, page = 1) =>
    api.get("search/movie", {
      params: {
        query: query,
        page
      }
    }),
  getTrending: () => api.get("trending/movie/day")
};

export const tvApi = {
  getLatest: () => api.get("tv/latest"),
  getAiringToday: () => api.get("tv/airing_today"),
  getOnTheAir: () => api.get("tv/on_the_air"),
  getPopular: () => api.get("tv/popular"),
  getTopRated: () => api.get("tv/top_rated"),
  getTVDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: (query, page = 1) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(query),
        page
      }
    }),
  getTrending: () => api.get("trending/tv/day")
};
