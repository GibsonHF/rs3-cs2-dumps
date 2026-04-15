//
function script20083(int0: unknown_int, int1: int, int2: int): int {
    var int3 = 0;
    if ((script20335(3) > 0)) {
        int3 = ((int1 * 3) + (int2 * 3));
    } else if ((script20335(2) > 0)) {
        int3 = ((int1 * 2) + (int2 * 2));
    } else if ((script20335(1) > 0)) {
        int3 = (int1 + int2);
    };
    switch (int0) {
        case 97: {
            break;
        }
        case 139: {
            if ((script20078(97) == 0)) {
                int3 = (int3 + int1);
            };
            break;
        }
        case 249: {
            if ((script20078(97) == 0)) {
                int3 = (int3 + int1);
            };
            if ((script20078(139) == 0)) {
                int3 = (int3 + int1);
            };
            break;
        }
        case 252: {
            if ((script20078(97) == 0)) {
                int3 = (int3 + int1);
            };
            if ((script20078(139) == 0)) {
                int3 = (int3 + int1);
            };
            if ((script20078(249) == 0)) {
                int3 = (int3 + int1);
            };
            break;
        }
    };
    return int3;
}