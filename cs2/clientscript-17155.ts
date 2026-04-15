//
function script17155(int0: unknown_int): void {
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    [int1, int2, int3, int4] = script17142(int0);
    stack(761856);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int5 = stack();
    stack(int5);
    stack(761936);
    stack(0);
    dbrow_getfield();
    var int6 = stack();
    stack(int5);
    stack(761984);
    stack(0);
    dbrow_getfield();
    var int7 = stack();
    stack(int5);
    stack(762000);
    stack(0);
    dbrow_getfield();
    var int8 = stack();
    stack(int5);
    stack(762016);
    stack(0);
    dbrow_getfield();
    var int9 = stack();
    stack(int5);
    stack(762032);
    stack(0);
    dbrow_getfield();
    var int10 = stack();
    IF_SETHIDE(0, int7);
    if ((int3 == 0)) {
        stack(-1);
        stack(int8);
        IF_SETGRAPHIC();
    } else {
        stack(script8948(int3));
        stack(int8);
        IF_SETGRAPHIC();
    };
    IF_SETSIZE(82, 100, 0, 0, int8);
    IF_SETOBJECT(int1, int2, int9);
    if ((int4 > 1)) {
        stack(script10980(int4));
        stack(int10);
        IF_SETGRAPHIC();
    } else {
        stack(-1);
        stack(int10);
        IF_SETGRAPHIC();
    };
    return;
}