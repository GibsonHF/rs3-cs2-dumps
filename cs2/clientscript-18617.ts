//
function script18617(int0: struct, int1: unknown_int, string0: string): string {
    var int2 = 420;
    var int3 = 80;
    var int4 = 1;
    if ((script9681(3) == 1)) {
        int2 = 120;
        int3 = 30;
        int4 = 4;
    };
    if ((int4 > 1)) {
        var string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)} with each hit.`;
        string0 = `${string0}<br>- <col=ffffff>${inttostring(int4, 10)}</col> hits.`;
    } else {
        string0 = `${string0}<br>- ${script17720(int0, int2, (int2 + int3), 0, int1)}.`;
    };
    return string0;
}