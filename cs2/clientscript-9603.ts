//
function script9603(string0: string): void {
    if ((STRING_LENGTH(string0) == 0)) {
        IF_SETHIDE(1, 67436624);
    } else {
        IF_SETTEXTFONT(28, 67436626);
        if ((STRING_LENGTH(string0) >= 35)) {
            IF_SETTEXTFONT(27, 67436626);
        };
        IF_SETTEXT(string0, 67436626);
        IF_SETHIDE(0, 67436624);
    };
    return;
}