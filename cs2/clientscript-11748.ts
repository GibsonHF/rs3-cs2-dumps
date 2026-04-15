//
function script11748(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 274528, 0);
    if ((int1 == -1)) {
        return 1;
    };
    var int2 = 0;
    switch ((int1 / 32)) {
        default: {
        }
    };
    return TESTBIT(varclient_6996, MODULO(int1, 32));
}