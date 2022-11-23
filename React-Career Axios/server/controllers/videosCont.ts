import Video from "../models/videosModel";

export async function getVideos(req, res) {
    try {
        const { userId } = req.query;
        console.log(userId);
        
        
        if (!userId) throw new Error("no userId arrived in videosCont");
        
        const videos = await Video.find({ userId: userId })
        console.log(videos, "videos");

        if (!videos) throw new Error("no videos found in videosCont");

        res.send({ ok: true, videos });

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false, error: error.message });

    }
}