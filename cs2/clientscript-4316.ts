//
function script4316(int0: number, int1: number): number {
    if ((int0 == -1)) {
        script12478("Attempted to grab a preview index for a null prize dbrow. Returning index 0.");
        return 0;
    };
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = DB_GETFIELDCOUNT(int0, 413696);
    var int6 = -1;
    int6 = (int6 + 1);
    while ((int6 < int5)) {
        [int2, int3, int4, int4, int4, int4, int4, int4] = dbrow_getfield(int0, 413696, int6);
        if ((int1 == int2)) {
            return int6;
        };
    };
    return 0;
}