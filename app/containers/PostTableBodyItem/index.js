import React from 'react';
import PropTypes from 'prop-types';
import { Table, Image, Rating } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class PostTableBodyItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    return (
      <Table.Row>
        <Table.Cell>
          <Image avatar src={item.avatar} />
        </Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{item.CustomUser && item.CustomUser.username}</Table.Cell>
        <Table.Cell>{item.createdAt}</Table.Cell>
        <Table.Cell>{item.upvotes}</Table.Cell>
        <Table.Cell>{item.downvotes}</Table.Cell>
        <Table.Cell><Link to='/medias'>{item.Media && item.Media.thumbnail}</Link></Table.Cell>
      </Table.Row>
    );
  }
}

PostTableBodyItem.propTypes = {
  item: PropTypes.object,
};

export default PostTableBodyItem;
