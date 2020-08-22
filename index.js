function takeANumber(line, newPerson) {
  line.push(newPerson);
  let welcome = `Welcome, ${newPerson}. You are number ${line.length} in line.`
  return welcome;
}

function nowServing(line) {
  if (line.length > 0) {
    let x = line.shift();
    return `Currently serving ${x}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  let str = 'The line is currently:'
  for (let i = 0; i < line.length; i++) {
    str += ` ${i + 1}. ${line[i]}, `
  }
  return str;
}
