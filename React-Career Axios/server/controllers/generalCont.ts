import User from "../models/userModel";

export async function login(req, res) {
    try {
        const { name, email, password } = req.body;
        const newUserInformation = { name, email, password };
        console.log(newUserInformation);


        if (!newUserInformation) throw new Error("no user arrived in general - generalCont");

        const isAUser = await User.findOne({ email, password, name }).collation({
            locale: "en_US",
            strength: 2,
        });

        if (!isAUser) throw new Error("no user found in login");

        res.send({ ok: true, user: isAUser });

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false, error: error.message });

    }
}