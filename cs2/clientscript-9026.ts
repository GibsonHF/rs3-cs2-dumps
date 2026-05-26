//
function script9026(int0: number, int1: number, int2: number, int3: number): void {
    var string0 = script7216(int0, int1, int2);
    IF_SETTEXT(string0, int3);
    if ((STRING_LENGTH(string0) > 20)) {
        IF_SETTEXTFONT(207, int3);
    } else {
        IF_SETTEXTFONT(168, int3);
    };
    return;
}