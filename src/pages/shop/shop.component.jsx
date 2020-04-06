import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ collections, ...props }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
