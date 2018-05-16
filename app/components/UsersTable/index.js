import React from 'react';
import PropTypes from 'prop-types';

import CTable from 'components/CTable';
import LoadingIndicator from 'components/LoadingIndicator';
import UserTableHeadItem from 'containers/UserTableHeadItem';
import UserTableBodyItem from 'containers/UserTableBodyItem';

function UsersTable({ loading, error, users }) {
  if (loading) {
    return <CTable singleComponent={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <h4>Something went wrong, please try again!</h4>
    );
    return <CTable singleComponent={ErrorComponent} />;
  }

  if (users) {
    return (
      <CTable
        itemFieldsCount={5}
        bodyItems={users}
        headItemComponent={UserTableHeadItem}
        bodyItemComponent={UserTableBodyItem}
      />
    );
  }

  return null;
}

UsersTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  Users: PropTypes.any,
};

export default UsersTable;
