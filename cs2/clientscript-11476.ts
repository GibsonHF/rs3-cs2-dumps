//
function script11476(int0: component, int1: int, string0: string): void {
    var int2 = 0;
    var string1 = "";
    CC_SETONMOUSEOVER(callback(script3031, int0, int1));
    CC_SETONMOUSELEAVE(callback(script3036));
    if ((STRING_LENGTH(string0) > 0)) {
        int2 = (STRINGWIDTH(`Last known as: ${string0}`, 66 as fontmetrics) + 8);
        if ((int2 > IF_GETWIDTH(comp(909, 27)))) {
            string1 = `Last known as:<br>${string0}`;
        } else {
            string1 = `Last known as: ${string0}`;
        };
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
    };
    return;
}