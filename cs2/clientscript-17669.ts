//
function script17669(int0: unknown_int, int1: stylesheet): [int, int] {
    switch (int0) {
        case 4:
        case 3: {
            return [0, 30];
        }
        case 24: {
            return [0, 50];
        }
        case 22:
        case 18:
        case 21: {
            return [0, 160];
        }
    };
    var int2 = script15968(int0, int1, script15970(int0));
    if ((int2 != -1)) {
        switch (int0) {
            case 12: {
                return [0, MAX(30, int2)];
            }
            case 14: {
                return [0, MAX(30, SCALE(int2, 100, 150))];
            }
            case 23:
            case 1001:
            case 1002:
            case 1003:
            case 1004: {
                return [0, ((MAX(30, int2) * 3) + 40)];
            }
            case 1000: {
                return [0, MAX(30, ((int2 * 2) + 30))];
            }
        };
        return [0, MAX(30, (int2 * 3))];
    };
    var int3 = script15968(int0, int1, script15971(int0));
    var int4 = script15968(int0, int1, script15972(int0));
    if (((int3 == -1) && (int4 == -1))) {
        return [30, 30];
    };
    return [0, MAX(30, ((int3 * 2) + (int4 * 2)))];
}