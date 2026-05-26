//
function script17822(int0: number, int1: number, int2: number, int3: number): void {
    if (((varbitplayer_51627 == 1) || (script7851() == 1))) {
        script1296("Please claim your prize before continuing.");
        return;
    };
    if ((int2 == -1 as dbrow)) {
        return;
    };
    var int4 = -1;
    script17823(0);
    var int5 = DB_GETFIELDCOUNT(int2, 413696);
    var int6 = 0;
    var int7 = -1 as obj;
    while ((++int4 < int5)) {
        [int7, int6, int6, int6, int6, int6, int6, int6] = dbrow_getfield(int2, 413696, int4);
        if ((int0 == int7)) {
            script17024(int3, int4, 6530, 6489);
        };
    };
    return;
}