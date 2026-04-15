//
function script16050(int0: cs2enum, int1: cs2enum, int2: int): string {
    if (((int0 == -1 as cs2enum) || (int1 == -1 as cs2enum))) {
        return "null";
    };
    var string0 = enum_getvalue(0, 36, int1, int2);
    if ((STRING_LENGTH(string0) == 0)) {
        return "null";
    };
    if ((int2 != 0)) {
        string0 = `, ${string0}`;
    };
    return string0;
}