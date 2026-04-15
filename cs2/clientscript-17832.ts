//
function script17832(int0: obj, int1: int): int {
    if ((item_getparam(int0, 3265) == 1)) {
        return int1;
    };
    var int2 = (script17831() / 10);
    if ((script18411(5) == 1)) {
        int2 = (int2 + 50);
    };
    if (((script19657() == true) && (script4148() == false))) {
        int2 = (int2 + 20);
    };
    switch (int0) {
        case 55599:
        case 55600:
        case 55601: {
            switch (script17826(1)) {
                case 2: {
                    int2 = (int2 + 5);
                    break;
                }
                case 3: {
                    int2 = (int2 + 10);
                    break;
                }
                case 4: {
                    int2 = (int2 + 15);
                    break;
                }
            };
            break;
        }
        case 57873: {
            return int1;
        }
    };
    if ((script18411(5) == 1)) {
        int2 = (int2 + 50);
    };
    return MAX(1, SCALE(int1, 100, (100 + int2)));
}