//
function script7458(int0: unknown_int, int1: component, int2: int, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 255;
    var int6 = 2;
    if ((int3 == 255)) {
        int6 = (0 - int6);
    };
    var int2 = (int2 + int6);
    if ((int3 == 0)) {
        if ((int2 >= int5)) {
            var int3 = 255;
        };
    } else if (((int3 == 255) && (int2 <= int4))) {
        int3 = 0;
    };
    IF_SETTRANS(int2, int1);
    IF_SETONTIMER(callback(script7458, int0, int1, int2, int3), int0);
    return;
}