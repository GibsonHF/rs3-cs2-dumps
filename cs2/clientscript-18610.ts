//
function script18610(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 27;
    var int3 = 6;
    if ((varbitplayer_30982 > 0)) {
        int2 = (int2 + SCALE(int2, 100, (10 + (varbitplayer_30982 * 3))));
        int3 = (int3 + SCALE(int3, 100, (10 + (varbitplayer_30982 * 3))));
    };
    var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} per hit every <col=ffffff>${script15973(3, 1)}</col>.`;
    string0 = `${string0}<br>- <col=ffffff>${inttostring(10, 10)}</col> hits.`;
    string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
    return string0;
}