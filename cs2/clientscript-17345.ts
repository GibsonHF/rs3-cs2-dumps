//
function script17345(): int {
    var int0 = script17344();
    var int1 = script17343();
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = 1;
    var int6 = -1 as var_reference;
    var int7 = 1;
    while (((int2 < int0) && (++int3 <= int1))) {
        if ((script17348(int3) == 1)) {
            int4 = script17347(int3);
            int5 = struct_getparam(int4, 8775);
            int6 = struct_getparam(int4, 9024);
            if ((int6 != -1 as var_reference)) {
                int7 = WORLDMAP_GETDISPLAYCOORD(int6);
            } else {
                int7 = 1;
            };
            int2 = MIN(int0, (int2 + (int7 * int5)));
        };
    };
    return int2;
}