//
function script11384(int0: unknown_int): void {
    var string0 = "You should activate your guaranteed rarity once you've finished the tutorial.";
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1620, 38));
        IF_SETHIDE(true, comp(1620, 39));
        IF_SETHIDE(true, comp(1620, 41));
        IF_SETHIDE(true, comp(1620, 43));
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 106168340);
    } else {
        IF_SETHIDE(false, comp(1620, 38));
        IF_SETHIDE(false, comp(1620, 39));
        IF_SETHIDE(false, comp(1620, 41));
        IF_SETHIDE(false, comp(1620, 43));
        IF_SETONMOUSEREPEAT(callback(), comp(1620, 20));
    };
    return;
}