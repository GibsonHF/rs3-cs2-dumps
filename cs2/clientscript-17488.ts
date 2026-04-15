//
function script17488(int0: dbrow): boolean {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 233))) {
        return false;
    };
    switch (dbrow_getfield(int0, 954400, 0)) {
        case 1: {
            return script734(struct_getparam(dbrow_getfield(int0, 954496, 0), 2809));
        }
    };
    return dbrow_getfield(int0, 954416, 0);
}