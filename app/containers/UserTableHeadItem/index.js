import React from 'react';
import { Table } from 'semantic-ui-react';

export class UserTableHeadItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>User Name</Table.HeaderCell>
        <Table.HeaderCell>Password</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Thumbnail</Table.HeaderCell>
      </Table.Row>
    );
  }
}

export default UserTableHeadItem;
