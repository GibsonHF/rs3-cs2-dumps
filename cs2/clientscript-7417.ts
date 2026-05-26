//
function script7417(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    var int9 = 0;
    varclient_4722 = 1;
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int5);
    CC_DELETEALL(int6);
    while ((int9 < 300)) {
        CC_CREATE(int2, 4, int9);
        CC_SETHIDE(true);
        CC_CREATE(int6, 4, int9);
        CC_SETHIDE(true);
        int9 = (int9 + 1);
    };
    IF_SETONTIMER(callback(script7418, int8, int0, int1, int2, int3, int4, int5, int6, int7), int0);
    return;
}