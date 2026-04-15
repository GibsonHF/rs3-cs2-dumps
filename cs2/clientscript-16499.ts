//
function script16499(int0: dbrow, int1: int): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 245);
    IF_SETHIDE(false, comp(959, 33));
    var int2 = DB_GETFIELDCOUNT(5907 as dbrow, 602112);
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = -1;
    while ((++int5 < int2)) {
        [int4, int3, int4] = dbrow_getfield(5907 as dbrow, 602112, int5);
        if ((int3 == int0)) {
            script17024(int5, int1, 5907 as dbrow, 5883 as dbrow);
            return;
        };
    };
    return;
}