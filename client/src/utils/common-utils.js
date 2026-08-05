export const getAccessToken = () => {
    return sessionStorage.getItem("accessToken") || "";
};

export const addElipsis=(str,limit)=>{
    return str.length>limit? str.substring(0,limit)+'...':str;
}

export const getPostsUrl = (BASE_URL, category, query) => {
  if (category) {
    return `${BASE_URL}/posts?category=${category}`;
  }

  if (query) {
    return `${BASE_URL}/posts?query=${query}`;
  }

  return `${BASE_URL}/posts`;
};