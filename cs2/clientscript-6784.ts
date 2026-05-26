//
function script6784(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = int1;
    if ((int4 > 0)) {
        int4 = (int4 - 1);
        IF_SETONTIMER(callback(script6784, int0, int4), 41353216);
        return;
    };
    if ((int0 > 3)) {
        var int0 = 0;
    };
    switch (int0) {
        case 0: {
            int2 = 26124;
            int3 = 21795;
            break;
        }
        case 1: {
            int2 = 26125;
            int3 = 21797;
            break;
        }
        case 2: {
            int2 = 26126;
            int3 = 21799;
            break;
        }
        case 3: {
            int2 = 26127;
            int3 = 21801;
            break;
        }
    };
    int0 = (int0 + 1);
    IF_SETNPCMODEL(int2, 41353292);
    IF_SETNPCMODEL(int3, 41353293);
    IF_SETONTIMER(callback(script6784, int0, 100), 41353216);
    return;
}