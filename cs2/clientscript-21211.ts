//
function script21211(): void {
    var int3 = 0;
    var string0 = "";
    var string1 = "";
    stack(int1);
    script21210();
    [int3, string0, string1] = [];
    if ((int3 == 0)) {
        stack(int1);
        stack(1);
        unk11451();
        return;
    };
    var int4 = ((2500 * 4) + int2);
    var int5 = ((2500 * 7) + int2);
    var int6 = ((2500 * 8) + int2);
    stack(int0);
    stack(int4);
    script21130();
    if ((CC_FINDBYCATEGORY() == 1)) {
        CC_SETTEXT(`Installed version: ${string0}`);
    };
    if ((strcmp(string0, string1) == 0)) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETONTIMER(callback());
        };
        return;
    };
    var string2 = "To update the plugin to the latest version, remove and reinstall the plugin. Your plugin settings will be kept.";
    stack(int0);
    stack(int5);
    script21130();
    if ((CC_FINDBYCATEGORY() == 1)) {
        CC_SETHIDE(false);
        CC_SETTEXT(`Update available: ${string1}`);
        if ((varbitplayer_14817 == 1)) {
            CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
        };
    };
    stack(int0);
    stack(int6);
    script21130();
    if (((CC_FINDBYCATEGORY() == 1) && (varbitplayer_14817 == 0))) {
        CC_SETHIDE(false);
    };
    if ((CC_FIND(int0, int2) == 1)) {
        CC_SETONTIMER(callback());
    };
    return;
}