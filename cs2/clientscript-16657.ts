//
function script16657(int0: int, int1: int, int2: int, int3: int, int4: unknown_int, int5: int, int6: npc, int7: vorbis, int8: boolean, int9: boolean, string0: string): void {
    var string1 = "null";
    var string2 = "null";
    var int10 = -1 as seq;
    if ((int0 == 0)) {
        var int1 = 0;
        var int2 = 0;
        var int5 = DB_GETFIELDCOUNT(varplayer_10473, 774192);
    };
    if ((int2 == 0)) {
        stack(dbrow_getfield(varplayer_10473, 774192, int1));
        var [int10, string2, string1, int6, string0, int7, int3, int8, int9] = stack();
    };
    if ((int2 < int3)) {
        if ((int2 == 0)) {
            script16658(int10, int6, string2, string1, string0, int7, int8);
        } else if ((int2 < 60)) {
            if ((int8 == true)) {
                IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(94, 5)) - 5)), comp(94, 5));
            };
        } else if (((int2 >= (int3 - 60)) && (int9 == true))) {
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(94, 5)) + 5)), comp(94, 5));
        };
        int2 = (int2 + 1);
    } else {
        int1 = (int1 + 1);
        int2 = 0;
    };
    if (((int1 < int5) && (varplayer_10473 != -1 as dbrow))) {
        IF_SETONTIMER(callback(script16657, (int0 + 1), int1, int2, int3, int4, int5, int6, string0, int7, int8, int9), 64356352);
    };
    return;
}