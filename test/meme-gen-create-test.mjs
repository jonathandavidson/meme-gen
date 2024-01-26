import LambdaTester from 'lambda-tester';
import { handler } from '../src/meme-gen-create.mjs'

describe('meme-gen-create', () => {
  it('invokes successfullly', async () => {
    await LambdaTester(handler)
        .event({})
        .expectResult()
  });
});
