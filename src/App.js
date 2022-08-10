import * as React from 'react';

import { Layout } from "./components/layout";
import { Similarity } from './components/similarity';
import "./App.css"

export default function Dashboard() {

  return (<>
    <div className='flex'>
    <Similarity/>
    </div>

    {/* <Layout/> */}

  </>);
}