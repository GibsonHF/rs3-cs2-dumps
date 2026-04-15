//
function script10370(int0: int, int1: component, string0: string): void {
    IF_SETOP(int0, string0, int1);
    if ((STRING_LENGTH(string0) == 0)) {
        IF_SETONOP(callback(), int1);
        IF_SETONCLICK(callback(), int1);
    };
    return;
}