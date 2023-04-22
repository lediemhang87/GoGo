const express = require('express')

const app = express();

app.use(express.json());

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

app.post(`/api`, async (req, res) => {
    try {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: req.body.Content}],
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

    res.send("hello")
})

app.listen(5000, ()=> {console.log("server started on port 5000")})
