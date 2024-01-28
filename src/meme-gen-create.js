const OpenAI = require('openai');

module.exports.handler = async (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'Generate a short quote with a positive uplifting message' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0].text);

  callback(null, 'Finished');
};
