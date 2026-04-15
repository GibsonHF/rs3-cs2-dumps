//
function script13667(int0: component, int1: int): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    var int3 = -1;
    var int4 = 0;
    if ((DB_GETFIELDCOUNT(int2, 90416) > int1)) {
        [int3, int4] = dbrow_getfield(int2, 90416, int1);
        if (((int1 == 0) && (varbitplayer_37616 >= (varplayer_7270 * int4)))) {
            IF_SETCOLOUR(65280, int0);
        } else if (((int1 == 1) && (varbitplayer_37617 >= (varplayer_7270 * int4)))) {
            IF_SETCOLOUR(65280, int0);
        } else {
            IF_SETCOLOUR(16711680, int0);
        };
    };
    return;
}