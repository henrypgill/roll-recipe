

import { expect, test } from "bun:test";
import { getSomeData } from "../src/database/getSomeData";

test("getSomeData", async () => {
    expect(await getSomeData()).toBe("some data");
});