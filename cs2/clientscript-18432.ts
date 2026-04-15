//
function script18432(int0: unknown_int): int {
    stack(1122304);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 != -1)) {
        return dbrow_getfield(int1, 1122384, 0);
    };
    return 0;
}