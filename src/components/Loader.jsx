import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    className='items'
    speed={2}
    width={280}
    height={505}
    viewBox='0 0 280 505'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='0' rx='5' ry='5' width='237' height='302' />
    <rect x='0' y='311' rx='5' ry='5' width='237' height='22' />
    <rect x='0' y='348' rx='5' ry='5' width='237' height='38' />
    <rect x='2' y='401' rx='15' ry='15' width='63' height='33' />
    <rect x='170' y='401' rx='15' ry='15' width='63' height='33' />
  </ContentLoader>
);

export default Loader;
