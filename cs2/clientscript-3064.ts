//
function script3064(int0: number): void {
    var int1 = WORLDLIST_SPECIFIC_THISWORLD();
    if ((TESTBIT(int1, 24) == 1)) {
        IF_SETTEXT("Play League", 59375698);
        IF_SETTEXTFONT(58, 59375698);
        IF_SETCOLOUR(0, 59375698);
        IF_SETHIDE(1, 59375682);
        IF_SETHIDE(1, 59375691);
        IF_SETHIDE(0, 59375694);
    } else {
        IF_SETTEXT("Play Now", 59375698);
        IF_SETTEXTFONT(58, 59375698);
        IF_SETCOLOUR(0, 59375698);
        IF_SETHIDE(1, 59375694);
        if ((script6431() == 1)) {
            IF_SETHIDE(0, 59375682);
            IF_SETHIDE(1, 59375691);
        } else {
            IF_SETHIDE(1, 59375682);
            IF_SETHIDE(0, 59375691);
        };
    };
    IF_SETHIDE(int0, 59375699);
    if ((int0 == 1)) {
        IF_SETOP(1, "Play Now", 59375697);
        IF_SETONOP(callback(script3061, -2147483645), 59375697);
        IF_SETCOLOUR(16777215, 59375693);
        IF_SETCOLOUR(16777215, 59375692);
    } else {
        IF_CLEAROPS(59375697);
        IF_SETONOP(callback(), 59375697);
        IF_SETCOLOUR(8224125, 59375693);
        IF_SETCOLOUR(8224125, 59375692);
    };
    script3065(int0);
    return;
}