//
function script13537(int0: int): void {
    if (((varbitplayer_38842 == 0) && ((varbitplayer_27169 == 1) || (varbitplayer_60441 == 1)))) {
        return;
    };
    var int1 = script8552(int0);
    var int2 = IF_GETPARENTLAYER(int1);
    var int3 = script13539(int0);
    var int4 = -1;
    var int5 = 20;
    if ((varbitplayer_38842 == 1)) {
        if ((int0 != 18)) {
            return;
        };
        IF_SETPOSITION(4, 0, 0, 0, int1);
        IF_SETSIZE(int5, 0, 1, 1, int1);
    } else {
        int5 = 0;
        if ((((varbitplayer_36975 == 1) || (script6578(int0) == 1)) || ((int3 != comp(-1, 65535)) && (IF_GETWIDTH(int3) < IF_GETWIDTH(IF_GETPARENTLAYER(int3)))))) {
            IF_SETSIZE(int5, 55, 1, 1, int2);
        } else {
            IF_SETSIZE(int5, 55, 1, 1, int2);
        };
        IF_SETPOSITION(0, 29, 0, 2, int2);
    };
    var int6 = enum_getvalue(0, 0, 1648 as cs2enum, script3873());
    var int7 = script8503(int1, 0, int6);
    script8504(int0, int7);
    return;
}