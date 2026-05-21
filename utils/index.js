const url = "https://mysuperapp.greendesert-cae30ab5.swedencentral.azurecontainerapps.io";
const TOKEN = "";

const data = {
  id: 0,
  name: "string",
  description: "string",
  price: 0,
  size: "string",
  ingredients: ["string"]
};

async function sendRequest(i) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`
    },
    body: JSON.stringify(data)
  });
  console.log(`Request ${i + 1}: ${res.status}`);
}

(async () => {
  const tasks = [];
  for (let i = 0; i < 1000; i++) {
    tasks.push(sendRequest(i));
  }
  await Promise.all(tasks);
})();