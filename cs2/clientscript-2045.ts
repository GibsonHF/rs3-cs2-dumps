//[clientscript,worldmap_overlay]
function script2045(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int1 == comp(-1, 65535))) {
        var int1 = script8101();
    };
    if ((WORLDMAP_ISLOADED() == 0)) {
        script2046(int0);
        return;
    };
    var int5 = IF_GETWIDTH(int1);
    if ((int5 <= 0)) {
        return;
    };
    if ((IF_GETWIDTH(int0) <= 0)) {
        return;
    };
    var int6 = 0;
    var int7 = 0;
    [int6, int7] = WORLDMAP_GETSIZE();
    if ((int6 <= 0)) {
        return;
    };
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = WORLDMAP_GETDISPLAYPOSITION();
    var int10 = (int9 + (int7 / 2));
    var int11 = (int9 - (int7 / 2));
    var int12 = (int8 + (int6 / 2));
    var int13 = (int8 - (int6 / 2));
    int13 = (int13 + SCALE(int6, int5, (int5 - IF_GETWIDTH(int0))));
    if ((((int8 != int2) || (int9 != int3)) || (int7 != int4))) {
        IF_SETONTIMER(callback(script2045, int0, int1, int8, int9, int7), int0);
        script295(int0, int10, int11, int12, int13);
    };
    if ((varbitplayer_14109 == 0)) {
        script4(93192197, varclient_674, "You are here", 280, int0, int10, int11, int12, int13);
    } else {
        CC_DELETEALL(comp(1422, 5));  // worldmap_v2_ui:you_are_here
    };
    script4(93192198, varclient_623, varclient_2546, varclient_624, int0, int10, int11, int12, int13);
    script4(93192199, varclient_625, varclient_2547, varclient_626, int0, int10, int11, int12, int13);
    script4(93192200, varclient_627, varclient_2548, varclient_628, int0, int10, int11, int12, int13);
    script4(93192201, varclient_629, varclient_2549, varclient_630, int0, int10, int11, int12, int13);
    script4(93192202, varclient_940, varclient_2550, varclient_941, int0, int10, int11, int12, int13);
    script4(93192203, varclient_5920, varclient_5922, varclient_5921, int0, int10, int11, int12, int13);
    script4(93192204, varplayer_2807, "Your marker", 972, int0, int10, int11, int12, int13);
    script4(93192205, varclient_2701, "", 19146, int0, int10, int11, int12, int13);
    script4(93192206, varclient_7088, "", 46325, int0, int10, int11, int12, int13);
    script4(93192208, varclient_4757, "J-Mod", 30968, int0, int10, int11, int12, int13);
    script4(93192209, varclient_4197, "", 28371, int0, int10, int11, int12, int13);
    if ((varplayer_9063 != -1)) {
        script4(93192209, 47189440, "", 46106, int0, int10, int11, int12, int13);
    };
    if ((PLAYERMEMBER() == 0)) {
        if ((WORLDMAP_GETCURRENTMAP() == 28)) {
            script9331(93192212, 24961, int0, int10, int11, int12, int13);
            script9331(93192213, 24962, int0, int10, int11, int12, int13);
            script9331(93192214, 24963, int0, int10, int11, int12, int13);
            script9331(93192215, 24964, int0, int10, int11, int12, int13);
            script9331(93192216, 24965, int0, int10, int11, int12, int13);
            script9331(93192217, 24966, int0, int10, int11, int12, int13);
            script9331(93192218, 24967, int0, int10, int11, int12, int13);
            script9331(93192219, 24968, int0, int10, int11, int12, int13);
            script9331(93192220, 24969, int0, int10, int11, int12, int13);
            script9331(93192221, 24970, int0, int10, int11, int12, int13);
            script9331(93192222, 28259, int0, int10, int11, int12, int13);
        } else {
            CC_DELETEALL(comp(1422, 20));  // worldmap_v2_ui:upsell0
            CC_DELETEALL(comp(1422, 21));  // worldmap_v2_ui:upsell1
            CC_DELETEALL(comp(1422, 22));  // worldmap_v2_ui:upsell2
            CC_DELETEALL(comp(1422, 23));  // worldmap_v2_ui:upsell3
            CC_DELETEALL(comp(1422, 24));  // worldmap_v2_ui:upsell4
            CC_DELETEALL(comp(1422, 25));  // worldmap_v2_ui:upsell5
            CC_DELETEALL(comp(1422, 26));  // worldmap_v2_ui:upsell6
            CC_DELETEALL(comp(1422, 27));  // worldmap_v2_ui:upsell7
            CC_DELETEALL(comp(1422, 28));  // worldmap_v2_ui:upsell8
            CC_DELETEALL(comp(1422, 29));  // worldmap_v2_ui:upsell9
            CC_DELETEALL(comp(1422, 30));  // worldmap_v2_ui:upsell10
        };
    };
    if ((WORLDMAP_GETCURRENTMAP() == 28)) {
        script9331(93192223, script13350(), int0, int10, int11, int12, int13);
    } else {
        CC_DELETEALL(comp(1422, 31));  // worldmap_v2_ui:newcontent_upsell0
    };
    return;
}