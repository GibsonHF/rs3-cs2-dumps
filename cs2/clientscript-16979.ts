//
function script16979(int0: number, int1: number): void {
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    if ((dbrow_getfield(int0, 843792, 0) == 2)) {
        [int2, int3, int4] = dbrow_getfield(int0, 843904, 0);
        IF_SETOBJECT(int2, int3, script16997(int1));
        IF_SETTEXT(inttostring(int3, 10), comp(1068, 95));
        IF_SETHIDE(false, script16997(int1));
    } else {
        IF_SETGRAPHIC(dbrow_getfield(int0, 843824, 0), script16997(int1));
        IF_SETHIDE(false, script16997(int1));
    };
    return;
}