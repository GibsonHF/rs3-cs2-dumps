//
function script18277(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    stack(int6);
    var int6 = (int6 - 1);
    if (BRANCH_GREATER_THAN(0)) {
        IF_SETONTIMER(callback(script18277, int0, int1, int2, int3, int4, int5, int6, int7), int4);
        return;
    };
    IF_SETONTIMER(callback(), int4);
    switch (int1) {
        case 4: {
            script16509(int0, int2, int3, int4, int5, 0, int7);
            break;
        }
    };
    return;
}