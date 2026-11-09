//
function script21190(): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int4 = -1;
    var int5 = -1;
    var string4 = "";
    var int6 = -1;
    var string5 = "File size: ";
    var string6 = "";
    stack(int2);
    script21153();
    [string0, string1, string2, string3, int4, int5, string4, int6] = [];
    var int7 = 0;
    var int8 = 0;
    unk12259();
    [int7, int8] = [];
    if (((int7 == int2) && (int8 == 3))) {
        int5 = 1;
    };
    var string7 = "";
    var int9 = ((2500 * 1) + int1);
    var int10 = ((2500 * 2) + int1);
    var int11 = ((2500 * 3) + int1);
    var int12 = ((2500 * 4) + int1);
    var int13 = ((2500 * 5) + int1);
    var int14 = ((2500 * 6) + int1);
    var int15 = ((2500 * 7) + int1);
    var int16 = ((2500 * 8) + int1);
    var int17 = ((2500 * 9) + int1);
    var int18 = ((2500 * 10) + int1);
    if ((CC_FIND(int0, int1) == 1)) {
        stack(int9);
        script21130();
        script16109(0, 0, 0, 0, 0, 0, 1, 1, int1, 0);
        stack(int10);
        script21130();
        script7918(4, 0, 0, 1, 112, 63, 0, 0, -1);
        stack(string3);
        unk11564();
        stack(int11);
        script21130();
        script10485(120, 2, 0, 0, 300, 18, 0, 0, 17514, string0);
        stack(int13);
        script21130();
        script10485(120, 22, 0, 0, 276, 32, 1, 1, 2100, string2);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETMAXLINES(3);
        CC_SETTEXT(string2);
        CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8805));
        stack(int12);
        script21130();
        script10485(4, 4, 2, 0, 170, 16, 0, 0, 2100, `by ${string1}`);
        CC_SETTEXTALIGN(2, 1, 0);
        if ((int3 == 0)) {
            stack(int14);
            script21130();
            script10485(4, 22, 2, 0, 170, 16, 0, 0, 2100, `${TOSTRING_LOCALISED(int4, 1)} downloads`);
        } else {
            if ((int6 < 100)) {
                string5 = `${string5}<lt>1 MB`;
            } else if ((int6 >= 500)) {
                string5 = `<col=EB2F2F>${string5}${script7653(int6, 2, 1, 1, 1)} MB</col><sprite=21748>`;
                string6 = "Warning: This plugin may take longer to download and install.";
            } else {
                string5 = `${string5}${script7653(int6, 2, 1, 1, 1)} MB`;
            };
            stack(int14);
            script21130();
            script10485(4, 22, 2, 0, 170, 16, 0, 0, 2100, string5);
            if ((STRING_LENGTH(string6) > 0)) {
                CC_SETONMOUSEREPEAT(callback(script8799, string6, -2147483645, -2147483643));
            };
        };
        CC_SETTEXTALIGN(2, 1, 0);
        if ((int3 == 0)) {
            switch (int5) {
                case 2: {
                    stack(int18);
                    script21130();
                    script7858(4, 4, 2, 2, 120, 24, 0, 0, 4476, "Installed");
                    script7872(0, 1, 0, 0);
                    break;
                }
                case 1: {
                    stack(int18);
                    script21130();
                    script7858(4, 4, 2, 2, 120, 24, 0, 0, 4476, "Installing...");
                    script7872(0, 1, 0, 0);
                    break;
                }
                default: {
                    stack(int18);
                    script21130();
                    script7858(4, 4, 2, 2, 120, 24, 0, 0, 4476, "Install");
                    CC_SETOP(1, `Install ${string0}`);
                    stack(21191);
                    stack(-2147483645);
                    stack(int1);
                    stack(int2);
                    stack(string0);
                    CC_SETONOP("iiis");
                    string7 = `Install ${string0}.`;
                    CC_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -2147483643));
                    break;
                }
            };
        };
        if ((int3 == 0)) {
            stack(int15);
            script21130();
            script15937((120 + (4 * 2)), 4, 2, 2, 24, 24, 0, 0);
        } else {
            stack(int15);
            script21130();
            script15937(4, 4, 2, 2, 24, 24, 0, 0);
        };
        stack(int16);
        script21130();
        script7858(0, 0, 1, 1, 0, 0, 1, 1, callback(script14908));
        CC_SETOP(1, "More Information");
        stack(21152);
        stack(-2147483645);
        stack(1);
        stack(int2);
        stack(string4);
        CC_SETONOP("iiis");
        string7 = `Visit Mod.io for more information about ${string0}.`;
        CC_SETONMOUSEREPEAT(callback(script8799, string7, -2147483645, -2147483643));
        stack(int17);
        script21130();
        script7918(0, 0, 1, 1, 18, 18, 0, 0, 36606);
        CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, 36606));
        CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, 36606));
    };
    IF_SETHIDE(true, comp(1586, 22));  // plugin_hub_parent_manage:uninstall_listener
    return;
}