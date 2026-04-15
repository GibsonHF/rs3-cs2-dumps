//
function script7417(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: unknown_int): void {
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