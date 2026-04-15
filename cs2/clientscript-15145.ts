//
function script15145(int0: dbrow): obj {
    if ((int0 == -1 as dbrow)) {
        return -1 as obj;
    };
    var int1 = -1 as graphic;
    var int2 = -1 as obj;
    [int2, int1] = dbrow_getfield(int0, 438400, 0);
    return int2;
}