function takeANumber(line, newPerson) {
  line.push(newPerson);
  let welcome = `Welcome, ${newPerson}. You are number ${line.length} in line.`
  return welcome;
}

function nowServing(line) {
  if (line.lenght > 0) {
    let x = line.shift();
    return x;
  } else {
    return "There is nobody waiting to be served!"
  }
}