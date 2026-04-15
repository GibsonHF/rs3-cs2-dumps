//
function script12105(int0: obj, int1: int, int2: int, string0: string, string1: string): [string, string] {
    if (((int0 == -1 as obj) || (int2 <= 0))) {
        return [string0, string1];
    };
    var string2 = "";
    var int3 = -1 as graphic;
    var int4 = -1 as obj;
    [string2, int3, int4] = script12103(int0, int1);
    if ((STRING_LENGTH(string2) == 0)) {
        return [string0, string1];
    };
    if ((int2 > 1)) {
        return [`${string0}${string1}${TOSTRING_LOCALISED(int2, 1)} x ${string2}`, ", "];
    };
    return [`${string0}${string1}${string2}`, ", "];
}