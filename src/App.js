import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import { FriendsList } from "./components/FriendsList";
import { FormSplitBill } from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriend] = useState(initialFriends);
  const [showAddFriendForm, setAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = () => {
    setAddFriendForm((show) => !show);
  };

  const handleNewFriend = (newFnd) => {
    setFriend((fnd) => [...friends, newFnd]);
    setAddFriendForm((show) => !show);
  };

  const handleSeletedFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriendForm(false);
  };

  const handleSpliteBill = (value) => {
    // console.log(value);

    setFriend(
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friend={friends}
          onSelection={handleSeletedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriendForm && <FormAddFriend onClick={handleNewFriend} />}
        <Button onClick={handleAddFriend}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSpliteBill={handleSpliteBill}
        />
      )}
    </div>
  );
}
