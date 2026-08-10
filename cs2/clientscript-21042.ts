//
function script21042(): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((DB_GETROWTABLE(int0) != 383)) {
        unk11016("Incorrect dbrow type provided");
        return;
    };
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 1568784);
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    while ((int1 < int2)) {
        [int3, int4, int5] = dbrow_getfield(int0, 1568784, int1);
        stack(int3);
        stack(int5);
        script21043();
        int1 = (int1 + 1);
    };
    return;
}