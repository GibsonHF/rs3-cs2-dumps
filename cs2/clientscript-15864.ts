//
function script15864(int0: int, int1: cs2enum, int2: int): unknown_int {
    var int3 = script15882(int0);
    if ((int3 == -1 as struct)) {
        return 0;
    };
    var string0 = enum_getvalue(0, 36, int1, int2);
    if (((strcmp(LOWERCASE(string0), "off") == 0) && (TESTBIT(struct_getparam(int3, 6652), script383(varplayer_9902)) == 1))) {
        return 0;
    };
    return 1;
}