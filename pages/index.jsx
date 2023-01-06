/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
// import Browser from '../src/components/browser';

import dynamic from 'next/dynamic';

const BrowserComponent = dynamic(() => import('../src/components/browser'), {ssr: false})

const index =  ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <BrowserComponent />
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
);
export default index;


export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho'
      }
    }
  }
}