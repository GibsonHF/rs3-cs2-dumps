//
function script4645(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script4644(int0);
    switch (int0) {
        case 1: {
            int1 = 10027024;
            int2 = 10027025;
            break;
        }
        case 2: {
            int1 = 10027028;
            int2 = 10027029;
            break;
        }
        case 4: {
            int1 = 10027032;
            int2 = 10027033;
            break;
        }
        case 3: {
            int1 = 10027042;
            int2 = 10027043;
            break;
        }
        case 6: {
            int1 = 10027038;
            int2 = 10027039;
            break;
        }
        default: {
            return;
        }
    };
    if ((script4643(int0) == 1)) {
        if ((int3 == 1)) {
            IF_SETGRAPHIC(6272, int1);
            IF_SETGRAPHIC(6275, int2);
            IF_SETHIDE(0, int2);
            if ((int4 == 1)) {
                IF_SETGRAPHIC(6274, int1);
            };
        };
    } else if ((int3 == 1)) {
        IF_SETGRAPHIC(6275, int1);
    } else {
        IF_SETGRAPHIC(6273, int1);
    };
    IF_SETHIDE(0, int1);
    return;
}