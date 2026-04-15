//
function script19501(int0: component): void {
    var int1 = 0;
    if ((IF_FIND(int0) == 1)) {
        int1 = ((cc_getparam(5945) - CLIENTCLOCK()) / 30);
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int2, int3, int4] = script4705(int1);
    var string0 = script13084(int3, 2);
    var string1 = script13084(int4, 2);
    if ((int3 < 1)) {
        IF_SETTEXT(`<col=EB2F2F>Time remaining:  ${string0}:${string1}`, comp(1313, 24));
    } else {
        IF_SETTEXT(`Time remaining:  ${string0}:${string1}`, comp(1313, 24));
    };
    return;
}