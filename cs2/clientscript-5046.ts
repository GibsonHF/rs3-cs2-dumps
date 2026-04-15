//
function script5046(int0: component, int1: int, int2: unknown_int, int3: int, int4: int): void {
    if ((int2 < 1)) {
        script5047(int1, 0, 40, int3, int4);
        IF_SETONTIMER(callback(script5046, int0, varclient_1396, 1, int3, int4), int0);
    } else if ((int2 < 2)) {
        script5047(int1, 40, 80, int3, int4);
        IF_SETONTIMER(callback(script5046, int0, varclient_1396, 2, int3, int4), int0);
    } else {
        script5047(int1, 80, 112, int3, int4);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}