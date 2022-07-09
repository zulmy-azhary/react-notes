import { createContext, useEffect, useRef, useState } from "react";
import { getInitialData, showFormattedDate } from "../utils";

// create context for data and item
export const DataContext = createContext();
export const ItemContext = createContext();

const DataProvider = ({ children }) => {
  // all data
  const [data, setData] = useState([]);
  const countRef = useRef(0);
  const maxLength = 50;
  const initialData = getInitialData();
  const date = +new Date();
  
  // item
  const [item, setItem] = useState({
    id: date,
    title: "",
    body: "",
    archived: false,
    createdAt: showFormattedDate(date),
  });

  //search
  const [searchInput, setSearchInput] = useState("");

  // when the component is first rendered, set initialData into data state using setData
  useEffect(() => {
    initialData.filter(item => item.createdAt = showFormattedDate(item.createdAt));
    setData(initialData);
  }, []);

  // input
  const inputHandler = e => {
    e.persist();

    // can setItem for title input as long as character's length is less or equal to maxLength
    countRef.current.value.length <= maxLength && setItem({ ...item, [e.target.name]: e.target.value });
  }

  // submit
  const submitHandler = e => {
    e.preventDefault();
    if (!item.title || !item.body) return
    
    setData([...data, item]);
    setItem({
      id: date,
      title: "",
      body: "",
      archived: false,
      createdAt: showFormattedDate(date),
    });
    countRef.current.value = "";
  }

  // action for archived or not
  const actionHandler = itemFetch => {
    itemFetch.archived = !itemFetch.archived;
    
    const filteredData = data.filter(item => {
      const filterItem = item.id !== itemFetch.id;

      return [filterItem, itemFetch];
    });
    
    setData(filteredData);
  }

  // remove noted or archived items
  const removeHandler = itemFetch => {
    const filteredData = data.filter(item => {
      return item.id !== itemFetch.id;
    })
    
    setData(filteredData);
  }

  // input search
  const searchHandler = e => {
    setSearchInput(e.target.value);
  }

  // search data
  const searchResult = keyword => {
    return data.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  const allData = { data, inputHandler, submitHandler, actionHandler, removeHandler, searchHandler }
  const allItem = { item, countRef, maxLength, searchInput, searchResult }
  
  return (
    <DataContext.Provider value={allData}>
      <ItemContext.Provider value={allItem}>
        {children}
      </ItemContext.Provider>
    </DataContext.Provider>
  );
};

export default DataProvider;