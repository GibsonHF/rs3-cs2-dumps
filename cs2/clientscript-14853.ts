//
function script14853(int0: int, int1: int): void {
    var int2 = script19772(varplayer_12086, int0);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    [int3, int4] = script14621(int0);
    var int5 = false;
    if ((int2 == -1 as dbrow)) {
        int5 = true;
    };
    script14855(int0);
    script13991(int3, int4, 28547 as struct, int5);
    if ((IF_FIND(int4) == 1)) {
        CC_SETOPBASE(dbrow_getfield(int2, 385040, 0));
        CC_SETOPCURSOR(1, 46);
        if ((int2 != -1 as dbrow)) {
            CC_SETOP(1, "Select");
            CC_SETOP(2, "Unharness");
        } else {
            CC_SETOP(1, "");
            CC_SETOP(2, "");
        };
    };
    return;
}