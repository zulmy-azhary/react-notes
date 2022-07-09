import { useContext } from "react";
import { DataContext, ItemContext } from "../context/DataContext";

const Navbar = () => {
  const { searchHandler } = useContext(DataContext);
  const { searchInput } = useContext(ItemContext);

  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <input value={searchInput} onChange={searchHandler} name="search" type="text" placeholder="Cari catatan..." />
    </div>
  );
}

export default Navbar;