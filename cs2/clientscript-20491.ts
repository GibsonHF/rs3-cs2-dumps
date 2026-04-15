//
function script20491(int0: dbrow): fontmetrics {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 344))) {
        return 206 as fontmetrics;
    };
    var int1 = varbitplayer_22875;
    if ((DB_GETFIELDCOUNT(int0, 1409024) <= int1)) {
        int1 = 0;
    };
    return dbrow_getfield(int0, 1409025, int1);
}