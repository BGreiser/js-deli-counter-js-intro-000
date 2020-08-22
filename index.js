function takeANumber(line, newPerson) {
  line.push(newPerson);
  let welcome = `Welcome, ${newPerson}. You are number ${line.length} in line.`
  return welcome;
}

function nowServing(line) {
  if (line.length > 0) {
    let x = line.shift();
    return `We are now serving ${x}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}
