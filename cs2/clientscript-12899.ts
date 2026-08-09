//
function script12899(int0: number): number {
    stack(348240);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    var int2 = -1;
    if ((int1 == -1)) {
        int2 = 12425;
    } else {
        int2 = dbrow_getfield(int1, 348256, 0);
    };
    if ((int2 == -1)) {
        int2 = 12425;
    };
    return int2;
}