import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetch";
import CardContent from "../molecules/CardContent";

function SectionContent() {
  const [content, setContent] = useState([]);
  const token = localStorage.getItem("authToken");
  const url = `${import.meta.env.VITE_LOCAL_API}/contenido/contenidos`;
  const id = sessionStorage.getItem('idActForContenido');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await fetchData(url, 'POST', token, { idActividad: id });
        if (data.status === 200 && Array.isArray(data.data)) {
          setContent(data.data);
        } else {
          console.error('Error fetching content:', data);
          setContent([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setContent([]);
      }
    };

    fetchContent();
  }, [url, token, id]);

  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {content.length > 0 ? (
          content.map((item, index) => (
            <CardContent key={index} title={item.filename}
              fileName={item.filename}
              filePath={item.path}
              onEditClick={() => console.log(`Edit clicked for: ${item.filename}`)}
              onDeleteClick={() => console.log(`Delete clicked for: ${item.filename}`)}
            />
          ))
        ) : (
          <p className="text-gray-500">No hay contenido disponible.</p>
        )}
      </div>
    </div>
  );
}

export default SectionContent;