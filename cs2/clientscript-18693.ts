//
function script18693(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 2;
    var int3 = 75;
    var int4 = 10;
    if ((int0 == 45048 as struct)) {
        int2 = 6;
        int3 = 75;
        int4 = 10;
    };
    var string0 = `${string0}<br>- ${script17720(int0, int3, (int3 + int4), 0, int1)} to the target and up to ${script18561(int2)} within ${script17709(5)} of the target.`;
    if ((int2 > 2)) {
        string0 = `${string0}<br>- The target will be hit for an additional ${script17720(int0, 15, (15 + 5), 0, int1)} (${script17720(int0, 4, (4 + 2), 0, int1)} after <col=ffffff>${inttostring(2, 10)}</col> hits) for each enemy that cannot be found.`;
    } else {
        string0 = `${string0}<br>- The target will be hit for an additional ${script17720(int0, 15, (15 + 5), 0, int1)} for each enemy that cannot be found.`;
    };
    return string0;
}