//
function script1160(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = script1113(int0);
    if ((int4 == 0)) {
        IF_SETHIDE(0, int1);
        IF_SETPARAM_INT(5941, 255, int2);
        IF_SETTRANS(255, int2);
    } else {
        IF_SETHIDE(1, int1);
        IF_SETGRAPHIC(script227(int4), int2);
        IF_SETPARAM_INT(5837, 3, int2);
        IF_SETPARAM_INT(5838, 4, int2);
        IF_SETPARAM_INT(5941, 0, int2);
    };
    return;
}