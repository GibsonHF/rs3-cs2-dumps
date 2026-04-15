//
function script17454(int0: struct): int {
    var int1 = struct_getparam(int0, 3740);
    switch (varbitplayer_53587) {
        case 1: {
            int1 = (int1 + 10);
            break;
        }
        case 2: {
            int1 = (int1 + 20);
            break;
        }
        case 3: {
            int1 = (int1 + 30);
            break;
        }
    };
    return int1;
}