//
function script1854(int0: dbrow, int1: int): void {
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int0, 1363968);
    var int4 = 0;
    while ((int2 < int3)) {
        int4 = dbrow_getfield(int0, 1363969, int2);
        if ((int1 < int4)) {
            varbitplayer_59849 = int2;
            varbitplayer_59850 = int4;
            return;
        };
        int2 = (int2 + 1);
    };
    varbitplayer_59849 = int2;
    varbitplayer_59850 = 1048575;
    return;
}