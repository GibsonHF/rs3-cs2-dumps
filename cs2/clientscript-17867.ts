//
function script17867(int0: dbrow): boolean {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 242))) {
        script12478("Invalid pass.");
        return false;
    };
    return script734(WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 991504, 0)));
}