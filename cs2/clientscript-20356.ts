//
function script20356(): void {
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = 1;
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = comp(1023, 21);
    while ((++int3 < DB_GETFIELDCOUNT(17153 as dbrow, 413696))) {
        [int0, int1, int2, int4, int4, int4, int4, int4] = dbrow_getfield(17153 as dbrow, 413696, int3);
        script14391(int6, int3, 0, 0, 1, 1, 61, 75, 0, 0);
        if ((int2 == 7)) {
            script16708(int6, int2, script227(int2), (int3 + 1), int5, 0, -2, 1, 1, 62, 75, 0, 0);
            int5 = (int5 + 3);
        } else {
            script7920(int6, (int3 + 1), int5, 0, int3, 0, 0, 1, 1, 61, 75, 0, 0, script227(int2));
            int5 = (int5 + 1);
        };
        script10024(int6, (int3 + 1), int5, 0, int3, 1, 0, 1, 1, (36 - 5), (32 - 5), 0, 0, int0, int1, 0, 1);
        int5 = 0;
    };
    return;
}