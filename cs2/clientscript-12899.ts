//
function script12899(int0: obj): obj {
    stack(348240);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    var int2 = -1;
    if ((int1 == -1)) {
        int2 = 12425 as obj;
    } else {
        int2 = dbrow_getfield(int1, 348256, 0);
    };
    if ((int2 == -1 as obj)) {
        int2 = 12425 as obj;
    };
    return int2;
}