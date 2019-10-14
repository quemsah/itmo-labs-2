function start() {
  document.getElementById("select-css").addEventListener("change", onChange, false);
}

async function onChange(event) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      param: event.target.value
  }), // тип данных в body должен соответвовать значен    ию заголовка "Content-Type"
  }
  const links = await fetch('http://localhost:3000/yo', options).then(data => data.json());
  console.log(links);
}

window.addEventListener("load", start, false);
