//
function script17866(int0: dbrow): boolean {
    if ((int0 == -1 as dbrow)) {
        script12478("Invalid pass.");
        return false;
    };
    if ((int0 == 7906 as dbrow)) {
        return varplayer_11340;
    };
    if ((DB_GETROWTABLE(int0) != 242)) {
        script12478("Invalid pass");
        return false;
    };
    return script734(WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 991488, 0)));
}