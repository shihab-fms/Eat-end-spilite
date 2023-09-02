import { useState } from "react";
import Button from "./Button";

export const FormSplitBill = ({ selectedFriend, onSpliteBill }) => {
  const friend = selectedFriend;

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoPaingBill, setWhoPaingBill] = useState("you");
  const paidByFriend = bill ? bill - paidByUser : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSpliteBill(whoPaingBill === "you" ? paidByFriend : -paidByUser);
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split Bill With {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}></input>
      <label>🙎‍♂️ Your expense</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }></input>
      <label>🧑‍🤝‍🧑 {friend.name}'s expense</label>
      <input type='text' disabled value={paidByFriend}></input>
      <label>🤑 Who's paying the bill</label>
      <select
        value={whoPaingBill}
        onChange={(e) => setWhoPaingBill(e.target.value)}>
        <option value='you'>You</option>
        <option value='friend'>{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};
