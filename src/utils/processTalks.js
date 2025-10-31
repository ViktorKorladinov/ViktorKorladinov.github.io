import {getCollection} from "astro:content";
import {DateTime} from "luxon";

async function getTalks() {
    const entries = await getCollection("talks");
    const talks = entries.map(({data}) => {
        const datePrague = DateTime.fromISO(`${data.datePrague}T15:00:00`, {zone: "Europe/Prague"});
        const times = {
            utc: datePrague.setZone("UTC").toFormat("MMM dd, HH:mm ccc"),
            prague: datePrague.toFormat("MMM dd, HH:mm ccc"),
            newYork: datePrague.setZone("America/New_York").toFormat("MMM dd, HH:mm ccc"),
            shanghai: datePrague.setZone("Asia/Shanghai").toFormat("MMM dd, HH:mm ccc"),
        };

        return {
            ...data,
            keywords: data.keywords ? data.keywords.split(",").map(k => k.trim()) : [],
            times,
            date: datePrague.toUTC().toISO(),
        };
    });

    const upcomingTalks = talks.filter(t => t.status === 'upcoming');
    const pastTalks = talks.filter(t => t.status === 'past');
    return {upcomingTalks, pastTalks};
}

export {getTalks};