//
function script11260(int0: number, int1: number, int2: number, int3: number, int4: number): void {
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