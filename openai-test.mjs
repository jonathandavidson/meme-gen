import OpenAI from 'openai';

const openai = new OpenAI();

// console.log(process.env.OPENAI_API_KEY);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'Generate a short quote with a positive uplifting message' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
}

main();
