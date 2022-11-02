import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FullItem: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<{
    image: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get('https://63501d4edf22c2af7b63d4a3.mockapi.io/items/' + id);
        setItem(data);
      } catch (error) {
        console.log(error, 'Error!');
      }
    }

    fetchItem();
  }, []);

  if (!item) {
    return <p className='container'>Downloading...</p>;
  }

  return (
    <div className='container'>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <h4>{item.price} £</h4>
    </div>
  );
};

export default FullItem;
