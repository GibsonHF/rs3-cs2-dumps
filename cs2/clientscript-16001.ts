//
function script16001(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = -1;
    switch (int0) {
        case 93716739:
        case 94109706: {
            int4 = script11800(1003);
            break;
        }
        case 109445128: {
            int4 = script11800(1032);
            break;
        }
        case 109510664: {
            int4 = script11800(1033);
            break;
        }
        case 109576200: {
            int4 = script11800(1034);
            break;
        }
        case 109641736: {
            int4 = script11800(1035);
            break;
        }
        default: {
            return;
        }
    };
    IF_CLEAROPS(int0);
    IF_CLEAROPS(int1);
    IF_CLEAROPS(int2);
    IF_CLEAROPS(int3);
    if ((int4 == 31)) {
        return;
    };
    var int5 = 18;
    if (((PLAYERMEMBER() == false) || (MAP_MEMBERS() == 0))) {
        int5 = 10;
    };
    var int6 = 1;
    var int7 = int0;
    var int8 = 1;
    while ((int6 <= int5)) {
        switch (((int6 - 1) / 5)) {
            case 0: {
                int7 = int0;
                int8 = (5 + int6);
                break;
            }
            case 1: {
                int7 = int1;
                int8 = (5 + (int6 - 5));
                break;
            }
            case 2: {
                int7 = int2;
                int8 = (5 + (int6 - 10));
                break;
            }
            case 3: {
                int7 = int3;
                int8 = (5 + (int6 - 15));
                break;
            }
        };
        IF_SETOP(int8, script16004(int6), int7);
        int6 = (int6 + 1);
    };
    return;
}