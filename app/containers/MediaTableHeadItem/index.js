import React from 'react';
import { Table } from 'semantic-ui-react';

export class MediaTableHeadItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Cover</Table.HeaderCell>
        <Table.HeaderCell>Thumbnail</Table.HeaderCell>
      </Table.Row>
    );
  }
}

export default MediaTableHeadItem;
