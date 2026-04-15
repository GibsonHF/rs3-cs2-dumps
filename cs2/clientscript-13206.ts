//
function script13206(int0: int, int1: int, int2: int, int3: int): void {
    if ((int1 != 99)) {
        if (((int0 == 2) && ((int1 == 3) || (int1 == 3)))) {
            return;
        };
        if ((int2 == 1)) {
            script13209(int0, int1);
        } else {
            script13210(int0, int1);
        };
        varclient_5926 = SETBIT(varclient_5926, int0);
        if ((script13201(0, int0, 99, 0) == 0)) {
            varclient_5926 = CLEARBIT(varclient_5926, int0);
        };
    } else if ((int2 == 1)) {
        script13208(int0, int3);
        varclient_5926 = SETBIT(varclient_5926, int0);
    } else {
        script13208(int0, 0);
        varclient_5926 = CLEARBIT(varclient_5926, int0);
    };
    return;
}