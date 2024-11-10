import { assertEquals } from "@std/assert";
import { calculatePotions, calculatePotionsPair, calculatePotionsTrio } from "./main.ts";

Deno.test(function testPotions() {
  assertEquals(calculatePotions('ABBAC'), 5);
});

Deno.test(function part2() {
  assertEquals(calculatePotionsPair('AxBCDDCAxD'), 28);
});


Deno.test(function part3() {
  assertEquals(calculatePotionsTrio('xBxAAABCDxCC'), 30);
});
