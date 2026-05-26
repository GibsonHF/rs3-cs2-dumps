//
function script13027(): void {
    if ((varbitplayer_34903 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(150, 1)}`, comp(1824, 33));
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 33));
        IF_SETHIDE(false, comp(1824, 29));
    };
    if ((varbitplayer_34907 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(200, 1)}`, comp(1824, 78));
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 78));
        IF_SETHIDE(false, comp(1824, 74));
    };
    if ((varbitplayer_34923 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(300, 1)}`, comp(1824, 100));
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 100));
        IF_SETHIDE(false, comp(1824, 96));
    };
    if ((varbitplayer_34922 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(350, 1)}`, comp(1824, 67));
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 67));
        IF_SETHIDE(false, comp(1824, 63));
    };
    if ((varbitplayer_34902 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(150, 1)}`, comp(1824, 89));
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 89));
        IF_SETHIDE(false, comp(1824, 85));
    };
    if ((varbitplayer_34908 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(250, 1)}`, comp(1824, 111));
    } else {
        IF_SETTEXT("Unlocked", comp(1824, 111));
        IF_SETHIDE(false, comp(1824, 107));
    };
    if (((((((varbitplayer_34903 == 1) && (varbitplayer_34907 == 1)) && (varbitplayer_34923 == 1)) && (varbitplayer_34922 == 1)) && (varbitplayer_34902 == 1)) && (varbitplayer_34908 == 1))) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(250, 1)}`, comp(1824, 122));
    } else {
        IF_SETTEXT("Locked until all other rewards are unlocked", comp(1824, 122));
        IF_SETHIDE(false, comp(1824, 118));
    };
    return;
}