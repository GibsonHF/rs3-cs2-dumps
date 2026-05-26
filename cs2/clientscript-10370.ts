//
function script10370(int0: number, int1: number, string0: string): void {
    IF_SETOP(int0, string0, int1);
    if ((STRING_LENGTH(string0) == 0)) {
        IF_SETONOP(callback(), int1);
        IF_SETONCLICK(callback(), int1);
    };
    return;
}