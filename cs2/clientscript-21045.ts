//
function script21045(): void {
    if ((int1 == -1 as dbrow)) {
        return;
    };
    if ((DB_GETROWTABLE(int1) != 383)) {
        unk11016("Incorrect dbrow type provided");
        return;
    };
    if ((script20133(int0) == 1)) {
        return;
    };
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int1, 1568784);
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    while ((int2 < int3)) {
        [int4, int5, int6] = dbrow_getfield(int1, 1568784, int2);
        stack(int4);
        stack(int5);
        script21043();
        int2 = (int2 + 1);
    };
    return;
}