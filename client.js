const axios = require('axios');

axios.get('http://localhost:3000')
.then((res) => {
  console.log(res.data);
})
.catch(e => console.log(e));

const body = {
  hello: 'world',
  stuff: [5, 6, 7],
};

axios.post('http://localhost:3000/post-test', body)
.then((res) => {
  console.log(res.data);
})
.catch(e => console.log(e));
