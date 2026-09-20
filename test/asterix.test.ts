import { MameHiExtractor } from "../dist";
import { resolve } from "path";

var romname = 'asterix'

it(romname, async () => {
    const a = new MameHiExtractor(resolve(__dirname, '../demo-hiscores'))
    const extractor = await a.get(romname)
    expect(extractor?.extract().scores).toEqual({
        default: [
            { rank: 1, score: 37500, name: 'H,A', extra: { character: 'asterix' } },
            { rank: 2, score: 27800, name: 'Y,I', extra: { character: 'obelix' } },
            { rank: 3, score: 19800, name: 'M,K', extra: { character: 'asterix' } },
            { rank: 4, score: 10200, name: 'S,W', extra: { character: 'asterix' } },
            { rank: 5, score: 9900, name: 'NOB', extra: { character: 'asterix' } },
            { rank: 6, score: 8500, name: 'T,A', extra: { character: 'obelix' } },
            { rank: 7, score: 6800, name: 'T,A', extra: { character: 'obelix' } },
            { rank: 8, score: 6100, name: 'J,K', extra: { character: 'asterix' } },
            { rank: 9, score: 5600, name: 'M,I', extra: { character: 'asterix' } },
            { rank: 10, score: 3200, name: 'M,E', extra: { character: 'obelix' } }
        ]
    })
})
