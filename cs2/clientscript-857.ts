//
function script857(int0: number, int1: number, int2: number): void {
    var int3 = IF_GETWIDTH(int0);
    if (((int3 >= int1) || (int3 >= int2))) {
        IF_SETONTIMER(callback(), comp(202, 2));
        return;
    };
    int3 = (int3 + 1);
    IF_SETSIZE(int3, 8, 0, 0, int0);
    return;
}