//[clientscript,worldmap_overlay]
function script2045(int0: component, int1: component, int2: int, int3: int, int4: int): void {
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
        script4(comp(1422, 5), varclient_674, "You are here", 280 as struct, int0, int10, int11, int12, int13);
    } else {
        CC_DELETEALL(comp(1422, 5));
    };
    script4(comp(1422, 6), varclient_623, varclient_2546, varclient_624, int0, int10, int11, int12, int13);
    script4(comp(1422, 7), varclient_625, varclient_2547, varclient_626, int0, int10, int11, int12, int13);
    script4(comp(1422, 8), varclient_627, varclient_2548, varclient_628, int0, int10, int11, int12, int13);
    script4(comp(1422, 9), varclient_629, varclient_2549, varclient_630, int0, int10, int11, int12, int13);
    script4(comp(1422, 10), varclient_940, varclient_2550, varclient_941, int0, int10, int11, int12, int13);
    script4(comp(1422, 11), varclient_5920, varclient_5922, varclient_5921, int0, int10, int11, int12, int13);
    script4(comp(1422, 12), varplayer_2807, "Your marker", 972 as struct, int0, int10, int11, int12, int13);
    script4(comp(1422, 13), varclient_2701, "", 19146 as struct, int0, int10, int11, int12, int13);
    script4(comp(1422, 14), varclient_7088, "", 46325 as struct, int0, int10, int11, int12, int13);
    script4(comp(1422, 16), varclient_4757, "J-Mod", 30968 as struct, int0, int10, int11, int12, int13);
    script4(comp(1422, 17), varclient_4197, "", 28371 as struct, int0, int10, int11, int12, int13);
    if ((varplayer_9063 != -1 as dbrow)) {
        script4(comp(1422, 17), pos(0,45,55,0,0), "", 46106 as struct, int0, int10, int11, int12, int13);
    };
    if ((PLAYERMEMBER() == false)) {
        if ((WORLDMAP_GETCURRENTMAP() == 28 as maparea)) {
            script9331(comp(1422, 20), 24961 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 21), 24962 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 22), 24963 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 23), 24964 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 24), 24965 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 25), 24966 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 26), 24967 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 27), 24968 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 28), 24969 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 29), 24970 as struct, int0, int10, int11, int12, int13);
            script9331(comp(1422, 30), 28259 as struct, int0, int10, int11, int12, int13);
        } else {
            CC_DELETEALL(comp(1422, 20));
            CC_DELETEALL(comp(1422, 21));
            CC_DELETEALL(comp(1422, 22));
            CC_DELETEALL(comp(1422, 23));
            CC_DELETEALL(comp(1422, 24));
            CC_DELETEALL(comp(1422, 25));
            CC_DELETEALL(comp(1422, 26));
            CC_DELETEALL(comp(1422, 27));
            CC_DELETEALL(comp(1422, 28));
            CC_DELETEALL(comp(1422, 29));
            CC_DELETEALL(comp(1422, 30));
        };
    };
    if ((WORLDMAP_GETCURRENTMAP() == 28 as maparea)) {
        script9331(comp(1422, 31), script13350(), int0, int10, int11, int12, int13);
    } else {
        CC_DELETEALL(comp(1422, 31));
    };
    return;
}