//
function script17155(int0: number): void {
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    [int1, int2, int3, int4] = script17142(int0);
    stack(761856);
    stack(int0);
    DB_FIND(0);
    var int5 = dbrow_findnext();
    var int6 = dbrow_getfield(int5, 761936, 0);
    var int7 = dbrow_getfield(int5, 761984, 0);
    var int8 = dbrow_getfield(int5, 762000, 0);
    var int9 = dbrow_getfield(int5, 762016, 0);
    var int10 = dbrow_getfield(int5, 762032, 0);
    IF_SETHIDE(false, int7);
    if ((int3 == 0)) {
        IF_SETGRAPHIC(-1 as graphic, int8);
    } else {
        IF_SETGRAPHIC(script8948(int3), int8);
    };
    IF_SETSIZE(82, 100, 0, 0, int8);
    IF_SETOBJECT(int1, int2, int9);
    if ((int4 > 1)) {
        IF_SETGRAPHIC(script10980(int4), int10);
    } else {
        IF_SETGRAPHIC(-1 as graphic, int10);
    };
    return;
}