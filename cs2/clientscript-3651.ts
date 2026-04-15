//
function script3651(int0: dbrow): void {
    IF_SETTEXT(dbrow_getfield(int0, 299024, 0), comp(634, 169));
    var int1 = dbrow_getfield(int0, 299344, 0);
    if ((dbrow_getfield(int0, 299472, 0) == 1)) {
        int1 = (int1 - 1);
    };
    IF_SETTEXT(inttostring(int1, 10), comp(634, 39));
    IF_SETONOP(callback(script3642, (int1 - 1)), comp(634, 37));
    IF_SETTEXT(inttostring((dbrow_getfield(int0, 299344, 0) / 2), 10), 41549866);
    IF_SETONOP(callback(script3642, ((int1 / 2) - 1)), 41549864);
    CC_DELETEALL(41549847);
    CC_DELETEALL(41549848);
    CC_DELETEALL(41549843);
    CC_DELETEALL(41549844);
    CC_DELETEALL(41549845);
    CC_DELETEALL(41549846);
    var int2 = varplayer_9062;
    if ((AND(int2, 170) == 0)) {
        int2 = (int2 * 3);
    };
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    var int12 = -1;
    var int13 = DB_GETFIELDCOUNT(int0, 299328);
    var int14 = dbrow_getfield(int0, 299472, 0);
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = DB_GETFIELDCOUNT(int0, 299232);
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = true;
    var int24 = 0;
    [int17, int21, int22] = dbrow_getfield(int0, 299216, 0);
    while ((int16 < int18)) {
        [int17, int19, int20] = dbrow_getfield(int0, 299232, int16);
        if (((int14 == 1) && ((int16 + 1) == int18))) {
            int15 = 1;
        };
        int24 = script3658(int16, int19, int20, comp(634, 23), comp(634, 24), comp(634, 19), comp(634, 20), comp(634, 21), comp(634, 22), int23, 1, false, int24, int15);
        int16 = (int16 + 1);
    };
    IF_SETSCROLLPOS(0, varclient_6741, comp(634, 10));
    script3653(int0);
    script3620(varplayer_9078, 0);
    script15597(comp(634, 27));
    return;
}