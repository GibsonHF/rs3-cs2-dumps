//
function script12102(int0: obj, int1: obj, int2: int, int3: int, string0: string): string {
    if (((int1 == -1 as obj) || (int3 <= 0))) {
        return string0;
    };
    var string1 = "";
    var int4 = -1 as graphic;
    var int5 = -1 as obj;
    [string1, int4, int5] = script12103(int1, int2);
    if ((STRING_LENGTH(string1) == 0)) {
        return string0;
    };
    var [int1, int2, int3] = script2734(int0, int1, int2, int3);
    if ((int3 > 1)) {
        return `${string0}<br><col=ffffff>${TOSTRING_LOCALISED(int3, 1)}</col> x <col=ffffff>${string1}</col>`;
    };
    return `${string0}<br><col=ffffff>${string1}</col>`;
}