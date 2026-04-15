//
function script1160(int0: int, int1: component, int2: component, int3: unknown_int): void {
    var int4 = script1113(int0);
    if ((int4 == 0)) {
        IF_SETHIDE(false, int1);
        IF_SETPARAM_INT(5941, 255, int2);
        IF_SETTRANS(255, int2);
    } else {
        IF_SETHIDE(true, int1);
        stack(script227(int4));
        stack(int2);
        IF_SETGRAPHIC();
        IF_SETPARAM_INT(5837, 3, int2);
        IF_SETPARAM_INT(5838, 4, int2);
        IF_SETPARAM_INT(5941, 0, int2);
    };
    return;
}