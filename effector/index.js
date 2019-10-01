let {
  createStore,
  createEvent
} = effector,
d = document,
  n = 141,
  s = d.querySelector("#s"),
  f = d.body.appendChild(d.createElement("iframe")),
  k = "click",
  $s = createStore(1),
  $i = createEvent(),
  $d = createEvent(),
  c = createEvent("c"),
  q = d.querySelector.bind(d);
$s
  .on($i, b => (b < n ? ++b : b))
  .on($d, b => (2 > b ? 1 : --b))
  .on(c, (c, a) => +a);
$s.watch(a => {
  (f.src =
    "https://kodaktor.ru/gossbook_slides/gossbook-" +
    (100 > a ? ("0" + a).slice(-2) : a) +
    ".png"),
  (s.value = a);
});
[...Array(n).keys()].forEach(a =>
  s.appendChild(d.createElement("option")).appendChild(d.createTextNode(a))
);
s.addEventListener("input", a => c(a.target.value)),
  q("#p").addEventListener(k, () => $d()),
  q("#n").addEventListener(k, () => $i()),
  q("#o").addEventListener(k, () => c(3));