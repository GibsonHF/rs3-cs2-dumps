//
function script14741(string0: string, string1: string): void {
    if ((script6431() == true)) {
        if ((STRING_LENGTH(string1) > 0)) {
            var string0 = `${string0}<br>${string1}`;
        };
        CC_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0));
    } else {
        CC_SETONMOUSEREPEAT(callback(script14732, string0, string1, -2147483645, -2147483643));
    };
    return;
}