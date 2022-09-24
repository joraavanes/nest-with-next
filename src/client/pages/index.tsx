import React, { useEffect } from 'react';
import { NextPage } from 'next';

const Index: NextPage = () => {
  useEffect(() => {
    console.log('component renders');
  }, []);
  console.count('component renders');
  
  return <div>This is index from nextjs</div>;
};

export default Index;
