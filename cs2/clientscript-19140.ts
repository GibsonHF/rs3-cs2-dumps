//
function script19140(int0: int, int1: struct): int {
    var int2 = script19147(int1);
    var int3 = script19148(int1);
    var int4 = (int0 + 1);
    while ((int4 <= int2)) {
        if ((script16731(int3, int4) == 1)) {
            return int4;
        };
        int4 = (int4 + 1);
    };
    return -1;
}