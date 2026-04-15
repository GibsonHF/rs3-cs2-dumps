//
function script19122(int0: dbrow, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = comp(1256, 5);
    IF_SETSIZE(dbrow_getfield(int0, 1196096, 0), dbrow_getfield(int0, 1196112, 0), 0, 0, comp(1256, 6));
    IF_SETPOSITION(int1, int2, 0, 0, comp(1256, 6));
    IF_SETPOSITION((int1 + int3), (int2 + int4), 0, 0, int5);
    script19130(int5);
    return;
}