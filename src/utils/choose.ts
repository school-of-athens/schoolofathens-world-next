export default function choose(choices: any[]) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
