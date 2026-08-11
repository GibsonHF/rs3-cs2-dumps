//
function script12493(int0: number, int1: number): void {
    var int2 = 19;
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int3 = comp(1757, 107);  // mm16_cases:progress_bar_blue_join_1
            break;
        }
        case 2: {
            int3 = comp(1757, 108);  // mm16_cases:progress_bar_blue_join_2
            break;
        }
        case 3: {
            int3 = comp(1757, 109);  // mm16_cases:progress_bar_blue_join_3
            break;
        }
        case 4: {
            int3 = comp(1757, 110);  // mm16_cases:progress_bar_blue_join_4
            break;
        }
        case 5: {
            int3 = comp(1757, 111);  // mm16_cases:progress_bar_blue_join_5
            break;
        }
        case 6: {
            int3 = comp(1757, 112);  // mm16_cases:progress_bar_blue_join_6
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