//
function script16587(): void {
    var string0 = "";
    if ((IF_GETHIDE(comp(517, 136)) == true)) {  // bank:more_storage_container
        IF_SETHIDE(false, comp(517, 136));  // bank:more_storage_container
        script14093(33882248, -1, 29, 1, 0, 1, 20, 2);
        string0 = "Less Storage";
    } else {
        script14093(33882248, -1, 1, 0, 0, 1, 20, 2);
        string0 = "More Storage";
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 33882261, -1), comp(517, 149));  // bank:more_storage
    return;
}