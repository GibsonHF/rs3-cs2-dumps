//
function script19074(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = 0;
    while ((++int0 <= 8)) {
        if ((script19071(int0) == 0)) {
            int2 = script19076(int0);
            int4 = enum_getreverseindex(0, 0, 6429 as cs2enum, int2, 0);
            if ((int4 > int3)) {
                int3 = int4;
                int1 = int0;
            };
            int4 = 0;
        };
    };
    return int1;
}