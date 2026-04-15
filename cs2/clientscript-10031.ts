//
function script10031(int0: int): void {
    var int1 = script15603(int0);
    var int2 = script15602(int0);
    if (((int1 == comp(-1, 65535)) || (int2 == comp(-1, 65535)))) {
        return;
    };
    var int3 = 23820;
    var int4 = 23821;
    IF_SETSIZE(IF_GETWIDTH(int2), 20, 0, 0, int1);
    IF_SETPOSITION(IF_GETX(int2), 0, 0, 0, int1);
    IF_SETHIDE(true, int1);
    IF_SETPARAM_INT(8262, -1, int1);
    CC_CREATE(int1, 5, 0);
    CC_SETSIZE(20, 20, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETGRAPHIC(23820 as graphic);
    CC_SETONMOUSEOVER(callback(script688, -2147483645, -2147483643, int4));
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, -2147483643, int3));
    CC_CREATE(int1, 4, 1);
    CC_SETSIZE(20, 20, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETPOSITION(0, 2, 2, 2);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(56);
    return;
}