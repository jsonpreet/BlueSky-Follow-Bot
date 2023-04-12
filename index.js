

import bsky  from '@atproto/api';
const { BskyAgent } = bsky;
import * as dotenv from 'dotenv';
import process from 'node:process';
import fs from 'node:fs';
import cron from 'node-cron';

dotenv.config();

console.log('Booting up BlueSky follow bot...')

export const handler = async function () {
    console.log("Initialized.")
    
    // var now = new Date();
    
    // cron.schedule('*/5 * * * *', async() => {
    //     console.log('running a task every 5 minutes');
    //     // Log in to Bluesky
    //     const agent = new BskyAgent({
    //         service: 'https://bsky.social',
    //         persistSession: (evt, sess) => {
    //             // store the session-data for reuse
    //             // [how to do this??]
    //             // console.log('Persisting session data...')
    //             // const session_data = JSON.stringify(sess);
    //             // fs.writeFileSync('session.json', session_data);
    //         },
    //     });
    //     // if (fs.existsSync('session.json')) {
    //     //     // load the session-data from a previous run
    //     //     console.log('Loading session data...')
    //     //     const session_data = fs.readFileSync('session.json');
    //     //     const session = JSON.parse(session_data);
    //     //     await agent.resumeSession(session)
    //     // } else {
    //     //     // log in to Bluesky
    //     //     console.log('Logging in...')

    //     //     await agent.login({
    //     //         identifier: process.env.BSKY_USERNAME,
    //     //         password: process.env.BSKY_PASSWORD,
    //     //     });
    //     // }

    //      // log in to Bluesky
    //     console.log('Logging in...')

    //     await agent.login({
    //         identifier: process.env.BSKY_USERNAME,
    //         password: process.env.BSKY_PASSWORD,
    //     });

    //     try{
    //         // Get a list of bsky actors
    //         const profiles = await agent.app.bsky.actor.getSuggestions({ limit: 100 });
    //         const actors = profiles.data.actors;
    //         console.log(`Found ${actors.length} profiles.`)
    //         let i = 0;

    //         // Loop through the list of profiles
    //         for (const actor of actors) {
    //             // Get the profile
    //             const profile = await agent.getProfile({actor: actor.did})

    //             if (profile.data.viewer.following == null) {await agent.follow(profile.data.did);
    //                 console.log(`Followed ${profile.data.did} profile.`);
    //                 // increment i by 1
    //                 i++;
    //                 await sleep(2000);
    //             }
    //         }
    //         fs.writeFileSync('data/' + now.getFullYear() + "-"+ now.getMonth() + "-" + now.getDate() + '___' + i + '.txt', `Total Followed ${i}`);
    //         console.log(`Total Followed ${i} profiles.`)
    //     } catch (e) {
    //         console.log(e)
    //     }
    //     console.log('Completed async responses. Goodbye.')
    // });
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default handler

//handler()