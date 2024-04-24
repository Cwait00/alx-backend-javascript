export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Removed the assignments as const variables cannot be reassigned
    // task = false;
    // task2 = true;
  }

  return [task, task2];
}
