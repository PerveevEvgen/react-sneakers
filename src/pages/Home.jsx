import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  addToBasket,
  addToFavorites,
  onChangeSearchValue,
  basketItems,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => {
      return (
        <Card
          key={index}
          loading={isLoading}
          {...item}
          onPlus={(item) => {
            addToBasket(item);
          }}
          onFavorite={(item) => {
            addToFavorites(item);
          }}
          added={basketItems.some((obj) => Number(obj.id) === Number(item.id))}
        />
      );
    });
  };

  return (
    <>
      <div className="sub_header d-flex justify-between align-center">
        <h1>
          {searchValue ? `Поиск по запросу:"${searchValue}"` : " Все кроссовки"}
        </h1>
        <div className="search_container">
          <img src="/img/search.svg" alt="search-icon"></img>
          <input
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder="Поиск..."
          ></input>
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue("");
              }}
              className="clear btn_remove_text"
              src="img/btn-remove.svg"
              alt="btn-remove"
            ></img>
          )}
        </div>
      </div>
      <div className="cards_container d-flex flex-wrap justify-around">
        {renderItems()}
      </div>
    </>
  );
}
export default Home;
