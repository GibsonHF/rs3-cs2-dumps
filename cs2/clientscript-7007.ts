//
function script7007(int0: component): void {
    var int1 = comp(-1, 65535);
    var int2 = script7980(int0);
    if ((int2 != -1)) {
        int1 = script7975(1430, int2);
        IF_SETTRANS(255, int1);
        IF_SETONMOUSEOVER(callback(script7016, -2147483645, 1), int1);
        IF_SETONMOUSELEAVE(callback(script7016, -2147483645, 0), int1);
    };
    return;
}