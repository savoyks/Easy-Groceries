
function chatgpt(prompt) {

    const body = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    };

    fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((data) => {
        const message=data["choices"][0]["message"]["content"]
        console.log(message)
    })
    .catch((error) => console.error(error));
}