//
function script19865(): int {
    var int0 = 0;
    var int1 = INV_SIZE(94 as inv);
    var int2 = -1 as obj;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    while ((++int5 < int1)) {
        int2 = INV_GETOBJ(94 as inv, int5);
        if ((int2 != -1 as obj)) {
            int3 = script7241(int2);
            if ((int3 == 7)) {
                int4 = script17172(int2, int3);
                if ((int4 == 2)) {
                    int0 = (int0 + item_getparam(int2, 965));
                };
            };
        };
    };
    return MIN(200, SCALE(int0, 1000, 125));
}