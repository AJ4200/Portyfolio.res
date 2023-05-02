import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { SetStateAction, useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";


export const Heading = () => {

  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.buttonholder}>
        <OutlineButton onClick={() => window.open("/fake_resume.pdf")}>
          My resume
        </OutlineButton>
      </div>
    </header>
  );
};
