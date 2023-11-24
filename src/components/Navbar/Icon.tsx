import React from 'react';

interface IconProps {
  imagePath: string;
  altText: string;
  width?: string;
  marginRight?: string;
}

const Icon: React.FC<IconProps> = ({ imagePath, altText, width = '36px', marginRight = '10px' }) => (
  <img src={imagePath} alt={altText} style={{ width, marginRight }} />
);

export default Icon;