//
function script16706(int0: component, int1: obj, int2: int, int3: int, int4: int, int5: int): void {
    var int6 = -1;
    var int7 = -1 as graphic;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    if (((int5 == 8) || (int5 == 10))) {
        int7 = script8948(int4);
    } else {
        int7 = script8948(int4);
    };
    CC_DELETEALL(int0);
    while ((int6++ < int3)) {
        int10 = ((int3 - int6) - 1);
        int8 = enum_getvalue(0, 0, 13144 as cs2enum, (int10 * 2));
        int9 = enum_getvalue(0, 0, 13144 as cs2enum, ((int10 * 2) + 1));
        int11 = script16707(int0, int4, int7, (int6 + int12), int8, int9, 1, 1, 82, 100, 0, 0, 0);
        if ((int11 <= 0)) {
            script7917(int0, (int6 + int12), int8, int9, 1, 1, 82, 100, 0, 0, int7, false, false, false, 0);
        } else {
            int12 = (int12 + int11);
            int11 = 0;
        };
    };
    script9802(int0, (int6 + int12), 1, 0, 1, 1, 36, 32, 0, 0, int1, int2, 0, 0);
    return;
}