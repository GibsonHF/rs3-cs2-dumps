//
function script10669(int0: int, int1: unknown_int): void {
    IF_SETONTIMER(callback(), comp(1542, 31));
    if ((int1 == 1)) {
        IF_SETTEXT(`+ ${inttostring(int0, 10)}`, comp(1542, 31));
        IF_SETCOLOUR(65280, comp(1542, 31));
    } else {
        IF_SETTEXT(`- ${inttostring(int0, 10)}`, comp(1542, 31));
        IF_SETCOLOUR(16711680, comp(1542, 31));
    };
    IF_SETTRANS(0, comp(1542, 31));
    IF_SETONTIMER(callback(script10670, 101056543), comp(1542, 31));
    return;
}