//
function script6117(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = 20;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((int1 > 0)) {
        var int1 = (int1 - 1);
    } else if ((int2 < int5)) {
        var int2 = (int2 + 1);
        int6 = 16383;
        int8 = (int5 - int2);
        switch (varclient_1884) {
            case 0:
            case 1: {
                int7 = 5;
                break;
            }
            case 2:
            case 3: {
                int7 = 3;
                break;
            }
        };
        if ((int2 == int5)) {
            varclient_1885 = (varclient_1885 + 1);
        };
    } else if ((int3 > 0)) {
        var int3 = (int3 - 1);
    } else if ((int4 < int5)) {
        var int4 = (int4 + 1);
        int6 = 16384;
        int8 = int4;
        switch (varclient_1884) {
            case 0:
            case 1: {
                int7 = 3;
                break;
            }
            case 2:
            case 3: {
                int7 = 5;
                break;
            }
        };
    } else {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((int6 != 0)) {
        switch (varclient_1884) {
            case 0:
            case 2: {
                IF_SETPOSITION(SCALE(int8, int5, int6), IF_GETY(int0), int7, 0, int0);
                break;
            }
            case 1:
            case 3: {
                IF_SETPOSITION(IF_GETX(int0), SCALE(int8, int5, int6), 0, int7, int0);
                break;
            }
        };
    };
    IF_SETONTIMER(callback(script6117, -2147483645, int1, int2, int3, int4), int0);
    return;
}