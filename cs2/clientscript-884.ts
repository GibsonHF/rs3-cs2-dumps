//
function script884(): string {
    var int0 = 126484523;
    if ((IF_FIND(int0) == 1)) {
        if ((MODULO((varbitplayer_39302 + 1), 2) == 0)) {
            CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(41755), int0, 0));
            IF_SETHIDE(0, 126484705);
            return "Big event mystery box";
        };
        CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(41754), int0, 0));
        IF_SETHIDE(0, 126484704);
        return "Event mystery box";
    };
    return "";
}