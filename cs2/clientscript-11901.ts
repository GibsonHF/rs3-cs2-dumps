//
function script11901(): string {
    IF_SETHIDE(true, comp(1930, 173));
    IF_SETHIDE(true, comp(1930, 171));
    IF_SETHIDE(true, comp(1930, 172));
    IF_SETHIDE(true, comp(1930, 175));
    IF_SETHIDE(true, comp(1930, 174));
    var int0 = comp(1930, 170);
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(40, 40, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    switch ((varbitplayer_39302 + 1)) {
        case 2: {
            IF_SETHIDE(false, comp(1930, 175));
            CC_SETONMOUSEREPEAT(callback(script12893, 9802, 2, varbitplayer_39311, 41760, 41760, int0, 0));
            return "Zodiac Shield";
        }
        case 5: {
            IF_SETHIDE(false, comp(1930, 174));
            CC_SETONMOUSEREPEAT(callback(script12893, 9802, 5, varbitplayer_39312, 41761, 41761, int0, 0));
            return "Tea Making Rest";
        }
        case 10: {
            IF_SETHIDE(false, comp(1930, 173));
            CC_SETONMOUSEREPEAT(callback(script12893, 9802, 10, varbitplayer_39310, 41758, 41758, int0, 0));
            return "Foo Lion Pet";
        }
    };
    if ((MODULO((varbitplayer_39302 + 1), 2) == 0)) {
        IF_SETHIDE(false, comp(1930, 172));
        CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(41755 as obj), int0, 0));
        return "Big event mystery box";
    };
    IF_SETHIDE(false, comp(1930, 171));
    CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(41754 as obj), int0, 0));
    return "Event mystery box";
}