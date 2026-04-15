//
function script8440(int0: component, string0: string, string1: string, string2: string, string3: string): void {
    if ((CC_FIND(int0, 7) == 1)) {
        if ((strcmp("", string0) != 0)) {
            CC_SETOP(1, string0);
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script8805));
        } else {
            CC_CLEAROPS();
            CC_SETONMOUSEREPEAT(callback());
            CC_SETONMOUSELEAVE(callback());
        };
    };
    if ((CC_FIND(int0, 8) == 1)) {
        if ((strcmp("", string1) != 0)) {
            CC_SETOP(1, string1);
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script8805));
        } else {
            CC_CLEAROPS();
            CC_SETONMOUSEREPEAT(callback());
            CC_SETONMOUSELEAVE(callback());
        };
    };
    if ((CC_FIND(int0, 9) == 1)) {
        if ((strcmp("", string2) != 0)) {
            CC_SETOP(1, string2);
            CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script8805));
        } else {
            CC_CLEAROPS();
            CC_SETONMOUSEREPEAT(callback());
            CC_SETONMOUSELEAVE(callback());
        };
    };
    if ((CC_FIND(int0, 10) == 1)) {
        if ((strcmp("", string3) != 0)) {
            CC_SETOP(1, string3);
            CC_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script8805));
        } else {
            CC_CLEAROPS();
            CC_SETONMOUSEREPEAT(callback());
            CC_SETONMOUSELEAVE(callback());
        };
    };
    if ((CC_FIND(int0, 11) == 1)) {
        var string3 = "Filter the display.";
        CC_SETOP(1, "View filters");
        CC_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8805));
    };
    return;
}