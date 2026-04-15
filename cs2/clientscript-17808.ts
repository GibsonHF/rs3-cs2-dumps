//
function script17808(int0: dbrow, int1: int, int2: component): int {
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = DB_GETFIELDCOUNT(int0, 962768);
    var int6 = script17501(int0);
    var int7 = 0;
    var int8 = -1;
    while (((++int8 < int5) && (int6 != 5))) {
        [int3, int4] = script17515(int0, int8);
        int7 = (int7 + script17812(int2, (int1 + int7), 2100 as dbrow, -1 as graphic, int3, `${inttostring(int4, 10)} ${OC_NAME(int3)}`, 2, 30593 as graphic));
    };
    return int7;
}