//
function script13032(): struct {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(11872 as cs2enum);
    var int2 = -1 as struct;
    var int3 = -1;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 73, 11872 as cs2enum, int0);
        int3 = script13033(int2);
        if (((int3 == 1) || (int3 == 2))) {
            return int2;
        };
        int0 = (int0 + 1);
    };
    return -1 as struct;
}