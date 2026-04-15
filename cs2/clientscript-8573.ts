//
function script8573(int0: int): void {
    CC_CREATE(comp(1890, 4), 3, int0);
    CC_SETSIZE(200, 24, 0, 0);
    CC_SETPOSITION(4, ((29 * int0) + 5), 0, 0);
    CC_SETOP(1, "Create preset");
    CC_SETFILL(1);
    CC_SETONOP(callback(script8052, int0));
    CC_SETCOLOUR(script10495(12));
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, script10495(9)));
    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, script10495(12)));
    CC_CREATE(123863045, 4, int0);
    CC_SETTEXT("Create preset");
    CC_SETTEXTFONT(56);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(1);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(200, 25, 0, 0);
    CC_SETPOSITION(10, ((29 * int0) + 3), 0, 0);
    return;
}