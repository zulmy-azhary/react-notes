import { useContext } from 'react';
import { DataContext, ItemContext } from './context/DataContext';
import { Archive, Navbar, Notes } from './components';

const App = () => {
  const { inputHandler, submitHandler } = useContext(DataContext);
  const { item, countRef, maxLength } = useContext(ItemContext);
  const length = countRef.current.value?.length;

  return (
    <>
      <Navbar />
      <main>
        <div className="note-app__body">
          <div className="note-input">
            <form onSubmit={submitHandler}>
              <h2>Buat Catatan</h2>
              <p className="note-input__title__char-limit">Sisa karakter: {!length ? maxLength : maxLength - length}</p>
              <input ref={countRef} value={item.title} name="title" onChange={inputHandler} className="note-input__title" type="text" placeholder="Masukkan Judul" />
              <textarea value={item.body} name="body" onChange={inputHandler} className="note-input__body" placeholder="Tulis catatan..." />
              <button type="submit">Buat</button>
            </form>
          </div>
          <Notes />
          <Archive />
        </div>
      </main>
    </>
  );
}

export default App;