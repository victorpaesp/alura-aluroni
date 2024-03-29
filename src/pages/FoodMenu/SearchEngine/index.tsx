import React from "react";
import styles from "./SearchEngine.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: Props) {
  return (
    <div className={styles.searchEngine}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search"
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}
