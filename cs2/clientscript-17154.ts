//
function script17154(int0: int, int1: unknown_int): void {
    stack(761856);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    stack(int2);
    stack(761968);
    stack(0);
    dbrow_getfield();
    var int3 = stack();
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = 1;
    [int4, int5, int6, int7] = script17142(int0);
    int5 = (int5 * int7);
    if ((script3027(int0) == 1)) {
        IF_SETTEXT(`${OC_NAME(int4)} x ${inttostring(int5, 10)}`, int3);
    } else if ((script4574(int0) == 1)) {
        IF_SETTEXT(`${OC_NAME(int4)} x ${inttostring(int5, 10)}`, int3);
    };
    return;
}