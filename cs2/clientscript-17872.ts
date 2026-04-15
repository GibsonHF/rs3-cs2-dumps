//
function script17872(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        script12478("Invalid Pass.");
        return -1;
    };
    var int1 = 0;
    if ((int0 == 7906 as dbrow)) {
        int1 = varplayer_11347;
    } else {
        if ((DB_GETROWTABLE(int0) != 242)) {
            script12478("Invalid Pass.");
            return -1;
        };
        int1 = WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 991440, 0));
    };
    return int1;
}