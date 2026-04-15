//
function script1537(int0: unknown_int): void {
    var string0 = "Tutorial text";
    var string1 = "New Island!";
    switch (int0) {
        case 0: {
            string1 = "Lightning Storm";
            string0 = "<col=DC7800>To gain Anima Mundi energy from this island you can:<br><br><col=B4DCFF>-Construct lightning collectors<br><br><col=96C8FF>-Defeat lightning and hand in electric charge<br><br><col=B4DCFF>-Lure Sentient lightning to the core<br><br><col=96C8FF>-Intercept lightning strikes and divert their energy to the central spark.";
            break;
        }
        case 1: {
            string1 = "Overgrown Remnants";
            string0 = "<col=DC7800>To gain Anima Mundi energy from this land you can:<br><br><col=B4DCFF>-Use herbs to nuture the roots. Herbs can be obtained from woodcutting obstacles or defeating out of control vines.<br><br><col=96C8FF>-When a nutured root meets a pod, it will grow and form a flower. Handing a flower seed into the core plant will unleash Anima.";
            break;
        }
        case 2: {
            string1 = "Lost Souls";
            string0 = "<col=DC7800>To gain Anima Mundi energy from this land you can:<br><br><col=B4DCFF>-Use Holy fire to defeat corrupted growths.<br><br>OR:<br><br><col=96C8FF>-Collect a relic from the altar to visit the underworld to find the lost soul to return to the altar.<br><br><col=B4DCFF>-Enter the underworld to ferry tormented souls back to the real world. Defeat them to take control of their spirit and guide them to the next world.";
            break;
        }
        case 3: {
            string1 = "Broken Land";
            string0 = "<col=DC7800>To gain Anima Mundi energy from this land you can:<br><br><col=B4DCFF>-Siphon it directly from activated runestones in the land. You may only travel in a clockwise direction.<br><br><col=B4DCFF>-One person randomly obtains a gatestone every 30 seconds and can be teleported to if you wish.";
            break;
        }
        default: {
            return;
        }
    };
    IF_SETTEXT(string1, comp(18, 7));
    IF_SETTEXT(string0, comp(18, 8));
    var int1 = (25 + (14 * PARAHEIGHT(string0, 340, 26 as fontmetrics)));
    IF_SETPOSITION(0, (int1 - 20), 1, 2, comp(18, 7));
    if ((IF_GETHEIGHT(comp(18, 22)) != 0)) {
        IF_SETONTIMER(callback(script1539, int1), comp(18, 14));
    };
    return;
}