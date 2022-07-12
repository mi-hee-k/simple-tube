import { useRef } from "react";

const Header = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = (e) => {
    handleSearch();
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header>
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
        <h1>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색어를 입력하세요"
        onKeyDown={onKeyDown}
      />
      <button type="submit">
        <img src="./images/search.png" alt="search" onClick={onClick} />
      </button>
    </header>
  );
};

export default Header;
