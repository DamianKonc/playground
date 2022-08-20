import type { NextPage } from "next";
import { EventHandler, MouseEventHandler, ReactElement, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    const newId = Math.random();
    setItems((prev) => [{ id: newId, text: inputText }, ...prev]);
    setInputText("");
  };

  const handleInputText = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;

    setItems((prev) =>
      prev.filter((el) =>
        el.id !== parseFloat(button.dataset.id!) ? el : null
      )
    );
  };
  return (
    <>
      <div role={"home"}>Home</div>
      <button onClick={handleClick}>Guzik</button>
      <input onChange={handleInputText} value={inputText}></input>
      <ul>
        {items
          ? items.map((item) => (
              <li key={item.id}>
                {item.text}
                <button data-id={item.id} onClick={handleDelete}>
                  Usuń mnie
                </button>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default Home;
