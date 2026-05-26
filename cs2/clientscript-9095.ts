//
function script9095(int0: number, int1: number): number {
    var int2 = struct_getparam(int0, 4850);
    if ((struct_getparam(int0, 1447) == true)) {
        int2 = script5352(int0, int2);
    };
    if ((int1 == 1)) {
        if ((struct_getparam(int0, 6613) != -1)) {
            int2 = struct_getparam(int0, 6613);
        } else {
            int2 = script12719(int0, int2);
        };
    };
    if (((script5353(varplayer_5148) == 1) && (script1282() == 5))) {
        int2 = ADDPERCENT(int2, -7);
    };
    return int2;
}