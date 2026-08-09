//
function script4427(): void {
    IF_SETHIDE(true, comp(1253, 89));
    IF_SETHIDE(true, comp(1253, 171));
    var int0 = 0;
    IF_SETGRAPHIC(33711 as graphic, comp(1253, 5));
    CC_DELETEALL(comp(1253, 3));
    stack(82116611);
    stack(int0);
    int0 = (int0 + 1);
    script7917(0, 75, 1, 0, 100, 100, 0, 0, 33712, 0, 0, 0, 0);
    var int1 = 22975;
    switch (varbitplayer_34046) {
        case 1: {
            int1 = 22975;
            break;
        }
        case 2: {
            int1 = 22989;
            break;
        }
        case 3: {
            int1 = 22990;
            break;
        }
    };
    stack(82116611);
    stack(int0);
    int0 = (int0 + 1);
    script7917(0, 75, 1, 0, 80, 80, 0, 0, int1, 0, 0, 0, 0);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5837, 1);
    cc_setparam(5938, 0);
    cc_setparam(5939, 40);
    cc_setparam(5940, SCALE(4, 10, 1000));
    CC_SETCOLOUR(16770790);
    stack(82116611);
    stack(int0);
    int0 = (int0 + 1);
    script9345(-180, -90, 1, 1, 250, 150, 0, 0, -1, 0, 80, 25, -150, 20, 500);
    CC_SETMODELANIM(BAS_GETANIM_READY(4451 as bas));
    CC_SETNPCMODEL(27082 as npc);
    CC_SETOP(1, "Pet");
    CC_SETONOP(callback(script18841));
    IF_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, -1, -4, 13802 as material, comp(1253, 31));
    IF_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, -1, -4, 13802 as material, comp(1253, 21));
    IF_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, -1, -4, 13802 as material, comp(1253, 26));
    return;
}