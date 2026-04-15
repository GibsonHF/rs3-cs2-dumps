//
function script15124(int0: dbrow): obj {
    if ((int0 == -1 as dbrow)) {
        return -1 as obj;
    };
    var int1 = -1 as obj;
    var int2 = -1 as graphic;
    [int1, int2] = dbrow_getfield(int0, 434192, 0);
    return int1;
}