import React from 'react';
import PropTypes from 'prop-types';
import { Table, Image, Rating } from 'semantic-ui-react';

export class UserTableBodyItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    return (
      <Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>{item.username}</Table.Cell>
        <Table.Cell>{item.password}</Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
        <Table.Cell>{item.thumbnail}</Table.Cell>
      </Table.Row>
    );
  }
}

UserTableBodyItem.propTypes = {
  item: PropTypes.object,
};

export default UserTableBodyItem;
