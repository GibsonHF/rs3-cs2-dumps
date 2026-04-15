//
function script8308(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int): void {
    var int9 = script10405(int0);
    if (((int9 == -1 as struct) || (struct_getparam(int9, 3519) == false))) {
        return;
    };
    var int10 = 0;
    var int11 = -1 as struct;
    var int12 = 0;
    var int13 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    var int14 = (int5 - int1);
    var int15 = (int6 - int2);
    var int16 = 0;
    var int17 = 0;
    var int18 = (int7 - int3);
    var int19 = (int8 - int4);
    var int20 = 0;
    var int21 = 0;
    while ((int12 < int13)) {
        int10 = enum_getvalue(0, 0, 7717 as cs2enum, int12);
        int11 = script10405(int10);
        if (((int11 != -1 as struct) && (struct_getparam(int11, 3520) == int0))) {
            [int16, int17, int20, int21] = script8717(int10);
            script8387((int16 + int14), (int17 + int15), (int20 + int18), (int21 + int19), int10);
        };
        int12 = (int12 + 1);
    };
    return;
}