import { createClient } from "contentful";
import { useEffect, useState } from "react";
const client = createClient({
  space: "eri3n4i64db6",
  environment: "master",
  accessToken: "66R8V663H2YELcnq0_ohA2fq71fvvy7inekonRNw1vU",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });

      console.log(response);

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
