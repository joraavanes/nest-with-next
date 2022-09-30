import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';

const Index: NextPage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=> {
    console.count('counter side effect');

    return () => {
      console.count('counter unmount');
    }
  }, [counter]);

  useEffect(() => {
    console.count('component renders');
  }, []);
  // console.count('component renders');

  return (
    <div>
      <Head>
        <title>Barkley's Auction</title>
      </Head>
      <h2>This is index from nextjs</h2>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(prev => ++prev)}>Add</button>
      <hr />
      <Link href={"/products"}>Products</Link>
    </div>
  );
};

export default Index;
