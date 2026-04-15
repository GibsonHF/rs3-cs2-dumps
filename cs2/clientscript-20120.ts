//
function script20120(int0: int, int1: int): int {
    var int2 = script20117(int0);
    if ((int2 == -1 as dbrow)) {
        return -1;
    };
    var int3 = dbrow_getfield(int2, 1335472, 0);
    var int4 = 1;
    var int5 = dbrow_getfield(int3, 1372256, int4);
    var int6 = 0;
    var int7 = DB_GETFIELDCOUNT(int5, 1376272);
    while ((int6 < int7)) {
        if ((dbrow_getfield(int5, 1376276, int6) == int1)) {
            return dbrow_getfield(int5, 1376273, int6);
        };
        int6 = (int6 + 1);
    };
    return -1;
}