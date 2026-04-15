//
function script10766(int0: component, int1: component, int2: int): void {
    if ((varbitplayer_36975 == 1)) {
        return;
    };
    if ((CC_FIND(int0, 2) == 1)) {
        CC_DELETE();
    };
    if ((CC_FIND(int1, 2) == 1)) {
        CC_DELETE();
    };
    if ((script6578(int2) == 0)) {
        script11606(int0, int1, 34828 as struct, 16, 2, 2, 1, "Collapse Buttons", "Collapse Buttons", "");
    } else {
        script11606(int0, int1, 24245 as struct, 16, 2, 2, 1, "Expand Buttons", "Expand Buttons", "");
    };
    if ((CC_FIND(int1, 2) == 1)) {
        CC_SETONOP(callback(script10494, int0, int1, int2));
    };
    return;
}