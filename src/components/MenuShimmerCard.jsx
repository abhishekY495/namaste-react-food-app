const MenuShimmerCard = () => {
  return (
    <div className="restaurant-menu-container-shimmer-card">
      <div className="restaurant-details-2">
        <div className="details">
          <p className="restaurant-details-name"></p>
          <p className="restaurant-details-cuisines"></p>
          <p className="restaurant-details-areaname"></p>
        </div>
        <div className="rating-price">
          <div className="rating-details"></div>
          <p className="restaurant-details-rating"></p>
        </div>
      </div>
      {/*  */}
      <div className="restaurant-menu">
        <div className="menu">
          <div className="category-name">
            <h4></h4>
          </div>
          {/*  */}
          <div className="single-item">
            <div>
              <p className="name"></p>
              <p className="price"></p>
              <p className="description"></p>
            </div>
            <div className="image"></div>
          </div>
          <div className="single-item">
            <div>
              <p className="name"></p>
              <p className="price"></p>
              <p className="description"></p>
            </div>
            <div className="image"></div>
          </div>
          <div className="single-item">
            <div>
              <p className="name"></p>
              <p className="price"></p>
              <p className="description"></p>
            </div>
            <div className="image"></div>
          </div>
          <div className="single-item">
            <div>
              <p className="name"></p>
              <p className="price"></p>
              <p className="description"></p>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuShimmerCard;
