//[clientscript,sc_remaining_clay_help]
function script1909(): void {
    if ((IF_GETHIDE(comp(806, 27)) == true)) {
        IF_SETHIDE(false, comp(806, 27));
    } else {
        IF_SETHIDE(true, comp(806, 27));
    };
    return;
}