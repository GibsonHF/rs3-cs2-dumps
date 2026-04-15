//
function script14608(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int0, 385072, 0) == true))) {
        return 0;
    };
    if ((script14845(int0) == 1)) {
        return 0;
    };
    if ((script14606(varbitplayer_57205, dbrow_getfield(int0, 385024, 0)) == 2)) {
        return 1;
    };
    return 0;
}