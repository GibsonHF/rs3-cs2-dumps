//
function script15572(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = MAX((IF_GETWIDTH(int0) - IF_GETWIDTH(int1)), 1);
    var int2 = MIN(MAX(int2, 0), int4);
    var int5 = SCALE(int2, int4, 255);
    switch (int3) {
        case 23: {
            CLIENTOPTION_SET(23, int5);
            script15568(int0, int1, int5, 1);
            break;
        }
    };
    return;
}