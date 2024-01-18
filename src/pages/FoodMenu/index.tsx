import styles from "./FoodMenu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import SearchEngine from "./SearchEngine";
import Filters from "./Filters";
import Orderer from "./Orderer";
import Items from "./Items";
import { useState } from "react";

export default function FoodMenu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [orderer, setOrderer] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.foodMenu}>
        <h3 className={styles.foodMenu__title}>Menu</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.foodMenu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Orderer orderer={orderer} setOrderer={setOrderer} />
        </div>
        <Items search={search} filter={filter} orderer={orderer} />
      </section>
    </main>
  );
}
