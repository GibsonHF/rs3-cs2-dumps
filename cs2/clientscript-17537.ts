//
function script17537(int0: dbrow): [unknown_int, string] {
    var int1 = 1;
    var string0 = "This ritual can't be performed at this site.";
    var int2 = DB_GETFIELDCOUNT(int0, 962688);
    if ((int2 == 0)) {
        return [int1, string0];
    };
    var int3 = -1;
    var int4 = -1 as dbrow;
    while ((++int3 < int2)) {
        int4 = script17508(int0, int3);
        if ((varplayer_11130 == int4)) {
            int1 = 1;
        };
    };
    return [int1, string0];
}