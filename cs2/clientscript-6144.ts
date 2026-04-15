//
function script6144(int0: unknown_int): void {
    var int1 = 1;
    var int2 = 14;
    var int3 = comp(-1, 65535);
    IF_SETHIDE(true, comp(1270, 14));
    while ((int1 <= int2)) {
        int3 = script6139(int1);
        if ((CC_FIND(int3, 0) == 1)) {
            IF_SETONTIMER(callback(script6145, -2147483645, CC_GETX(), CC_GETY(), (0 - RANDOM(50)), int0), int3);
        };
        int1 = (int1 + 1);
    };
    return;
}