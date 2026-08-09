//
function script4214(int0: number, int1: number, int2: number): void {
    var int3 = IF_GETTRANS(int0);
    var int4 = 0;
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((int2 == 0)) {
        if ((int1 == 1)) {
            int4 = (int3 + 22);
        } else if ((int1 == 0)) {
            int4 = (int3 - 22);
        } else {
            IF_SETONTIMER(callback(), int0);
            return;
        };
        int4 = MAX(int4, 0);
        int4 = MIN(int4, 255);
        IF_SETTRANS(int4, int0);
        if ((int1 == 1)) {
            if ((int4 == 255)) {
                IF_SETONTIMER(callback(), int0);
            } else if ((int1 == 0)) {
                if ((int4 == 0)) {
                    IF_SETONTIMER(callback(), int0);
                } else {
                    IF_SETONTIMER(callback(script4214, int0, int1, 0), int0);
                };
            } else {
                IF_SETONTIMER(callback(script4214, int0, int1, 0), int0);
            };
        } else if ((int1 == 0)) {
            if ((int4 == 0)) {
                IF_SETONTIMER(callback(), int0);
            } else {
                IF_SETONTIMER(callback(script4214, int0, int1, 0), int0);
            };
        } else {
            IF_SETONTIMER(callback(script4214, int0, int1, 0), int0);
        };
    } else {
        IF_SETONTIMER(callback(script4214, int0, int1, (int2 - 1)), int0);
    };
    return;
}