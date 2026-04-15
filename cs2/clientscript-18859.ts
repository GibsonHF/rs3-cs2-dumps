//
function script18859(int0: int): graphic {
    stack(1163264);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1163280, 0);
    };
    return -1 as graphic;
}