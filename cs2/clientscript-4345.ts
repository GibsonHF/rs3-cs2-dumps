//[proc,clan_keyword_get]
function script4345(int0: int, int1: int): string {
    var int2 = -1 as cs2enum;
    if (((int0 > 0) && (int1 > 0))) {
        int2 = enum_getvalue(0, 26, 3703 as cs2enum, int0);
        if ((int2 != -1 as cs2enum)) {
            return enum_getvalue(0, 36, int2, int1);
        };
    };
    return "";
}