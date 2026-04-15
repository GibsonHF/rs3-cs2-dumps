//
function script2534(int0: obj, int1: obj, int2: unknown_int, int3: unknown_int): int {
    if ((OC_UNCERT(int1) != -1 as obj)) {
        var int1 = OC_UNCERT(int1);
    };
    var int4 = script2533(int0, int1, int2, int3);
    var int5 = 0;
    if ((int4 > 0)) {
        int5 = (int4 - script18309(int1));
    };
    return int5;
}