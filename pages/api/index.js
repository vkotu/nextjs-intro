// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect';
import cors from 'cors';
import auth from '../../src/lib/auth';

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send('Hello world')
  })
  .post((req, res) => {
    res.json({ hello: 'world' })
  })
  .put(async (req, res) => {
    res.end('hello')
  })
  
export default handler;


// export default auth(function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// });
