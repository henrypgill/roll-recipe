import { database } from "../server";

export async function getSomeData() {
    // const response = await database.query("get_some_stuff.sql", { someParam: "some value" }).then(r => r.rows)
    return "some data";
}
