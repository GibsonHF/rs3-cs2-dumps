//
function script20853(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string, string1: string, string2: string): void {
    CC_DELETEALL(comp(1495, 53));  // marketplace_preview:com_53
    if (((int0 == 0) && (int1 != 1))) {
        script2995(97976373, IF_GETNEXTSUBID(comp(1495, 53)), 0, -1, 1, 1, 0, 0, 1, 1, -1, "Claim");  // marketplace_preview:com_53
        CC_SETTEXTFONT(56 as fontmetrics);
        CC_SETCOLOUR(3616030);
        CC_SETTEXTALIGN(1, 1, 0);
        return;
    };
    var int5 = 0;
    var int6 = 0;
    int5 = PARAWIDTH("Buy", IF_GETWIDTH(comp(1495, 53)), 56 as fontmetrics);  // marketplace_preview:com_53
    script2995(97976373, IF_GETNEXTSUBID(comp(1495, 53)), 0, -1, 0, 1, int5, 0, 0, 1, -1, "Buy");  // marketplace_preview:com_53
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETCOLOUR(3616030);
    CC_SETTEXTALIGN(1, 1, 0);
    int6 = (int6 + int5);
    var int7 = script20620(int1);
    if ((int7 != -1)) {
        script2994(97976373, IF_GETNEXTSUBID(comp(1495, 53)), (int6 + 2), 0, 0, 1, 24, 24, 0, 0, int7);  // marketplace_preview:com_53
        int6 = (int6 + (24 + 2));
    };
    if ((STRING_LENGTH(string1) > 0)) {
        var string1 = `<str=372D1E>${string1}</str>`;
        int5 = PARAWIDTH(string1, IF_GETWIDTH(comp(1495, 53)), 56 as fontmetrics);  // marketplace_preview:com_53
        script2995(97976373, IF_GETNEXTSUBID(comp(1495, 53)), (int6 + 2), -1, 0, 1, int5, 0, 0, 1, -1, string1);  // marketplace_preview:com_53
        CC_SETTEXTFONT(56 as fontmetrics);
        if (((int3 == 0) || (int4 == 0))) {
            CC_SETCOLOUR(4601631);
        } else {
            CC_SETCOLOUR(7492897);
        };
        CC_SETTEXTALIGN(1, 1, 0);
        int6 = (int6 + (int5 + 2));
    };
    if ((STRING_LENGTH(string0) == 0)) {
        var string0 = script20466(int0, int2, int1);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        int5 = PARAWIDTH(string0, IF_GETWIDTH(comp(1495, 53)), 56 as fontmetrics);  // marketplace_preview:com_53
        script2995(97976373, IF_GETNEXTSUBID(comp(1495, 53)), (int6 + 2), -1, 0, 1, int5, 0, 0, 1, -1, string0);  // marketplace_preview:com_53
        CC_SETTEXTFONT(56 as fontmetrics);
        CC_SETCOLOUR(3616030);
        CC_SETTEXTALIGN(1, 1, 0);
        int6 = (int6 + (int5 + 2));
    };
    IF_SETSIZE(int6, 0, 0, 1, comp(1495, 53));  // marketplace_preview:com_53
    IF_SETTEXT(script20609(int0, int1), comp(1495, 51));  // marketplace_preview:conversion_price
    if ((STRING_LENGTH(string2) > 0)) {
        IF_SETTEXT(string2, comp(1495, 50));  // marketplace_preview:price
        IF_SETHIDE(false, comp(1495, 48));  // marketplace_preview:currency_icon
    };
    if (((int3 == 0) || (int4 == 0))) {
        IF_SETENABLED(false, comp(1495, 52));  // marketplace_preview:purchase_button_layer
    };
    return;
}