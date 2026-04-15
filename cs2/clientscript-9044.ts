//
function script9044(int0: int, int1: int): void {
    var int2 = (int0 + 1);
    if ((int2 >= int1)) {
        IF_SETONTIMER(callback(), comp(1253, 0));
        script9046();
    } else {
        IF_SETONTIMER(callback(script9044, int2, int1), comp(1253, 0));
    };
    return;
}