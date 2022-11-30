import User from "../models/userModel";

export async function register(req, res) {
    try {
        const { payload } = req.body;
        console.log(payload, "conts");

        if (!payload) throw new Error("no user arrived in register - userCont");

        const { email, password, name, lang } = payload

        const oldUser = await User.findOne({ email, password, name }).collation({
            locale: "en_US",
            strength: 2,
        });

        if (oldUser) throw new Error("There is an old user found");

        const newUser = new User({ name, password, email, lang });
        const result = await newUser.save();

        res.send({ ok: true, result });

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false, error: error.message });

    }
}

export async function login(req, res) {
    try {
        const { payload } = req.body;
        console.log(payload, "conts");

        if (!payload) throw new Error("no user arrived in login - userCont");

        const { email, password, name } = payload

        const result = await User.findOne({ email, password, name }).collation({
            locale: "en_US",
            strength: 2,
        });

        if (!result) throw new Error("No user found in the database in login - userCont");

        res.send({ ok: true, result });

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false, error: error.message });

    }
}