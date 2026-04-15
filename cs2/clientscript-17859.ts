//
function script17859(int0: dbrow, int1: unknown_int): int {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 242))) {
        return 0;
    };
    if ((int1 == 1)) {
        return dbrow_getfield(int0, 991249, 0);
    };
    return dbrow_getfield(int0, 991250, 0);
}