//
function script19094(int0: int, int1: unknown_int): void {
    var int2 = script19075(int0);
    var int3 = -1 as graphic;
    var int4 = 0;
    var int5 = 0;
    if ((script19071(int0) == 0)) {
        int3 = dbrow_getfield(int2, 1191968, 0);
        [int4, int5] = dbrow_getfield(int2, 1191984, 0);
    } else {
        int3 = 34132 as graphic;
        int4 = 40;
        int5 = 40;
    };
    stack(int3);
    stack(int1);
    IF_SETGRAPHIC();
    IF_SETSIZE(int4, int5, 0, 0, int1);
    script19098();
    return;
}