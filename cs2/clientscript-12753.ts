//
function script12753(int0: unknown_int, int1: int, string0: string): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(1787, 0);
            int3 = comp(1787, 1);
            break;
        }
        case 2: {
            int2 = comp(1787, 2);
            int3 = comp(1787, 3);
            break;
        }
        case 3: {
            int2 = comp(1787, 4);
            int3 = comp(1787, 5);
            break;
        }
        case 4: {
            int2 = comp(1787, 6);
            int3 = comp(1787, 7);
            break;
        }
        case 5: {
            int2 = comp(1787, 8);
            int3 = comp(1787, 9);
            break;
        }
    };
    if ((int2 != comp(-1, 65535))) {
        if ((int1 == 0)) {
            IF_SETTEXT("-", int3);
        } else {
            IF_SETTEXT(inttostring(int1, 10), int3);
        };
        IF_SETTEXT(string0, int2);
    };
    return;
}