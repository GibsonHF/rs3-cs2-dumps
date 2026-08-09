//
function script14609(int0: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int0, 385072, 0) == 1))) {
        return 0;
    };
    if ((script14846(int0) == 1)) {
        return 0;
    };
    if ((script14607(varbitplayer_57205, dbrow_getfield(int0, 385024, 0)) == 2)) {
        return 1;
    };
    return 0;
}