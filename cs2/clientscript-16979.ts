//
function script16979(int0: dbrow, int1: int): void {
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    if ((dbrow_getfield(int0, 843792, 0) == 2)) {
        [int2, int3, int4] = dbrow_getfield(int0, 843904, 0);
        IF_SETOBJECT(int2, int3, script16997(int1));
        IF_SETTEXT(inttostring(int3, 10), comp(1068, 95));
        IF_SETHIDE(false, script16997(int1));
    } else {
        stack(dbrow_getfield(int0, 843824, 0));
        stack(script16997(int1));
        IF_SETGRAPHIC();
        IF_SETHIDE(0, script16997(int1));
    };
    return;
}