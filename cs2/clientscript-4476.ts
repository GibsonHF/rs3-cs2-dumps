//
function script4476(): void {
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var string0 = "";
    var string1 = "";
    var int4 = -1;
    while ((++int4 < 5)) {
        [int0, int1, int2, int3] = script4477(int4);
        IF_SETOBJECT_NONUM(enum_getvalue(0, 33, 13914 as cs2enum, (8 + int4)), 1, int2);
        IF_SETONMOUSEREPEAT(callback(script3876, OC_NAME(enum_getvalue(0, 33, 13914 as cs2enum, (8 + int4))), int2, -1), int2);
        if ((varbitplayer_40686 > (1 + int4))) {
            IF_SETTRANS(0, int2);
            script13991(int0, int1, 28556 as struct, false);
            [string0, string1] = script4478(int4, 0);
        } else {
            IF_SETTRANS(120, int2);
            script13991(int0, int1, 28556 as struct, true);
            [string0, string1] = script4478(int4, 1);
        };
        IF_SETTEXT(string0, int3);
        if ((STRING_LENGTH(string1) > 0)) {
            IF_SETONMOUSEREPEAT(callback(script3876, string1, int3, -1), int3);
        };
    };
    return;
}