import React, { useState, useEffect, useContext } from 'react'; 
import Card from '../Molecules/Card';
import { fetchData } from '../../../utils/fetch';
import UserContext from '../../../context/userContext';

function CardList() {
  const [cards, setCards] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const data = await fetchData('/api/groups', 'POST', 'Bearer ' + user.token, { grade: user.grado, group: user.grupo });
        setCards(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    }

    fetchGroups();
  }, [user.grado, user.grupo, user.token]);

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          members={card.members}
          onInspect={() => console.log('Inspect ' + card.title)}
        />
      ))}
    </div>
  );
}

export default CardList;
