//
function script13284(int0: struct): string {
    if ((int0 == -1 as struct)) {
        return "";
    };
    var string0 = "";
    var int1 = struct_getparam(int0, 6576);
    if ((struct_getparam(int0, 1346) > 0)) {
        string0 = struct_getparam(int0, 1348);
    } else if ((struct_getparam(int0, 8072) != -1 as cs2enum)) {
        string0 = struct_getparam(int0, 8073);
    } else if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 92: {
                string0 = dbrow_getfield(int1, 376848, 0);
                break;
            }
            default: {
                string0 = struct_getparam(int0, 6410);
                break;
            }
        };
    } else {
        string0 = struct_getparam(int0, 6410);
    };
    return string0;
}