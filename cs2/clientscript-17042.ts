//
function script17042(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int3 == -1)) {
        var int3 = UI_GETDYNID(int2);
        var int2 = UI_GETCATEGORY(int2);
    };
    if ((CC_FINDBYCATEGORY(int1, int2, int3) == 1)) {
        if ((int0 < 0)) {
            CC_SETTEXT("");
            return;
        };
        if ((int0 > 99)) {
            CC_SETTEXTFONT(70);
            CC_SETTEXT("99+");
            return;
        };
        if ((int4 < 35)) {
            if ((int0 < 9)) {
                CC_SETTEXTFONT(210);
            } else {
                CC_SETTEXTFONT(207);
            };
        } else if ((int4 > 35)) {
            CC_SETTEXTFONT(215);
        } else {
            CC_SETTEXTFONT(213);
        };
        CC_SETTEXT(inttostring(int0, 10));
    };
    return;
}