//
function script12765(int0: unknown_int, int1: int): void {
    var int2 = comp(1789, 19);
    switch (int0) {
        case 1: {
            int2 = comp(1789, 19);
            break;
        }
        case 2: {
            int2 = comp(1789, 36);
            break;
        }
        case 3: {
            int2 = comp(1789, 43);
            break;
        }
        case 4: {
            int2 = comp(1789, 50);
            break;
        }
        case 5: {
            int2 = comp(1789, 57);
            break;
        }
        case 6: {
            int2 = comp(1789, 64);
            break;
        }
    };
    IF_SETTEXT(`Players: ${inttostring(int1, 10)}`, int2);
    return;
}