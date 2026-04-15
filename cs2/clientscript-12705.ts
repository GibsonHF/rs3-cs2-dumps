//
function script12705(int0: int): [int, int, unknown_int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    while ((int0 > int2)) {
        int3 = int2;
        int2 = (int2 + enum_getvalue(0, 0, 11607 as cs2enum, int1));
        int1 = (int1 + 1);
    };
    var int5 = 0;
    if ((int3 == 0)) {
        int5 = int0;
        if ((int0 == int2)) {
            int4 = 1;
        };
    } else if ((int0 == int2)) {
        int5 = (int0 - int3);
        int4 = 1;
    } else {
        int5 = MODULO(int0, int3);
    };
    return [int1, int5, int4];
}