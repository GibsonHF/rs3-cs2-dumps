//
function script21190(): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int3 = -1;
    var int4 = -1;
    var string4 = "";
    stack(int2);
    script21153();
    [string0, string1, string2, string3, int3, int4, string4] = [];
    var string5 = "";
    var int5 = ((2500 * 1) + int1);
    var int6 = ((2500 * 2) + int1);
    var int7 = ((2500 * 3) + int1);
    var int8 = ((2500 * 4) + int1);
    var int9 = ((2500 * 5) + int1);
    var int10 = ((2500 * 6) + int1);
    var int11 = ((2500 * 7) + int1);
    var int12 = ((2500 * 8) + int1);
    var int13 = ((2500 * 9) + int1);
    var int14 = ((2500 * 10) + int1);
    if ((CC_FIND(int0, int1) == 1)) {
        stack(int5);
        script21130();
        script16109(0, 0, 0, 0, 0, 0, 1, 1, int1, 0);
        stack(int6);
        script21130();
        script7918(4, 0, 0, 1, 112, 63, 0, 0, -1);
        stack(string3);
        unk11564();
        stack(int7);
        script21130();
        script10485(120, 2, 0, 0, 300, 18, 0, 0, 17514, string0);
        stack(int9);
        script21130();
        script10485(120, 22, 0, 0, 276, 32, 1, 1, 2100, string2);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETMAXLINES(3);
        CC_SETTEXT(string2);
        CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8805));
        stack(int8);
        script21130();
        script10485(4, 4, 2, 0, 170, 16, 0, 0, 2100, `by ${string1}`);
        CC_SETTEXTALIGN(2, 1, 0);
        stack(int10);
        script21130();
        script10485(4, 22, 2, 0, 170, 16, 0, 0, 2100, `${TOSTRING_LOCALISED(int3, 1)} downloads`);
        CC_SETTEXTALIGN(2, 1, 0);
        switch (int4) {
            case 2: {
                stack(int14);
                script21130();
                script7858(4, 4, 2, 2, 120, 24, 0, 0, 4476, "Installed");
                script7872(0, 1, 0, 0);
                break;
            }
            case 1: {
                stack(int14);
                script21130();
                script7858(4, 4, 2, 2, 120, 24, 0, 0, 4476, "Installing...");
                script7872(0, 1, 0, 0);
                break;
            }
            default: {
                stack(int14);
                script21130();
                script7858(4, 4, 2, 2, 120, 24, 0, 0, 4476, "Install");
                CC_SETOP(1, `Install ${string0}`);
                stack(21191);
                stack(-2147483645);
                stack(int1);
                stack(int2);
                stack(string0);
                CC_SETONOP("iiis");
                string5 = `Install ${string0}.`;
                CC_SETONMOUSEREPEAT(callback(script8799, string5, -2147483645, -2147483643));
                break;
            }
        };
        stack(int11);
        script21130();
        script15937((120 + (4 * 2)), 4, 2, 2, 24, 24, 0, 0);
        stack(int12);
        script21130();
        script7858(0, 0, 1, 1, 0, 0, 1, 1, callback(script14908));
        CC_SETOP(1, "More Information");
        stack(21152);
        stack(-2147483645);
        stack(1);
        stack(int2);
        stack(string4);
        CC_SETONOP("iiis");
        string5 = `Visit Mod.io for more information about ${string0}.`;
        CC_SETONMOUSEREPEAT(callback(script8799, string5, -2147483645, -2147483643));
        stack(int13);
        script21130();
        script7918(0, 0, 1, 1, 18, 18, 0, 0, 36606);
        CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, 36606));
        CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, 36606));
    };
    IF_SETHIDE(true, comp(1586, 22));  // plugin_hub_parent_manage:uninstall_listener
    return;
}