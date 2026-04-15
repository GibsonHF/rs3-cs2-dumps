//
function script13751(int0: component, int1: int, int2: unknown_int): void {
    var int3 = IF_GETTRANS(int0);
    switch (int2) {
        case 0: {
            if ((CLIENTCLOCK() >= (int1 + 70))) {
                if ((int3 > 0)) {
                    IF_SETTRANS(script12377((int3 - 30), 0, 255), int0);
                } else {
                    var int2 = 1;
                };
            };
            break;
        }
        case 1: {
            if ((CLIENTCLOCK() >= (int1 + 100))) {
                if ((int3 < 255)) {
                    IF_SETTRANS(script12377((int3 + 30), 0, 255), int0);
                } else {
                    int2 = 2;
                };
            };
            break;
        }
        case 2: {
            if ((CLIENTCLOCK() >= (int1 + 150))) {
                if ((int3 > 0)) {
                    IF_SETTRANS(script12377((int3 - 30), 0, 255), int0);
                } else {
                    int2 = 3;
                };
            };
            break;
        }
        case 3: {
            if ((CLIENTCLOCK() >= (int1 + 165))) {
                if ((int3 < 255)) {
                    IF_SETTRANS(script12377((int3 + 30), 0, 255), int0);
                } else {
                    int2 = 4;
                };
            };
            break;
        }
        case 4: {
            if ((CLIENTCLOCK() >= (int1 + 180))) {
                if ((int3 > 0)) {
                    IF_SETTRANS(script12377((int3 - 30), 0, 255), int0);
                } else {
                    int2 = 5;
                };
            };
            break;
        }
        case 5: {
            if ((CLIENTCLOCK() >= (int1 + 195))) {
                if ((int3 < 255)) {
                    IF_SETTRANS(script12377((int3 + 30), 0, 255), int0);
                } else {
                    int2 = 6;
                };
            };
            break;
        }
        case 6: {
            if ((CLIENTCLOCK() >= (int1 + 245))) {
                if ((int3 > 0)) {
                    IF_SETTRANS(script12377((int3 - 30), 0, 255), int0);
                } else {
                    int2 = 7;
                    IF_SETONTIMER(callback(), int0);
                    return;
                };
            };
            break;
        }
    };
    IF_SETONTIMER(callback(script13751, int0, int1, int2), int0);
    return;
}