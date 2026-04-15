//
function script18229(int0: int, int1: unknown_int): [int, int] {
    var int2 = 47781 as struct;
    var int3 = script12869(int2);
    var int4 = enum_getvalue(0, 0, 6152 as cs2enum, int0);
    var int5 = 0;
    var int6 = 0;
    switch (int1) {
        case 1: {
            int6 = script12879(int2, int0);
            break;
        }
        case 2: {
            int6 = script18139(int0);
            break;
        }
        case 3: {
            int6 = script18140(int0);
            break;
        }
    };
    if (((int3 >= int4) && (int6 == 1))) {
        int5 = 1;
    } else if ((int3 < int4)) {
        int5 = 2;
    };
    return [int5, int4];
}