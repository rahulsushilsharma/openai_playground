import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
try {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
  });
  console.log(completion.data.choices[0].text);
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
