//
function script9711(int0: component, int1: int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = (IF_GETWIDTH(int0) - int1);
    if ((int1 < 75)) {
        int3 = (6 - (int1 / 15));
        IF_SETONTIMER(callback(script9705, int3), comp(1253, 173));
    } else if ((int4 < 75)) {
        int3 = ((int4 / 15) - 6);
        IF_SETONTIMER(callback(script9705, int3), comp(1253, 173));
    } else {
        IF_SETONTIMER(callback(), comp(1253, 173));
    };
    return;
}