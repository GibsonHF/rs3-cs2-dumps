//
function script19737(): void {
    var int0 = -1;
    var int1 = 8;
    var int2 = -1;
    var int3 = -1;
    int0 = (int0 + 1);
    while ((int0 < int1)) {
        stack(1101824);
        stack(int0);
        DB_FIND(0);
        int2 = dbrow_findnext();
        if ((int2 == -1)) {
            return;
        };
        int3 = dbrow_getfield(int2, 1101888, 0);
        if (((int3 != -1) && (script19694(int0) == 0))) {
            IF_SETHIDE(true, int3);
        };
    };
    return;
}