//
function script10878(int0: component): void {
    var int1 = script11319();
    IF_SETSIZE(int1, int1, 0, 0, int0);
    CC_CREATE[1](int0, 5, 0);
    CC_SETSIZE[1]((int1 - 2), (int1 - 2), 0, 0);
    CC_SETPOSITION[1](0, 0, 1, 1);
    CC_CREATE[1](int0, 4, 1);
    CC_SETSIZE[1]((int1 - 4), (int1 - 2), 0, 0);
    CC_SETPOSITION[1](0, 0, 1, 1);
    switch (script11319()) {
        case 38: {
            CC_SETTEXTFONT[1](274 as fontmetrics);
            CC_SETTEXTALIGN[1](1, 1, 0);
            break;
        }
        case 34: {
            CC_SETTEXTFONT[1](65 as fontmetrics);
            CC_SETTEXTALIGN[1](0, 2, 0);
            break;
        }
        case 29: {
            CC_SETTEXTFONT[1](17 as fontmetrics);
            CC_SETTEXTALIGN[1](0, 2, 0);
            break;
        }
        default: {
            CC_SETTEXTFONT[1](17 as fontmetrics);
            CC_SETTEXTALIGN[1](0, 2, 0);
            break;
        }
    };
    CC_SETCOLOUR[1](16777215);
    CC_SETTEXTSHADOW[1](true);
    CC_CREATE[1](int0, 3, 2);
    CC_SETSIZE[1]((int1 - 2), (int1 - 2), 0, 0);
    CC_SETPOSITION[1](0, 0, 1, 1);
    CC_CREATE[1](int0, 4, 3);
    CC_SETSIZE[1](int1, int1, 0, 0);
    CC_SETPOSITION[1](0, 0, 1, 1);
    if ((script6431() == true)) {
        CC_SETNOCLICKTHROUGH[1](true);
    };
    return;
}