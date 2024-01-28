const LambdaTester = require('lambda-tester');
const handler = require('../src/meme-gen-create').handler

jest.mock('openai');

const OpenAI = require('openai');
const createSpy = jest.fn();
const openaiMock = { chat: { completions: { create: createSpy }}};
OpenAI.mockReturnValue(openaiMock);

describe('meme-gen-create', () => {
  it('invokes successfullly', async () => {
    const mockCreateReturnValue = {
      choices: [ { text: 'foo' } ]
    };
    createSpy.mockReturnValueOnce(mockCreateReturnValue);

    await LambdaTester(handler)
        .event({})
        .expectResult()

    const createArgs = createSpy.mock.calls[0][0];

    expect(createArgs.model).toBe('gpt-3.5-turbo');
    expect(createArgs.messages.length).toBe(1);
    expect(createArgs.messages[0].role).toBe('system');
    expect(createArgs.messages[0].content).toBe('Generate a short quote with a positive uplifting message');
  });
});
