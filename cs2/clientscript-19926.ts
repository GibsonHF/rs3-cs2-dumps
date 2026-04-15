//
function script19926(int0: dbrow, string0: string): string {
    var int1 = -1 as dbrow;
    var int2 = -1;
    int1 = dbrow_getfield(int0, 647328, 0);
    if ((MAP_MEMBERS() == 0)) {
        int1 = dbrow_getfield(int0, 647344, 0);
    };
    int2 = dbrow_getfield(int0, 647360, 0);
    if ((int1 == -1 as dbrow)) {
        return string0;
    };
    var int3 = DB_GETFIELDCOUNT(int1, 143360);
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    while (((++int6 < int3) && (int7 == 0))) {
        [int4, int5] = dbrow_getfield(int1, 143360, int6);
        if ((int4 == int2)) {
            int7 = 1;
        };
    };
    var string0 = `${string0}<br><br>Chance to appear: ${script7653(int5, 2, 1, 0, 1)}%`;
    return string0;
}