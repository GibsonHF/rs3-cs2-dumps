//
function script8759(): void {
    if ((varbitplayer_20723 == 1)) {
        IF_SETHIDE(false, comp(247, 21));  // oct13_therm:oct13_therm
        if ((IF_FIND(comp(247, 21)) == 1)) {  // oct13_therm:oct13_therm
            CC_DELETEALL(comp(247, 21));  // oct13_therm:oct13_therm
            CC_CREATE(comp(247, 21), 5, 0);  // oct13_therm:oct13_therm
            CC_SETPOSITION(25, 17, 0, 0);
            CC_SETSIZE(18, 200, 0, 0);
            CC_SETGRAPHIC(21024 as graphic);
            CC_SETONVARTRANSMIT(callback(script8756, 3894, 1));
            CC_CREATE(comp(247, 21), 4, 1);  // oct13_therm:oct13_therm
            CC_SETPOSITION(19, 245, 0, 0);
            CC_SETSIZE(32, 14, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXT("0%");
            CC_SETONVARTRANSMIT(callback(script8756, 3894, 1));
        };
        script8757();
    } else {
        IF_SETHIDE(true, comp(247, 21));  // oct13_therm:oct13_therm
    };
    return;
}