//
function script17486(int0: dbrow): string {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 233))) {
        return "";
    };
    var string0 = dbrow_getfield(int0, 954368, 0);
    if ((STRING_LENGTH(string0) != 0)) {
        return string0;
    };
    switch (dbrow_getfield(int0, 954400, 0)) {
        case 1: {
            return struct_getparam(dbrow_getfield(int0, 954496, 0), 2794);
        }
    };
    return "";
}