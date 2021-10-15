import React, { useState, useContext } from "react";
import { styles } from "../../assets/styles/index";
import { DataContext } from "../../context/DataContext";
import { icon } from "../../assets/icons";
import { ButtonList } from "../buttonList/buttonList";

export const HeaderRow = () => {
  const { display, setMenu } = useContext(DataContext);
  const [headerData] = useState({
    home: [icon.faTable, "Dashboard", () => setMenu(false)],
    todolist: [icon.faList, "To do Lists", () => setMenu(false)],
    dragable: [icon.faHandLizard, "Dragable List", () => setMenu(false)],
    creator: [icon.faPlus, "Create List", () => setMenu(false)],
  });

  return (
    <>
      <div style={styles.header}>
        <ButtonList Data={headerData} display={display} />
      </div>
    </>
  );
};
