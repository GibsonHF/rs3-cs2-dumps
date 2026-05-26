//
function script11384(int0: number): void {
    var string0 = "You should activate your guaranteed rarity once you've finished the tutorial.";
    if ((int0 == 1)) {
        IF_SETHIDE(1, 106168358);
        IF_SETHIDE(1, 106168359);
        IF_SETHIDE(1, 106168361);
        IF_SETHIDE(1, 106168363);
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 106168340);
    } else {
        IF_SETHIDE(0, 106168358);
        IF_SETHIDE(0, 106168359);
        IF_SETHIDE(0, 106168361);
        IF_SETHIDE(0, 106168363);
        IF_SETONMOUSEREPEAT(callback(), 106168340);
    };
    return;
}