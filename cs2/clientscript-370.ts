//
function script370(): void {
    var int0 = -1;
    var int1 = 0;
    while ((++int0 < 17)) {
        switch (int0) {
            case 16: {
                if ((GETBIT_RANGE(varplayer_7050, 1, 15) == 0)) {
                    int1 = 0;
                } else {
                    int1 = 1;
                };
                break;
            }
            default: {
                int1 = TESTBIT(varplayer_7050, int0);
                break;
            }
        };
        IF_SETHIDE(script734((1 - int1)), enum_getvalue(0, 9, 12870 as cs2enum, int0));
        IF_SETHIDE(script734(int1), enum_getvalue(0, 9, 12869 as cs2enum, int0));
    };
    return;
}