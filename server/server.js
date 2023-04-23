const express = require('express')
const fs = require('fs');

const app = express();

app.use(express.json());

const { Configuration, OpenAIApi } = require('openai');
let configs = JSON.parse(fs.readFileSync('config.json'))

const configuration = new Configuration({
  apiKey: configs.api_key,
});

const openai = new OpenAIApi(configuration);

app.post(`/api`, async (req, res) => {
    try {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: req.body.content}],
          max_tokens: 2408
        });
    
        console.log(response.data.choices[0].message.content);
        res.json({
            data: response.data
        })
      } catch (err) {
        console.log('Error: ' + err);
        return err;
      }

})

app.listen(5000, ()=> {console.log("server started on port 5000")})
