import History from "../models/historyModel";

export async function history(req, res) {
    try {

        const result = await History.find({})

        if (!result) throw new Error("No histories found in the database in history - historyCont");

        res.send({ ok: true, result });

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false, error: error.message });

    }
}