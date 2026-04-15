//
function script9603(string0: string): void {
    if ((STRING_LENGTH(string0) == 0)) {
        IF_SETHIDE(true, comp(1029, 80));
    } else {
        IF_SETTEXTFONT(28 as fontmetrics, comp(1029, 82));
        if ((STRING_LENGTH(string0) >= 35)) {
            IF_SETTEXTFONT(27 as fontmetrics, comp(1029, 82));
        };
        IF_SETTEXT(string0, comp(1029, 82));
        IF_SETHIDE(false, comp(1029, 80));
    };
    return;
}