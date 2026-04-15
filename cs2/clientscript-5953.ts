//
function script5953(int0: unknown_int, int1: struct): unknown_int {
    if (((int0 == -1) || (int1 == -1 as struct))) {
        return -1;
    };
    var int2 = enum_getvalue(0, 26, 1553 as cs2enum, varbitplayer_9072);
    if ((int2 == -1 as cs2enum)) {
        script12478(`Null $slayer_master_table for %slayer_master ${inttostring(varbitplayer_9072, 10)} in enum slayer_master_enum`);
        return -1;
    };
    if ((enum_hasoutput(73, int2, int1) == 0)) {
        script12478(`Slayer struct for ${struct_getparam(int1, 463)} is not on enum for %slayer_master ${inttostring(varbitplayer_9072, 10)}`);
        return -1;
    };
    return enum_getreverseindex(73, 0, int2, int1, 0);
}