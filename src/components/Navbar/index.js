import styles from "./Navbar.module.css";
import NavbarList from "../NavbarList/NavbarList";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
        </div>
        <NavbarList />
      </nav>
    </div>
  );
}

export default Navbar;
