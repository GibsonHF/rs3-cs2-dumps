//
function script18500(int0: component): void {
    var int1 = script18493();
    var int2 = struct_getparam(int1, 9075);
    var string0 = "";
    switch (DB_GETROWTABLE(int2)) {
        case 280: {
            if ((DB_GETFIELDCOUNT(int2, 1146880) > 0)) {
                string0 = dbrow_getfield(int2, 1146880, 0);
            };
            break;
        }
        case 26: {
            if ((DB_GETFIELDCOUNT(int2, 106496) > 0)) {
                string0 = dbrow_getfield(int2, 106496, 0);
            };
            break;
        }
    };
    IF_SETTEXT(dbrow_getfield(int2, 106496, 0), int0);
    return;
}