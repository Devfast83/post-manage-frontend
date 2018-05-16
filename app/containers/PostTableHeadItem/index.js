import React from 'react';
import { Table } from 'semantic-ui-react';

export class PostTableHeadItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Author</Table.HeaderCell>
        <Table.HeaderCell>Created Date</Table.HeaderCell>
        <Table.HeaderCell>Up Votes</Table.HeaderCell>
        <Table.HeaderCell>Down Votes</Table.HeaderCell>
        <Table.HeaderCell>Media</Table.HeaderCell>
      </Table.Row>
    );
  }
}

export default PostTableHeadItem;
