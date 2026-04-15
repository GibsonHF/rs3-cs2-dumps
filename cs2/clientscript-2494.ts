//
function script2494(int0: component, int1: int, string0: string, string1: string): void {
    var string2 = "";
    if ((STRING_LENGTH(string0) > 0)) {
        string2 = `${string0} x${inttostring(int1, 10)}<br>${string1}`;
        IF_SETONMOUSEREPEAT(callback(script12111, string2, int0, -1), int0);
        IF_SETHIDE(0, int0);
    } else {
        IF_SETONMOUSEOVER(callback(), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
        IF_SETHIDE(1, int0);
    };
    return;
}