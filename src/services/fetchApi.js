import axios from "axios";

const fetchApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la requête:", error);
    return null;
  }
};

export default fetchApi;
