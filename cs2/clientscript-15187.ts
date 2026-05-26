//
function script15187(int0: number, int1: number, int2: number): void {
    stack(442368);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int3 = stack();
    if ((int3 != -1)) {
        stack(dbrow_getfield(int3, 442384, 0));
        stack(int1);
        IF_SETGRAPHIC();
        stack(int3);
        stack(442400);
        stack(0);
        dbrow_getfield();
        IF_SETTEXT(stack(), int2);
    };
    if ((int0 == 0)) {
        IF_SETHIDE(1, 42795353);
    } else {
        IF_SETHIDE(0, 42795353);
    };
    if ((int0 == 6)) {
        IF_SETHIDE(1, 42795361);
    } else {
        IF_SETHIDE(0, 42795361);
    };
    return;
}