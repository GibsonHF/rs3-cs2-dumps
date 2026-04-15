//
function script17861(int0: dbrow): int {
    if ((int0 == 7906 as dbrow)) {
        return varplayer_11341;
    };
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 242))) {
        script12478("Invalid pass!");
        return 0;
    };
    return WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 991408, 0));
}