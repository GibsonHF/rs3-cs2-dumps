//
function script13185(int0: struct): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = enum_getvalue(0, 73, 8601 as cs2enum, ++int3);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = -1 as dbrow;
    while ((int4 != -1 as struct)) {
        int5 = struct_getparam(int4, 6397);
        if (((int5 != comp(-1, 65535)) && (IF_FIND(int5) == 1))) {
            int2 = cc_getparam(6361);
            if ((int2 < 0)) {
                int4 = -1 as struct;
            } else {
                int8 = script15768(int2);
                if (((int8 != -1 as dbrow) && (script15770(int8) == int0))) {
                    cc_setparam(6360, -1);
                    cc_setparam(5945, -1);
                    int6 = struct_getparam(int4, 6398);
                    if ((int6 != comp(-1, 65535))) {
                        IF_SETHIDE(true, int6);
                        IF_SETMODEL(-1 as model, int6);
                        int7 = struct_getparam(int4, 6401);
                        script9531(int7, 255);
                        script6568(int7);
                        script13146(int6, script13186(int0), int8);
                    };
                };
                int4 = enum_getvalue(0, 73, 8601 as cs2enum, ++int3);
            };
        } else {
            int4 = -1 as struct;
        };
    };
    return;
}