import { useState } from "react";
import Button from "./Button";
const FormAddFriend = ({ onClick }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFnd = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onClick(newFnd);
  };
  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>🙍‍♂️Friend Name: </label>
      <input type='text' onChange={(e) => setName(e.target.value)}></input>
      <label>🌌Image URL: </label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}></input>
      <Button>Submit</Button>
    </form>
  );
};

export default FormAddFriend;
