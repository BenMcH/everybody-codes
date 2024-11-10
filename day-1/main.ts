const potionsNeeded: Record<string, number> = {
  A: 0,
  B: 1,
  C: 3,
  D: 5,
  x: -1,
}

export function calculatePotions(input: string): number {
  return input.split("").map(a => potionsNeeded[a]).reduce((total, val) => total + val);
}

export function calculatePotionsPair(input: string): number {
  const monsters = input.split("");

  console.log(monsters.length)

  let total = 0;

  for (let i = 0; i < monsters.length; i += 2) {
    const pair = [monsters[i], monsters[i + 1]].filter(m => m !== 'x')
    if (pair.length === 1) {
      total += calculatePotions(pair[0]);
    } else {
      pair.forEach((m) => total += calculatePotions(m) + 1);
    }
  }

  return total
}

export function calculatePotionsTrio(input: string): number {
  const monsters = input.split("");

  console.log(monsters.length)

  let total = 0;

  for (let i = 0; i < monsters.length; i += 3) {
    const pair = [monsters[i], monsters[i + 1], monsters[i + 2]].filter(m => m !== 'x')
    if (pair.length === 1) {
      total += calculatePotions(pair[0]);
    } else if (pair.length === 2) {
      pair.forEach((m) => total += calculatePotions(m) + 1);
    } else {
      pair.forEach((m) => total += calculatePotions(m) + 2);
    }
  }

  return total
}
