//
function script20939(): void {
    var int1 = -1;
    var int2 = DB_GETFIELDCOUNT(int0, 1339392);
    var int3 = -1;
    int1 = (int1 + 1);
    while ((int1 < int2)) {
        int3 = dbrow_getfield(int0, 1339392, int1);
        stack(int1);
        stack(int3);
        script20940();
        if (BRANCH_EQUALS(1)) {
            stack(1);
            return;
        };
    };
    stack(0);
    return;
}