//
function script4694(int0: int, int1: int, string0: string, string1: string): string {
    if ((int0 == -1)) {
        return string0;
    };
    var int2 = 14725 as cs2enum;
    if ((int1 == 1)) {
        int2 = 14724 as cs2enum;
    };
    var string2 = enum_getvalue(0, 36, int2, int0);
    var int3 = STRING_INDEXOF_STRING(string2, "name", 0);
    if ((int3 == -1)) {
        return string1;
    };
    var string3 = SUBSTRING(string2, 0, (int3 - 1));
    var int4 = STRING_LENGTH(string2);
    string3 = `${string3}${string0}`;
    if (((int3 + 5) < int4)) {
        string3 = `${string3}${SUBSTRING(string2, (int3 + 5), int4)}`;
    };
    return string3;
}