//
function script8168(int0: component, int1: int, int2: int): void {
    if (((int2 > -1) && (int2 < 30))) {
        if ((MODULO(CLIENTCLOCK(), 2) == 0)) {
            IF_SETSIZE(1, 1, 0, 0, script8170(int1));
            IF_SETSIZE(0, 0, 1, 1, script8170(int2));
            if ((int1 > int2)) {
                if (((HAS_NXT() == 0) && (IF_GETHIDE(script8170(int2)) == true))) {
                    script8169(int1, (int1 + 10), true);
                    script8169((int2 - 10), int2, false);
                };
                var int2 = (int2 - 1);
                var int1 = (int1 - 1);
            } else {
                if (((HAS_NXT() == 0) && (IF_GETHIDE(script8170(int2)) == true))) {
                    script8169((int1 - 10), int1, true);
                    script8169(int2, (int2 + 10), false);
                };
                int2 = (int2 + 1);
                int1 = (int1 + 1);
            };
            IF_SETONTIMER(callback(script8168, -2147483645, int1, int2), int0);
        };
    } else {
        IF_SETONTIMER(callback(), int0);
        IF_CLOSESUBCLIENT(96797489);
        script8164();
    };
    return;
}