const start = () => {
  document.getElementById("select-css").addEventListener("change", onChange, false);
  onChange({});
};

const onChange = async (event) => {
  // 5 по умолчанию
  let num = ("target" in event) ? event.target.value : 5;
  let feed = document.querySelector('.feed');
  feed.innerHTML = "";
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      param: num
    }),
  }
  const fetchedData = await fetch('http://localhost:3000/yo', options).then(data => data.json()).catch(x => console.log(x));
  console.log(fetchedData);
  fetchedData.forEach(el => feed.innerHTML += '<h5><a href=\'' + el.link + '\'>' + el.title + '</a></h5>');
}

window.addEventListener("load", start, false);