# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Syamsi02/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Syamsi02/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical Short cut from Rockstar's official Grand Theft Auto VI Launch Trailer: Jason and Lucia's getaway makes the evening news, then the dirt bikes take over Vice City — and the clip turns to you: make clips like this with AI and earn real money on make.fun. The video is the entry: places go by YouTube views, and the top 20 share $500.

## The clip

One moment, not a montage: seconds 60–68 of the official Launch Trailer. It opens on Jason driving with a police car in pursuit, cuts to Lucia in the passenger seat, then to the WEAZEL NEWS helicopter shot of the dirt-bike chase ("NO (OVER) TURNING ZONE!") and the bikes doing wheelies down a Vice City street. A short "GTA 6 IS FINALLY HERE" title rides the first four seconds. Then a 13-second end card pitches make.fun on screen: "MAKE CLIPS LIKE THIS WITH AI AND EARN REAL MONEY ON make.fun — make.fun/bounty/gta6-clipper-01".

The cut was made in the agent session that built this repository: the trailer was fetched there, the moment was chosen from frame sheets, and ffmpeg trimmed it to 8 seconds, blur-filled it to vertical 1080x1920, laid the title and the pitch end card over it, and rendered the 21-second clip. The finished clip is `gta6-clipper-01-clip.mp4` (1080x1920, 30 fps, H.264 + AAC).

## The video

Published public on YouTube as a Short. Its description carries the bounty's line and the play code `makefun-tandem-spaniel-pumpkin`. `VIDEO.json` at this repository's root names the video's address; it holds a placeholder until the upload lands, then a follow-up commit fills in the real address before submission.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do. Node 22, standard library only, no network, no files outside the repository.

---

<sub>Entered on [make.fun](https://make.fun/?ref=fgwhnby2&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
