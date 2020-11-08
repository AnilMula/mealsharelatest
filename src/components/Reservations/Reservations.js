import React, { useEffect, useState } from 'react';

function Reservations() {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetch(`/api/reservations`)
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
      });
  }, [reservations]);
  return (
    <div>
      {reservations.map((reservation) => (
        <div key={reservation.id}>{reservation.contact_name}</div>
      ))}
    </div>
  );
}

export default Reservations;
