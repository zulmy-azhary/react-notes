import { useContext } from "react";
import { DataContext, ItemContext } from "../context/DataContext";
import { Card } from "./";

const Archive = () => {
  const { data } = useContext(DataContext);
  const { searchInput, searchResult } = useContext(ItemContext);

	return (
		<>
      <h2>Daftar Arsip</h2>
      {data.filter(item => item.archived).length > 0 ? (
        <div className="notes-list">
          {searchInput ? (
            searchResult(searchInput).filter(item => item.archived).map((item, idx) => <Card key={idx} item={item} />)
          ) : (
            data.filter(item => item.archived).map((item, idx) => <Card key={idx} item={item} />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
		</>
	);
};

export default Archive;
