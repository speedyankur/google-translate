import { test, runTests } from "https://deno.land/std/testing/mod.ts";
import {
    assertEquals,
    assertThrows
} from "https://deno.land/std/testing/asserts.ts";

import {Translator} from "./mod.ts";

test({
    name: "It should b able to call translate function",
    fn(): void {
        const translated: string = Translator.translate("yahoo", "de", "en");
        assertEquals(translated, 'yahoo');
    }
});

runTests();