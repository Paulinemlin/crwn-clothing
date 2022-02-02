import React from "react";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
          size: "1/3",
        },
        {
          title: "JACKETS",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "jackets",
          size: "1/3",
        },
        {
          title: "SNEAKERS",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "sneakers",
          size: "1/3",
        },
        {
          title: "WOMEN",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          linkUrl: "women",
          size: "1/3",
        },
        {
          title: "MEN",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          linkUrl: "men",
          size: "1/3",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu container mx-auto flex flex-wrap flex-row justify-center items-center">

        {this.state.sections.map(({ id, ...othersectionProps }) => (
          <MenuItem key={id} {...othersectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
