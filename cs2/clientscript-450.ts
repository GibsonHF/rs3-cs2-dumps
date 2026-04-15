//
function script450(int0: dbrow): [int, string] {
    if ((DB_GETROWTABLE(int0) != 263)) {
        return [0, ""];
    };
    if ((DB_GETFIELDCOUNT(int0, 1077312) > 0)) {
        return [WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 1077312, 0)), dbrow_getfield(int0, 1077328, 0)];
    };
    return [1, ""];
}