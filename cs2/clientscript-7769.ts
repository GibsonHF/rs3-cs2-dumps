//
function script7769(): struct {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(15406 as cs2enum);
    var int2 = -1 as struct;
    var int3 = 0;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 73, 15406 as cs2enum, int0);
        int3 = script7779(int2);
        switch (int3) {
            case 1:
            case 2:
            case 3:
            case 4: {
                return int2;
            }
        };
        int0 = (int0 + 1);
    };
    return -1 as struct;
}