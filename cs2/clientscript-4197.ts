//
function script4197(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = 1;
    var int2 = ENUM_GETOUTPUTCOUNT(1667 as cs2enum);
    var int3 = -1 as dbrow;
    var int4 = -1 as dbrow;
    var int5 = -1 as inv;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = comp(90, 162);
    var int15 = comp(90, 163);
    var int16 = comp(90, 176);
    var int17 = comp(90, 177);
    var int18 = dbrow_getfield(int0, 159808, 0);
    define_array[74](int18);
    var string0 = "Assign";
    CC_DELETEALL(int14);
    CC_DELETEALL(int15);
    CC_DELETEALL(int16);
    CC_DELETEALL(int17);
    while ((int1 <= int2)) {
        int3 = enum_getvalue(0, 74, 1667 as cs2enum, int1);
        if ((int3 != -1 as dbrow)) {
            if ((script2641(int1) == 1)) {
                if ((script2642(int0, int3) == 1)) {
                    [int5, int6] = script2645(int1);
                    int4 = script2646(int5);
                    if ((int4 == int0)) {
                        pop_array((int6 - 1), int3);
                        int7 = script4198(int15, int7);
                    } else {
                        [int10, int11] = script4200(int8, int14);
                        if (((int4 != -1 as dbrow) && (int4 != int0))) {
                            int7 = script4199(int10, int11, int14, int15, int7, int3, 0, string0, 1);
                        } else {
                            int7 = script4199(int10, int11, int14, int15, int7, int3, 1, string0, 1);
                        };
                        int8 = (int8 + 1);
                    };
                } else {
                    int7 = script4198(int15, int7);
                };
            } else {
                int7 = script4198(int15, int7);
            };
        };
        int1 = (int1 + 1);
    };
    int1 = 0;
    while ((int1 < int18)) {
        if ((push_array(int1) != -1)) {
            [int10, int11] = script4200(int9, int16);
            int9 = script4199(int10, int11, int16, int17, int9, push_array(int1), 1, "Unassign", 0);
        };
        int1 = (int1 + 1);
    };
    return;
}