//
function script3653(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        var int0 = script3609();
    };
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 299232);
    var int4 = 0;
    var int5 = 0;
    var int6 = true;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1 as obj;
    var int14 = -1 as struct;
    var int15 = DB_GETFIELDCOUNT(int0, 299328);
    [int2, int4, int5] = dbrow_getfield(int0, 299216, 0);
    while ((int1 < int3)) {
        if ((int1 < varplayer_9078)) {
            int6 = false;
        } else {
            int6 = true;
        };
        int7 = 1;
        int11 = script3599(int1);
        [int9, int10, int13, int14, int12] = dbrow_getfield(int0, 299328, int8);
        while (((int8 < int15) && (int9 < int1))) {
            int8 = (int8 + 1);
            [int9, int10, int13, int14, int12] = dbrow_getfield(int0, 299328, int8);
        };
        while (((int8 < int15) && (int9 == int1))) {
            if ((((int7 == 1) && (AND(varplayer_9062, int10) != 0)) && (AND(int10, int11) == 0))) {
                int7 = 0;
            };
            if ((++int8 < int15)) {
                [int9, int10, int13, int14, int12] = dbrow_getfield(int0, 299328, int8);
            };
        };
        script3657(int1, 41549847, comp(634, 24), comp(634, 19), comp(634, 20), comp(634, 21), comp(634, 22), int6, int7, false);
        int1 = (int1 + 1);
    };
    IF_SETSCROLLPOS(0, varclient_6741, comp(634, 10));
    script3620(varplayer_9078, 0);
    return;
}