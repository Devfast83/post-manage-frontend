import React from 'react';
import PropTypes from 'prop-types';
import { Table, Image, Rating } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class MediaTableBodyItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    return (
      <Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>{item.cover}</Table.Cell>
        <Table.Cell>{item.thumbnail}</Table.Cell>
      </Table.Row>
    );
  }
}

MediaTableBodyItem.propTypes = {
  item: PropTypes.object,
};

export default MediaTableBodyItem;
