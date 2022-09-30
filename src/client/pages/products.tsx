import { NestFactory } from '@nestjs/core';
import Head from 'next/head';
import React, { useEffect } from 'react';
import ApiService from '../../server/modules/api/api.service';

const Products = ({ items }) => {

  useEffect(()=> {
    fetch('/api/items').then(res=>res.json()).then(data=>console.log(data))

  }, []);

  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <pre>
        {
           JSON.stringify(items, undefined, 3)
        }
      </pre>
    </div>
  );
};

export async function getStaticProps() {
  // const apiService = await NestFactory.create(ApiService);
  // const items = apiService.

  try {
    const res = await fetch('http://localhost:3000/api/items');
    const data = await res.json();
  
    return {
      props: {
        items: data
      }
    }
    
  } catch (error) {
    console.error(error);
    return {
      props: {}
    }
  }
}

export default Products;
