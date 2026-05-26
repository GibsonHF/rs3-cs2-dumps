//
function script1773(): void {
    if ((varclient_249 == false)) {
        IF_SETCOLOUR(0, 51839086);
        IF_SETCOLOUR(16750623, 51839087);
        IF_SETHIDE(1, 51839089);
        script2731(51839090, -1, 3);
        IF_SETTEXT("...you keep<br>your items.", 51839090);
    } else {
        IF_SETCOLOUR(16711680, 51839086);
        IF_SETCOLOUR(16776960, 51839087);
        IF_SETHIDE(0, 51839089);
        script2731(51839090, -1, 16776960);
        IF_SETTEXT("...you DROP ALL your items.", 51839090);
    };
    script1784();
    return;
}