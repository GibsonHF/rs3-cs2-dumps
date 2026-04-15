//
function script12163(int0: unknown_int): graphic {
    stack(20480);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        return -1 as graphic;
    };
    return dbrow_getfield(int1, 20560, 0);
}