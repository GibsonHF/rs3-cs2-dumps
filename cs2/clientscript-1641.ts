//
function script1641(): int {
    var int0 = 0;
    var int1 = -1 as struct;
    var int2 = -1 as struct;
    var int3 = 1;
    var int4 = ENUM_GETOUTPUTCOUNT(10156 as cs2enum);
    while ((--int4 >= 0)) {
        int1 = enum_getvalue(0, 73, 10156 as cs2enum, int4);
        if ((int1 != -1 as struct)) {
            int2 = struct_getparam(int1, 4419);
            if ((int2 == -1 as struct)) {
                int2 = int1;
            };
            if ((script6488(int2) != 1)) {
                int0 = (int0 + 1);
            };
        };
    };
    return int0;
}