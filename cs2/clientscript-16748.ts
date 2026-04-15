//
function script16748(int0: dbrow): [stylesheet, int] {
    if ((int0 == -1 as dbrow)) {
        script12478("Skin data is NULL");
        return [-1 as stylesheet, -1];
    };
    if ((DB_GETROWTABLE(int0) != 132)) {
        script12478("NOT an interface_skin dbrow");
        return [-1 as stylesheet, -1];
    };
    var int1 = varbitplayer_22875;
    if ((DB_GETFIELDCOUNT(int0, 540672) <= int1)) {
        int1 = 0;
    };
    return [dbrow_getfield(int0, 540672, int1), int1];
}