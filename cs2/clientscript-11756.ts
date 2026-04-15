//
function script11756(int0: dbrow, int1: int): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int2 = dbrow_getfield(int0, 274528, 0);
    switch ((int2 / 32)) {
        default: {
            break;
        }
    };
    if ((int1 == 1)) {
        varclient_6996 = SETBIT(varclient_6996, int2);
    } else {
        varclient_6996 = CLEARBIT(varclient_6996, int2);
        script3532(int0);
    };
    return;
}