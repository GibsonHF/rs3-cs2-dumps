//
function script12060(): void {
    var int0 = -1;
    var int1 = 8;
    var int2 = -1 as dbrow;
    var int3 = comp(-1, 65535);
    while ((++int0 < int1)) {
        stack(761856);
        stack(int0);
        DB_FIND(0);
        dbrow_findnext();
        int2 = stack();
        if ((int2 == -1)) {
            return;
        };
        int3 = dbrow_getfield(int2, 761920, 0);
        if ((int3 != comp(-1, 65535))) {
            IF_SETHIDE(false, int3);
        };
    };
    return;
}