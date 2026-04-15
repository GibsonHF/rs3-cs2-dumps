//
function script13262(int0: obj): unknown_int {
    var int1 = -1 as struct;
    var int2 = -1;
    var int3 = -1 as dbrow;
    var string0 = "";
    if ((int0 != -1 as obj)) {
        int1 = item_getparam(int0, 4414);
    };
    if ((int1 != -1 as struct)) {
        string0 = struct_getparam(int1, 2533);
        int2 = script13108(int1, 1);
        int3 = script15768(int2);
    };
    var int4 = 35731 as struct;
    var int5 = struct_getparam(int4, 6397);
    var int6 = struct_getparam(int4, 6398);
    var int7 = struct_getparam(int4, 6400);
    var int8 = struct_getparam(int4, 6401);
    var int9 = struct_getparam(int4, 6399);
    var int10 = -1;
    var int11 = -1 as struct;
    var int12 = -1;
    if ((((int6 != comp(-1, 65535)) && (int5 != comp(-1, 65535))) && (IF_FIND(int5) == 1))) {
        if ((int2 == -1)) {
            CC_SETHIDE(true);
        } else {
            CC_SETHIDE(false);
            if ((cc_getparam(6361) != int2)) {
                cc_setparam(2531, struct_getparam(int1, 2531));
                cc_setparam(2532, struct_getparam(int1, 2532));
                cc_setparam(2546, struct_getparam(int1, 2546));
                cc_setparam(4680, int0);
                cc_setparam(6361, int2);
                cc_setparam(6360, -1);
                cc_setparam(5945, -1);
                if ((cc_getparam(2531) == 2)) {
                    int10 = cc_getparam(2532);
                };
                [int11, int11, int12] = script13178(cc_getparam(8968));
                script33(int7, int12);
                if ((int9 != comp(-1, 65535))) {
                    IF_SETHIDE(true, int9);
                };
                IF_SETHIDE(true, int6);
                IF_SETMODEL(-1 as model, int6);
                script9531(int8, 255);
                script6568(int8);
                script13146(int6, int10, int3);
            };
            return 1;
        };
    };
    return 0;
}