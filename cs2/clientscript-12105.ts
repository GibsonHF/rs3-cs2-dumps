//
function script12105(int0: number, int1: number, int2: number, string0: string, string1: string): [string, string] {
    if (((int0 == -1) || (int2 <= 0))) {
        return [string0, string1];
    };
    var string2 = "";
    var int3 = -1;
    var int4 = -1;
    [string2, int3, int4] = script12103(int0, int1);
    if ((STRING_LENGTH(string2) == 0)) {
        return [string0, string1];
    };
    if ((int2 > 1)) {
        return [`${string0}${string1}${TOSTRING_LOCALISED(int2, 1)} x ${string2}`, ", "];
    };
    return [`${string0}${string1}${string2}`, ", "];
}