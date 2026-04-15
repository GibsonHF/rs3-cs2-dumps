//
function script15518(): void {
    if ((script6431() == true)) {
        return;
    };
    var int0 = -1;
    var int1 = 0;
    var int2 = IF_GETNEXTSUBID(comp(784, 43));
    var int3 = 0;
    while ((int3 == 0)) {
        if ((CC_FIND(comp(784, 43), ++int0) == 1)) {
            int1 = cc_getparam(885);
            if ((int1 > 0)) {
                CC_CREATE[1](comp(784, 43), 4, int2);
                CC_SETSIZE[1](32, 32, 0, 0);
                CC_SETPOSITION[1](0, (CC_GETY() + ((36 - 32) / 2)), 0, 0);
                if ((int1 == 10)) {
                    CC_SETTEXT[1]("0");
                } else {
                    CC_SETTEXT[1](inttostring(int1, 10));
                };
                CC_SETCOLOUR[1](script10495(16777215));
                CC_SETTEXTFONT[1](29 as fontmetrics);
                CC_SETTEXTALIGN[1](1, 1, 0);
                CC_SETTEXTSHADOW[1](true);
                int2 = (int2 + 1);
            };
        } else {
            int3 = 1;
        };
    };
    return;
}