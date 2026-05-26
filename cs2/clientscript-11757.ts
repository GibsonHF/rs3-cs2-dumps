//
function script11757(): void {
    var int0 = 0;
    stack(script20378(0));
    stack(82116613);
    IF_SETGRAPHIC();
    CC_DELETEALL(82116611);
    script7917(82116611, int0++, 158, 125, 0, 0, 20, 20, 0, 0, 16578, 0, 0, 0, 255);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5839, 1000);
    cc_setparam(5837, 0);
    script7917(82116611, int0++, 528, 76, 0, 0, 20, 20, 0, 0, 16578, 0, 0, 0, 255);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5839, 1000);
    cc_setparam(5837, 0);
    script7917(82116611, int0++, 50, 90, 0, 0, 140, 140, 0, 0, script20378(1), 1, 0, 0, 0);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5837, 1);
    cc_setparam(5938, 0);
    cc_setparam(5939, 60);
    cc_setparam(5940, SCALE(3, 4, 1000));
    script2994(82116611, int0++, 590, 80, 0, 0, 130, 130, 0, 0, script20378(1));
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5837, 1);
    cc_setparam(5938, 0);
    cc_setparam(5939, 40);
    cc_setparam(5940, (1000 / 2));
    var int1 = script11760(varbitplayer_50387);
    script2994(82116611, int0++, -74, 108, 1, 0, 200, 200, 0, 0, script20378(2));
    script2994(82116611, int0++, -74, 160, 1, 0, 62, 75, 0, 0, int1);
    CC_SET2DANGLE(SCALE(352, 360, 65536));
    CC_SETONVARTRANSMIT(callback(script11758, -2147483645, -2147483643, 10238, 1));
    var int2 = script16354(varbitplayer_50388);
    script2994(82116611, int0++, 84, 108, 1, 0, 200, 200, 0, 0, script20378(3));
    script2994(82116611, int0++, 86, 172, 1, 0, 57, 50, 0, 0, int2);
    CC_SET2DANGLE(SCALE(8, 360, 65536));
    CC_SETONVARTRANSMIT(callback(script11759, -2147483645, -2147483643, 10238, 1));
    return;
}