//
function script1904(int0: unknown_int, int1: component, int2: component, int3: int): void {
    CC_DELETEALL(int1);
    if ((STRING_LENGTH(script8611(int3)) > 0)) {
        script1902(int0, int1, int2, int3);
    } else {
        IF_SETSCROLLSIZE(0, 0, int1);
        script1905(int1, int2);
    };
    return;
}