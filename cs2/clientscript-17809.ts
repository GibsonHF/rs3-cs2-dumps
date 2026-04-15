//
function script17809(int0: dbrow, int1: int, int2: component): int {
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(int0, 962800);
    var int7 = 0;
    var int8 = -1;
    while ((++int8 < int6)) {
        [int3, int4, int5] = script17516(int0, int8);
        if ((int3 == varplayer_11181)) {
            int7 = (int7 + script17812(int2, (int1 + int7), 2100 as dbrow, -1 as graphic, int4, `${inttostring(int5, 10)} ${OC_NAME(int4)}`, 2, 30593 as graphic));
        };
    };
    return int7;
}