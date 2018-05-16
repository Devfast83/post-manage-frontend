import React from 'react';
import PropTypes from 'prop-types';

import CTable from 'components/CTable';
import LoadingIndicator from 'components/LoadingIndicator';
import PostTableHeadItem from 'containers/PostTableHeadItem';
import PostTableBodyItem from 'containers/PostTableBodyItem';

function PostsTable({ loading, error, posts }) {
  if (loading) {
    return <CTable singleComponent={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <h4>Something went wrong, please try again!</h4>
    );
    return <CTable singleComponent={ErrorComponent} />;
  }

  if (posts) {
    return (
      <CTable
        itemFieldsCount={8}
        bodyItems={posts}
        headItemComponent={PostTableHeadItem}
        bodyItemComponent={PostTableBodyItem}
      />
    );
  }

  return null;
}

PostsTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  posts: PropTypes.any,
};

export default PostsTable;
