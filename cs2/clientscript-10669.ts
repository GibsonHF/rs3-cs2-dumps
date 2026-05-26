//
function script10669(int0: number, int1: number): void {
    IF_SETONTIMER(callback(), 101056543);
    if ((int1 == 1)) {
        IF_SETTEXT(`+ ${inttostring(int0, 10)}`, 101056543);
        IF_SETCOLOUR(65280, 101056543);
    } else {
        IF_SETTEXT(`- ${inttostring(int0, 10)}`, 101056543);
        IF_SETCOLOUR(16711680, 101056543);
    };
    IF_SETTRANS(0, 101056543);
    IF_SETONTIMER(callback(script10670, 101056543), 101056543);
    return;
}