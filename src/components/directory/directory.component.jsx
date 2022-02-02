import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";

const Directory = ({ sections }) => (
  <div className="directory-menu container mx-auto flex flex-wrap flex-row justify-center items-center">
    {sections.map(({ id, ...othersectionProps }) => (
      <MenuItem key={id} {...othersectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
