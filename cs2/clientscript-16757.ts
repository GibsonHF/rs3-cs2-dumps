//
function script16757(int0: obj, int1: int): void {
    CC_SETOP(1, "Examine");
    var string0 = `${script14456(int0)}<br>Unlocks at: ${inttostring(int1, 10)}`;
    if ((script6431() == true)) {
        CC_SETONOP(callback(script16727, string0));
    } else {
        CC_SETONOP(callback(script12868, string0));
    };
    return;
}