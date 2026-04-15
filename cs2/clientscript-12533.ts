//
function script12533(int0: int, int1: component, int2: unknown_int, int3: unknown_int): void {
    var int4 = enum_getvalue(0, 26, 10383 as cs2enum, varplayer_6269);
    if ((int4 == -1 as cs2enum)) {
        IF_SETHIDE(true, int1);
        return;
    };
    var int5 = enum_getvalue(0, 74, int4, int0);
    if ((int5 == -1 as dbrow)) {
        IF_SETHIDE(true, int1);
        return;
    };
    if ((IF_FIND(int1) == 1)) {
        cc_setparam(5751, int5);
    };
    var string0 = dbrow_getfield(int5, 20496, 0);
    var string1 = dbrow_getfield(int5, 20528, 0);
    var string2 = dbrow_getfield(int5, 20544, 0);
    var string3 = strconcat(string0, strconcat("<br>", string1));
    if ((STRING_LENGTH(string2) > 0)) {
        string3 = strconcat(string3, strconcat("<br>", string2));
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string3, int1, -1), int1);
    var int6 = 115474466;
    var int7 = dbrow_getfield(int5, 20720, 0);
    var string4 = inttostring(int7, 10);
    IF_SETONMOUSEOVER(callback(script68, int6, string4), int1);
    IF_SETONMOUSELEAVE(callback(script68, int6, "---"), int1);
    script12536(int1, int2, int3);
    IF_SETONVARTRANSMIT(callback(script12535, int1, int2, int3, 6271, 1), int1);
    IF_SETONOP(callback(script12534, string0, string1, int7, int1), int3);
    return;
}