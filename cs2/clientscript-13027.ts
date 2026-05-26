//
function script13027(): void {
    if ((varbitplayer_34903 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(150, 1)}`, 119537697);
    } else {
        IF_SETTEXT("Unlocked", 119537697);
        IF_SETHIDE(0, 119537693);
    };
    if ((varbitplayer_34907 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(200, 1)}`, 119537742);
    } else {
        IF_SETTEXT("Unlocked", 119537742);
        IF_SETHIDE(0, 119537738);
    };
    if ((varbitplayer_34923 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(300, 1)}`, 119537764);
    } else {
        IF_SETTEXT("Unlocked", 119537764);
        IF_SETHIDE(0, 119537760);
    };
    if ((varbitplayer_34922 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(350, 1)}`, 119537731);
    } else {
        IF_SETTEXT("Unlocked", 119537731);
        IF_SETHIDE(0, 119537727);
    };
    if ((varbitplayer_34902 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(150, 1)}`, 119537753);
    } else {
        IF_SETTEXT("Unlocked", 119537753);
        IF_SETHIDE(0, 119537749);
    };
    if ((varbitplayer_34908 == 0)) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(250, 1)}`, 119537775);
    } else {
        IF_SETTEXT("Unlocked", 119537775);
        IF_SETHIDE(0, 119537771);
    };
    if (((((((varbitplayer_34903 == 1) && (varbitplayer_34907 == 1)) && (varbitplayer_34923 == 1)) && (varbitplayer_34922 == 1)) && (varbitplayer_34902 == 1)) && (varbitplayer_34908 == 1))) {
        IF_SETTEXT(`Rep: ${TOSTRING_LOCALISED(250, 1)}`, 119537786);
    } else {
        IF_SETTEXT("Locked until all other rewards are unlocked", 119537786);
        IF_SETHIDE(0, 119537782);
    };
    return;
}