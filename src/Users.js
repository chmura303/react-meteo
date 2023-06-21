import { useState } from 'react';
import './App.css';

export default function Users() {
  const [users, setUsers] = useState([4, 8, 10, 17, 13]);

  function handleRemoveClick() {
    setUsers(users.slice(1));
  }

  return (
    <>
      <div>
        <ul>
          {users.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
        <button onClick={handleRemoveClick}>Remove 1st user</button>
      </div>
    </>
  );
}

// ----------

// const grades = [8, 10, 12];

// const updateGrades = grades =>
//   grades.map(grade => (grade >= 10 ? grade + 1 : grade));
// console.log(updateGrades(grades)); // [ 8, 11, 13 ]

// const subset1 = grades.slice(1);
// console.log(subset1); // [10, 12]

// const subset2 = grades.slice(1, grades.length - 1);
// console.log(subset2); // [10]

// const subset1 = grades.filter(grade => grade >= 10);
// console.log(subset1); // [ 10, 12 ]

// const subset2 = grades.filter(grade => grade !== 10);
// console.log(subset2); // [ 8, 12 ]

// const subset = grades.filter((grade, index) => index !== 0);
// console.log(subset); // [ 10, 12 ]

// .map, .filter, .slice - immutable
// .splice - mutable(!)
