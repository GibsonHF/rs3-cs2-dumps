//
function script19438(): void {
    script20486(comp(1302, 95), 17514 as dbrow, 0, 1, 2, `Complete all tier ${inttostring(varbitplayer_56570, 10)} tasks to unlock these rewards:`);
    stack(1253376);
    stack(varbitplayer_56570);
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    var int1 = 85327966;
    if ((((IF_FIND(int1) == 1) && (cc_getparam(5946) == varbitplayer_56570)) && (cc_getparam(5947) == varbitplayer_56571))) {
        return;
    };
    CC_DELETEALL(int1);
    if ((int0 == -1 as dbrow)) {
        script19450();
        return;
    };
    var int2 = DB_GETFIELDCOUNT(int0, 1253408);
    var int3 = DB_GETFIELDCOUNT(int0, 1253440);
    var int4 = DB_GETFIELDCOUNT(int0, 1253424);
    var int5 = ((int2 + int3) + int4);
    if ((int5 == 0)) {
        script19450();
        return;
    };
    if ((int5 == 1)) {
        IF_SETSIZE(0, 0, 1, 1, comp(1302, 86));
        IF_SETHIDE(true, int1);
    } else {
        IF_SETSIZE(40, 0, 1, 1, comp(1302, 86));
        IF_SETHIDE(false, int1);
    };
    var int6 = ((40 * int5) + ((int5 - 1) * 4));
    IF_SETSIZE(40, int6, 0, 0, int1);
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as graphic;
    var int10 = -1 as graphic;
    var string0 = "";
    var int11 = int2;
    var int12 = 0;
    var int13 = 0;
    while ((int7 < int11)) {
        stack(dbrow_getfield(int0, 1253408, int7));
        [int9, int10, int12, int13, string0] = stack();
        script19439(int1, int8, int9, int10, -1 as struct, -1 as dbrow, string0, int12, int13);
        int8 = (int8 + 1);
        int7 = (int7 + 1);
    };
    int7 = 0;
    int11 = int3;
    var int14 = -1 as struct;
    while ((int7 < int11)) {
        int9 = dbrow_getfield(int0, 1253441, int7);
        int14 = script19338(int0, int7, varbitplayer_56614);
        script19439(int1, int8, int9, -1 as graphic, int14, -1 as dbrow, "", -1, -1);
        int8 = (int8 + 1);
        int7 = (int7 + 1);
    };
    int7 = 0;
    int11 = int4;
    var int15 = -1 as dbrow;
    while ((int7 < int11)) {
        int9 = dbrow_getfield(int0, 1253425, int7);
        int15 = script19339(int0, int7, varbitplayer_56614);
        script19439(int1, int8, int9, -1 as graphic, -1 as struct, int15, "", -1, -1);
        int8 = (int8 + 1);
        int7 = (int7 + 1);
    };
    IF_SETPARAM_INT(5946, varbitplayer_56570, int1);
    IF_SETPARAM_INT(5947, varbitplayer_56571, int1);
    return;
}