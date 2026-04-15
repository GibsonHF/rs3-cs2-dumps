//
function script12493(int0: int, int1: component): void {
    var int2 = 19;
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int3 = comp(1757, 107);
            break;
        }
        case 2: {
            int3 = comp(1757, 108);
            break;
        }
        case 3: {
            int3 = comp(1757, 109);
            break;
        }
        case 4: {
            int3 = comp(1757, 110);
            break;
        }
        case 5: {
            int3 = comp(1757, 111);
            break;
        }
        case 6: {
            int3 = comp(1757, 112);
            break;
        }
    };
    if (((int3 != comp(-1, 65535)) && (IF_FIND(int3) == 1))) {
        IF_SETHIDE(false, int3);
        IF_SETSIZE(3, 1, 0, 0, int3);
        IF_SETONTIMER(callback(script12494, int3, int1, int2), int3);
    };
    return;
}