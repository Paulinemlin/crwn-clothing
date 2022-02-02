const INITIAL_STATE = {
  sections: [
    {
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
      size: "1/3",
    },
    {
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
      size: "1/3",
    },
    {
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
      size: "1/3",
    },
    {
      title: "WOMEN",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      linkUrl: "shop/women",
      size: "1/3",
    },
    {
      title: "MEN",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "shop/men",
      size: "1/3",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default directoryReducer