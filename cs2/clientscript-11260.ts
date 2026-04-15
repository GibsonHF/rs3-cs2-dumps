//
function script11260(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): void {
    if ((IF_GETWIDTH(int0) > 30)) {
        IF_SETONTIMER(callback(script11262, int0, int3), int0);
        script9554(int1, int2, int3, " ", int4);
        IF_SETHIDE(1, 105513084);
    } else {
        IF_SETONTIMER(callback(script11261, int0, int3), int0);
        script9554(int1, int2, int3, "JMod Toolbox", int4);
        IF_SETHIDE(0, int3);
        IF_SETHIDE(0, 105513084);
    };
    return;
}