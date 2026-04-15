//
function script2738(int0: struct, int1: int, int2: int): void {
    var int3 = 1;
    var int4 = 1;
    var int5 = enum_getvalue(73, 26, 15727 as cs2enum, int0);
    var int6 = enum_getvalue(0, 26, int5, 1);
    var int7 = -1 as cs2enum;
    var int8 = struct_getparam(int0, 3850);
    int3 = 1;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 1;
    var int13 = 4;
    var int14 = 0;
    while ((int3 <= int8)) {
        int9 = ((int3 - 1) * int13);
        int10 = (((int3 - 1) * int13) + (int13 - 1));
        if ((int1 == 0)) {
            int11 = script2373(int3, int0);
        } else {
            int11 = GETBIT_RANGE(int1, int9, int10);
        };
        int7 = enum_getvalue(0, 26, int5, (int11 + int12));
        CC_NPC_SETCUSTOMBODYMODEL(int4, enum_getvalue(0, 31, int7, int3));
        if ((int3 == 7)) {
            int14 = int11;
        };
        int4 = (int4 + 1);
        int3 = (int3 + 1);
    };
    script2739(int0, int2);
    if ((int0 == 6865 as struct)) {
        switch (int14) {
            case 0: {
                varclient_2693 = 32872 as seq;
                break;
            }
            case 1: {
                varclient_2693 = 32883 as seq;
                break;
            }
            case 2: {
                varclient_2693 = 32883 as seq;
                break;
            }
            case 4: {
                varclient_2693 = 33392 as seq;
                CC_NPC_SETCUSTOMBODYMODEL(int4, 109832 as model);
                break;
            }
            case 5: {
                varclient_2693 = 33392 as seq;
                CC_NPC_SETCUSTOMBODYMODEL(int4, 109772 as model);
                break;
            }
        };
    };
    return;
}