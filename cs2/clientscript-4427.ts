//
function script4427(): void {
    IF_SETHIDE(true, comp(1253, 89));
    IF_SETHIDE(true, comp(1253, 171));
    var int0 = 0;
    stack(33711);
    stack(82116613);
    IF_SETGRAPHIC();
    CC_DELETEALL(82116611);
    script7917(82116611, int0++, 0, 75, 1, 0, 100, 100, 0, 0, 33712, 0, 0, 0, 0);
    var int1 = 22975;
    switch (varbitplayer_34046) {
        case 1: {
            int1 = 22975 as graphic;
            break;
        }
        case 2: {
            int1 = 22989 as graphic;
            break;
        }
        case 3: {
            int1 = 22990 as graphic;
            break;
        }
    };
    script7917(comp(1253, 3), int0++, 0, 75, 1, 0, 80, 80, 0, 0, int1, false, false, false, 0);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5837, 1);
    cc_setparam(5938, 0);
    cc_setparam(5939, 40);
    cc_setparam(5940, SCALE(4, 10, 1000));
    CC_SETCOLOUR(16770790);
    script9345(82116611, int0++, -180, -90, 1, 1, 250, 150, 0, 0, -1, 0, 80, 25, -150, 20, 500);
    CC_SETMODELANIM(BAS_GETANIM_READY(4451));
    CC_SETNPCMODEL(27082);
    CC_SETOP(1, "Pet");
    CC_SETONOP(callback(script18841));
    IF_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, -1, -4, 13802, 82116639);
    IF_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, -1, -4, 13802, 82116629);
    IF_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, -1, -4, 13802, 82116634);
    return;
}