//
function script1773(): void {
    if ((varclient_249 == false)) {
        IF_SETCOLOUR(0, comp(791, 110));
        IF_SETCOLOUR(16750623, comp(791, 111));
        IF_SETHIDE(true, comp(791, 113));
        script2731(comp(791, 114), -1, 3);
        IF_SETTEXT("...you keep<br>your items.", comp(791, 114));
    } else {
        IF_SETCOLOUR(16711680, comp(791, 110));
        IF_SETCOLOUR(16776960, comp(791, 111));
        IF_SETHIDE(false, comp(791, 113));
        script2731(comp(791, 114), -1, 16776960);
        IF_SETTEXT("...you DROP ALL your items.", comp(791, 114));
    };
    script1784();
    return;
}