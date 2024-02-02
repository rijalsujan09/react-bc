import Card from "./card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "mango", calories: 159 },
    { id: 5, name: "lychee", calories: 37 },
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celary", calories: 15 },
    { id: 3, name: "carrots", calories: 25 },
    { id: 4, name: "corn", calories: 63 },
    { id: 5, name: "brocoli", calories: 50 },
  ];
  return (
    <>
      {/* <Card />
      <hr />
      <hr />
      <Button />
      <hr />
      <hr />
      <Student name="Sujan" age={258} isStudent={true} />
      <Student name="Patric" age={40} isStudent={false} />
      <Student name="Sandy" age={20} isStudent={true} />
      <Student />
      <hr />
      <hr />
      <UserGreeting isLoggedIn={true} username="sujan rijal" />
      <UserGreeting />
      <hr />
      <hr />

      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
      <List /> */}

      {/* <Button /> */}
      {/* <ProfilePicture /> */}
      {/* <MyComponent /> */}

      <Counter />
    </>
  );
}

export default App;
