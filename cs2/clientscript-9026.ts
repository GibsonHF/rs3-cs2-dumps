//
function script9026(int0: struct, int1: quest, int2: achievement, int3: component): void {
    var string0 = script7216(int0, int1, int2);
    IF_SETTEXT(string0, int3);
    if ((STRING_LENGTH(string0) > 20)) {
        IF_SETTEXTFONT(207 as fontmetrics, int3);
    } else {
        IF_SETTEXTFONT(168 as fontmetrics, int3);
    };
    return;
}