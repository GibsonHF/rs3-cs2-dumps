//
function script11380(): void {
    var int0 = -1;
    CC_DELETEALL(comp(1253, 556));
    while ((++int0 <= 3)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    var int1 = (IF_GETWIDTH(comp(1620, 23)) - 4);
    var int2 = (int1 / 24);
    var int3 = (int2 * 5);
    var int4 = (int2 * 8);
    if ((varbitplayer_27908 >= 5)) {
        stack(2290);
        stack(106168328);
        IF_SETGRAPHIC();
        stack(379);
        stack(106168329);
        IF_SETGRAPHIC();
        stack(33109);
        stack(106168330);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_27908 >= (5 + 8))) {
        stack(2290);
        stack(106168351);
        IF_SETGRAPHIC();
        stack(379);
        stack(106168352);
        IF_SETGRAPHIC();
        stack(33105);
        stack(106168353);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_27908 == 24)) {
        stack(2290);
        stack(106168354);
        IF_SETGRAPHIC();
        stack(379);
        stack(106168355);
        IF_SETGRAPHIC();
        stack(33107);
        stack(106168356);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 106168332);
    };
    var string0 = "";
    string0 = "Pressing activate at this point guarantees you a prize of yellow rarity or above";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168330, -1), 106168330);
    string0 = "Pressing activate at this point guarantees you a prize of orange rarity or above";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168353, -1), 106168353);
    string0 = "Pressing activate at this point guarantees you a prize of red rarity or above";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168356, -1), 106168356);
    string0 = "Activating this gem when fully charged guarantees you a prize of purple rarity";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 106168350, -1), 106168350);
    IF_SETONMOUSEOVER(callback(script16429, 22644, 106168335), 106168359);
    IF_SETONMOUSELEAVE(callback(script16429, 22645, 106168335), 106168359);
    IF_SETONMOUSEOVER(callback(script16429, 22644, 106168360), 106168361);
    IF_SETONMOUSELEAVE(callback(script16429, 22645, 106168360), 106168361);
    IF_SETONMOUSEOVER(callback(script16429, 22644, 106168362), 106168363);
    IF_SETONMOUSELEAVE(callback(script16429, 22645, 106168362), 106168363);
    if (((varbitplayer_27907 > 0) && (varbitplayer_27908 > 0))) {
        IF_SETSIZE((int2 * varbitplayer_27908), 18, 0, 0, comp(1620, 24));
        if ((varbitplayer_27907 == 1)) {
            IF_SETHIDE(false, comp(1620, 5));
        } else if ((varbitplayer_27907 == 2)) {
            IF_SETHIDE(false, comp(1620, 7));
        } else if ((varbitplayer_27907 == 3)) {
            IF_SETHIDE(false, comp(1620, 12));
        };
        IF_SETONTIMER(callback(script11385), comp(1620, 20));
    } else if ((varbitplayer_27908 == 0)) {
        IF_SETSIZE(1, 18, 0, 0, comp(1620, 24));
    } else {
        IF_SETSIZE((int2 * varbitplayer_27908), 18, 0, 0, comp(1620, 24));
    };
    script12710();
    if (((varbitplayer_27910 == 0) && (varbitplayer_27906 == 0))) {
        varbitplayer_27908 = (8 + 5);
        stack(2290);
        stack(106168328);
        IF_SETGRAPHIC();
        stack(379);
        stack(106168329);
        IF_SETGRAPHIC();
        stack(33109);
        stack(106168330);
        IF_SETGRAPHIC();
        stack(2290);
        stack(106168351);
        IF_SETGRAPHIC();
        stack(379);
        stack(106168352);
        IF_SETGRAPHIC();
        stack(33105);
        stack(106168353);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 106168323);
    };
    script12712();
    return;
}