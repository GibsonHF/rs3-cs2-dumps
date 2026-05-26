//
function script12493(int0: number, int1: number): void {
    var int2 = 19;
    var int3 = -1;
    switch (int0) {
        case 1: {
            int3 = 115146859;
            break;
        }
        case 2: {
            int3 = 115146860;
            break;
        }
        case 3: {
            int3 = 115146861;
            break;
        }
        case 4: {
            int3 = 115146862;
            break;
        }
        case 5: {
            int3 = 115146863;
            break;
        }
        case 6: {
            int3 = 115146864;
            break;
        }
    };
    if (((int3 != -1) && (IF_FIND(int3) == 1))) {
        IF_SETHIDE(0, int3);
        IF_SETSIZE(3, 1, 0, 0, int3);
        IF_SETONTIMER(callback(script12494, int3, int1, int2), int3);
    };
    return;
}