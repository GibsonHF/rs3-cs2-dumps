//
function script12177(int0: obj): void {
    var int1 = comp(1712, 3);
    CC_DELETEALL(int1);
    var int2 = 0;
    while ((int2 < 9)) {
        CC_CREATE(int1, 5, int2);
        int2 = (int2 + 1);
    };
    int2 = 0;
    while ((int2 < 9)) {
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETSIZE(32, 32, 0, 0);
            CC_SETPOSITION(((MODULO(int2, 3) * 36) + 2), (((int2 / 3) * 36) + 2), 0, 0);
            CC_SETGRAPHIC(-1 as graphic);
            if ((script12064(int0, int2) == 1)) {
                CC_SETOP(1, "Remove");
                CC_SETONOP(callback(script12185, -2147483645, -2147483643));
                CC_SETONMOUSEREPEAT(callback(script12187, -2147483645, -2147483643));
            };
            CC_SETONDRAGCOMPLETE(callback(script12182, int0, -2147483645, -2147483643, -2147483642, -2147483641));
            CC_SETDRAGDEADZONE(5);
            CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETTEXTFONT[1](66);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](32, 32, 0, 0);
            CC_SETTEXTALIGN[1](0, 0, 0);
            CC_SETHIDE[1](1);
            CC_SETCOLOUR[1](16777215);
            CC_SETTEXTSHADOW[1](1);
            cc_setparam(5531, CC_GETID[1]());
            CC_SETONDRAG(callback(script12179, CC_GETLAYER(), CC_GETID(), CC_GETID[1]()));
        };
        int2 = (int2 + 1);
    };
    return;
}