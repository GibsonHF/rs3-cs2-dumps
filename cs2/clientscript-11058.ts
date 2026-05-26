//
function script11058(): void {
    if (((varbitplayer_27143 > 0) && (struct_getparam(varplayer_5144, 3387) > 1))) {
        if ((varbitplayer_27143 == 10000)) {
            IF_SETTEXT("Friends only", comp(1591, 103));
        } else if ((varbitplayer_27143 == 15000)) {
            IF_SETTEXT("Friends Chat only", comp(1591, 103));
        } else {
            IF_SETTEXT(`PIN: ${inttostring(varbitplayer_27143, 10)}`, comp(1591, 103));
        };
    } else {
        IF_SETTEXT("FFA", comp(1591, 103));
    };
    return;
}