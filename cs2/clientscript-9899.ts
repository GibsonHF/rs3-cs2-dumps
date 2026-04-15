//
function script9899(int0: int, int1: int, int2: int, int3: int, int4: component): void {
    IF_SETONTIMER(callback(), int4);
    while ((int1 <= int2)) {
        script8823(int0, int1, 0, 0);
        script8212(int0, int1, -1, -1);
        var int1 = (int1 + 1);
    };
    switch (++int3) {
        case 1: {
            var int0 = 20;
            int1 = 0;
            var int2 = 7;
            break;
        }
        case 2: {
            int0 = 2;
            int1 = 0;
            int2 = 7;
            break;
        }
        case 3: {
            int0 = 21;
            int1 = 0;
            int2 = 46;
            break;
        }
        case 4: {
            int0 = 5;
            int1 = 1;
            int2 = 14;
            break;
        }
        case 5: {
            int0 = 5;
            int1 = 15;
            int2 = 28;
            break;
        }
        case 6: {
            int0 = 5;
            int1 = 29;
            int2 = 42;
            break;
        }
        case 7: {
            int0 = 5;
            int1 = 43;
            int2 = 56;
            break;
        }
        case 8: {
            int0 = 5;
            int1 = 57;
            int2 = 70;
            break;
        }
        case 9: {
            int0 = 5;
            int1 = 71;
            int2 = 101;
            break;
        }
        case 10: {
            int0 = 5;
            int1 = 81;
            int2 = 101;
            break;
        }
        case 11: {
            int0 = 42;
            int1 = 0;
            int2 = 4;
            break;
        }
        case 12: {
            int0 = 7;
            int1 = 0;
            int2 = 0;
            break;
        }
        default: {
            script8210("Keybinds reset successfully", -1, -1);
            return;
        }
    };
    IF_SETONTIMER(callback(script9899, int0, int1, int2, int3, int4), int4);
    return;
}