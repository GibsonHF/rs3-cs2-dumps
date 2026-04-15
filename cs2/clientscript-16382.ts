//
function script16382(int0: dbrow, int1: int): int {
    var int2 = script16380(int0);
    var int3 = 0;
    var int4 = 0;
    while ((int3 < int2)) {
        if ((script16384(int0, int3) == 0)) {
            int4 = (int4 + 1);
        };
        int3 = (int3 + 1);
    };
    return int4;
}