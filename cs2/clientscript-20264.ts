//
function script20264(int0: dbrow, int1: dbrow): void {
    var int2 = DB_GETFIELDCOUNT(int0, 1343504);
    var int3 = -1;
    var int4 = MODULO((varbitplayer_58408 + 1), int2);
    if ((varbitplayer_58408 == 0)) {
        int3 = (int2 - 1);
    } else {
        int3 = (varbitplayer_58408 - 1);
    };
    var int5 = varbitplayer_58407;
    var int6 = dbrow_getfield(int0, 1343504, int4);
    var int7 = dbrow_getfield(int0, 1343504, int3);
    var int8 = (((140 + 4) * 3) - 4);
    var int9 = int2;
    CC_DELETEALL(comp(1443, 17));
    IF_SETSIZE(int8, 76, 0, 0, comp(1443, 17));
    script15938(comp(1443, 17), 200, 0, 0, 0, 1, 1, 0, 0, 1, 1);
    if (((int7 != -1 as dbrow) && (int7 != int6))) {
        script15937(int5, int3, 0, 0, 0, 0, 0, 0, 1, 1);
        CC_SENDTOFRONT();
        int9 = script20257(int0, int5, int3, int9, 0, true, false, 2);
    };
    script15938(comp(1443, 17), 200, 1, 0, 0, 1, 1, 0, 0, 1, 1);
    script15937(int5, varbitplayer_58408, 0, 0, 0, 0, 0, 0, 1, 1);
    CC_SENDTOFRONT();
    int9 = script20257(int0, int5, varbitplayer_58408, int9, 0, false, true, 1);
    script15938(comp(1443, 17), 200, 2, 0, 0, 1, 1, 0, 0, 1, 1);
    if (((int6 != -1 as dbrow) && (int6 != int1))) {
        script15937(int5, int4, 0, 0, 0, 0, 0, 0, 1, 1);
        CC_SENDTOFRONT();
        int9 = script20257(int0, int5, int4, int9, 0, true, false, 3);
    };
    script15938(comp(1443, 36), 200, 1, 0, 0, 1, 1, 0, 0, 1, 1);
    script20257(int0, int5, varbitplayer_58408, 0, 0, false, true, 4);
    return;
}