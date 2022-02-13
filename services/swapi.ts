import axios from "axios";
import moment from "moment";

const swapi = axios.create({
  baseURL: process.env.SWAPI_URL,
});

const getId = (url: string, resource: string) => {
  //Very ugly, but it was the only way I found to recover the id
  return url.replace(process.env.SWAPI_URL + resource + "/", "").replace("/", "");
}

export const findAllFilms = async (): Promise<any[]> => {
  try {
    const result = await swapi.get("films");
    return result?.data?.results.map((film: any, index: number) => {
      return {
        id: getId(film.url, "films"),
        title: film.title,
        image: "/films/" + film.title + ".jpg",
      }; 
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getFilm = async (id: string): Promise<any> => {
  try {
    const result = await swapi.get(`films/${id}`);
    const film = result?.data
    return {
      ...film,
      image: "/films/" + film.title + ".jpg",
      characters: film.characters.map((url: string) => getId(url, "people")),
      release_date: moment(film.release_date, "YYYY-MM-DD").format("MM-DD-YYYY")
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getPersonImage = (id: number, name: string) => {
  if (id > 31) {
    return "/people/_unknown.jpg"
  }

  return "/people/" + name + ".jpg"
}

export const findAllPeople = async (page: number): Promise<any> => {
  try {
    const uri = page == 1 ? "people" : "people/?page="+page
    const result = await swapi.get(uri);
    const people = result?.data?.results.map((person: any, index: number) => {
      const id = getId(person.url, "people")
      const image = getPersonImage(parseInt(id), person.name);
      return {
        id: id,
        title: person.name,
        image:image,
      }; 
    });
    console.log(result?.data, people)
    return {
      people: people,
      nextPage: result?.data?.next ? page + 1 : null
    }
  } catch (err) {
    console.error(err);
    return [];
  }
};