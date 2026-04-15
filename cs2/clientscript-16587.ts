//
function script16587(): void {
    var string0 = "";
    if ((IF_GETHIDE(comp(517, 136)) == true)) {
        IF_SETHIDE(false, comp(517, 136));
        script14093(comp(517, 136), -1, 29, 1, 0, 1, 20, 2);
        string0 = "Less Storage";
    } else {
        script14093(comp(517, 136), -1, 1, 0, 0, 1, 20, 2);
        string0 = "More Storage";
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 33882261, -1), 33882261);
    return;
}