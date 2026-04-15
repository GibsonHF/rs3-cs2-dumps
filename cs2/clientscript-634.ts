//
function script634(int0: component, int1: int, int2: unknown_int, int3: int): void {
    var int4 = (IF_GETTRANS(int0) - int3);
    IF_SETTRANS(int4, int0);
    if ((int4 <= int1)) {
        IF_SETONTIMER(callback(script633, int0, int1, int2, int3), int0);
    };
    return;
}