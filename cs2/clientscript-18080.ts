//
function script18080(int0: dbrow, int1: dbrow, int2: int, int3: int): int {
    var int4 = 0;
    var int5 = -1 as dbrow;
    if ((DB_GETFIELDCOUNT(int0, 1020000) > 0)) {
        int5 = dbrow_getfield(int0, 1020000, 0);
    };
    var int6 = 10;
    var int7 = 0;
    var int8 = comp(1226, 32);
    var int9 = comp(1226, 31);
    var int10 = comp(1226, 29);
    if ((IF_FIND(int9) == 1)) {
        script10485(4, int4, 10, int2, 0, 0, 0, 30, 1, 0, 7982 as dbrow, "Mission Chain");
        CC_SETCOLOUR(14734449);
        var int2 = (int2 + 30);
    } else {
        script12478("Cannot find title parent layer when setting up the chain side panel.");
    };
    var int11 = 0;
    if ((IF_FIND(int8) == 1)) {
        CC_CREATECHILD(0, int4, 4);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        int4 = (int4 + 1);
        int11 = (int11 + 1);
        script7862(4, int4, int6, int2, 0, 0, 70, 70, 0, 0, 7967 as dbrow, script17839(dbrow_getfield(int0, 1020048, 0)), true, 1, true, true);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script18078, int4, int0, int0, -2147483643, int8));
        varclient_7300 = int8;
        varclient_7301 = CC_GETID();
        int4 = (int4 + 1);
        int6 = (int6 + 75);
        while ((int5 != -1 as dbrow)) {
            script7918(4, int4, (int6 - 15), (int2 + 30), 0, 0, 30, 10, 0, 0, 3817 as graphic);
            CC_SETCOLOUR(16777215);
            CC_SENDTOBACK();
            int4 = (int4 + 1);
            int11 = (int11 + 1);
            script7862(4, int4, int6, int2, 0, 0, 70, 70, 0, 0, 7967 as dbrow, script17839(dbrow_getfield(int5, 1020048, 0)), true, 1, true, false);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script18078, int4, int0, int5, -2147483643, int8));
            int4 = (int4 + 1);
            int6 = (int6 + 75);
            if ((DB_GETFIELDCOUNT(int5, 1020000) > 0)) {
                int5 = dbrow_getfield(int5, 1020000, 0);
            } else {
                int5 = -1 as dbrow;
            };
            if (((++int7 > 10) && (int5 != -1 as dbrow))) {
                script12478("Chain is too long, possible recurrsive loop. Breaking early.");
                int5 = -1 as dbrow;
            };
        };
        int2 = (int2 + 75);
        if ((int6 > IF_GETWIDTH(int8))) {
            IF_SETSCROLLPOS(int3, 0, int8);
            IF_SETSCROLLSIZE((int6 + 20), int2, int8);
            IF_SETPOSITION(0, int2, 0, 0, int10);
            script11147(int10, int8);
            int2 = (int2 + 15);
            IF_SETSIZE(IF_GETWIDTH(int8), int2, 0, 0, int8);
        } else {
            IF_SETSIZE(IF_GETWIDTH(int8), int2, 0, 0, int8);
            IF_SETSCROLLPOS(int3, 0, int8);
            IF_SETSCROLLSIZE(0, int2, int8);
            CC_DELETEALL(int10);
            int2 = (int2 + 10);
        };
    } else {
        script12478("Cannot find parent layer when trying to populate BP3 missions chain panel.");
    };
    return int2;
}