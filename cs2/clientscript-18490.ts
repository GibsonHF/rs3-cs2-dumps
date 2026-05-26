//
function script18490(int0: number, int1: number, string0: string): void {
    if ((int0 != -1)) {
        IF_SETTEXT(string0, int0);
        if (((MAP_LANG() != 0) || (STRING_LENGTH(string0) > 30))) {
            IF_SETTEXTFONT(57, int0);
        } else {
            IF_SETTEXTFONT(58, int0);
        };
    };
    var string1 = "";
    if ((int1 != -1)) {
        string1 = `${string0}/Quick guide`;
        IF_SETONBUTTONCLICK(callback(script7808, string1), int1);
    } else if ((int0 == 98304021)) {
        IF_SETHIDE(1, 98304002);
        IF_SETHIDE(1, 98304014);
        IF_SETHIDE(1, 98304007);
    };
    return;
}