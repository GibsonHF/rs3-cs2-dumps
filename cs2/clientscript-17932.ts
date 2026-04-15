//
function script17932(int0: dbrow): int {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 242))) {
        script12478("Invalid pass.");
        return 0;
    };
    return WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 991472, 0));
}