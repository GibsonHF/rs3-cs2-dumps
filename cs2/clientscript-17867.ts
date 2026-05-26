//
function script17867(int0: number): number {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 242))) {
        script12478("Invalid pass.");
        return 0;
    };
    return script734(WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 991504, 0)));
}