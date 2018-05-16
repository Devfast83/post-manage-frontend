import React from 'react';
import PropTypes from 'prop-types';

import CTable from 'components/CTable';
import LoadingIndicator from 'components/LoadingIndicator';
import MediaTableHeadItem from 'containers/MediaTableHeadItem';
import MediaTableBodyItem from 'containers/MediaTableBodyItem';

function MediasTable({ loading, error, medias }) {
  if (loading) {
    return <CTable singleComponent={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <h4>Something went wrong, please try again!</h4>
    );
    return <CTable singleComponent={ErrorComponent} />;
  }

  if (medias) {
    return (
      <CTable
        itemFieldsCount={8}
        bodyItems={medias}
        headItemComponent={MediaTableHeadItem}
        bodyItemComponent={MediaTableBodyItem}
      />
    );
  }

  return null;
}

MediasTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  medias: PropTypes.any,
};

export default MediasTable;
