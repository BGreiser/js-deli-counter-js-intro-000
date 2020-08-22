function takeANumber(line, newPerson) {
  line.push(newPerson);
  let welcome = `Welcome, ${newPerson}. You are number ${line.length} in line.`
  return welcome;
}
