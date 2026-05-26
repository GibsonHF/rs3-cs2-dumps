//
function script16587(): void {
    var string0 = "";
    if ((IF_GETHIDE(33882248) == 1)) {
        IF_SETHIDE(0, 33882248);
        script14093(33882248, -1, 29, 1, 0, 1, 20, 2);
        string0 = "Less Storage";
    } else {
        script14093(33882248, -1, 1, 0, 0, 1, 20, 2);
        string0 = "More Storage";
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 33882261, -1), 33882261);
    return;
}