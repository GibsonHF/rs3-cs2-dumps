//
function script19285(int0: number): void {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = -1;
    switch (int0) {
        case 1: {
            int1 = varbitplayer_56173;
            int2 = comp(1290, 43);  // trh_dungeon_crawl_overlay:bonus_option_1_button_layer
            int3 = comp(1290, 39);  // trh_dungeon_crawl_overlay:bonus_option_1_button_graphic
            int4 = comp(1290, 218);  // trh_dungeon_crawl_overlay:bonus_option_1_modifier_layer
            int5 = 84541659;
            break;
        }
        case 2: {
            int1 = varbitplayer_56174;
            int2 = comp(1290, 182);  // trh_dungeon_crawl_overlay:bonus_option_2_button_layer
            int3 = comp(1290, 42);  // trh_dungeon_crawl_overlay:bonus_option_2_button_graphic
            int4 = comp(1290, 180);  // trh_dungeon_crawl_overlay:bonus_option_2_modifier_layer
            int5 = 84541621;
            break;
        }
    };
    if ((int1 == 0)) {
        return;
    };
    var int6 = script19215(int1);
    var int7 = dbrow_getfield(varplayer_11901, 1216528, 0);
    var int8 = dbrow_getfield(int7, 1212481, 0);
    var int9 = dbrow_getfield(int7, 1212482, 0);
    switch (int0) {
        case 1: {
            IF_SETOPBASE("<col=B8D1D1>Rarity bonus</col>", int2);
            break;
        }
        case 2: {
            IF_SETOPBASE("<col=B8D1D1>Category bonus</col>", int2);
            break;
        }
    };
    if ((int0 == varplayer_11904)) {
        IF_SETGRAPHIC(dbrow_getfield(int7, 1212483, 0), int3);
        IF_SETONMOUSEOVER(callback(), int2);
        IF_SETONMOUSELEAVE(callback(), int2);
    } else {
        if ((IF_GETGRAPHIC(int3) != int9)) {
            IF_SETGRAPHIC(int8, int3);
        };
        IF_SETONMOUSEOVER(callback(script44, int3, int9), int2);
        IF_SETONMOUSELEAVE(callback(script44, int3, int8), int2);
    };
    if ((int0 == 2)) {
        IF_SETGRAPHIC(1 as graphic, int3);
    };
    var int10 = dbrow_getfield(int6, 1232912, 0);
    var int11 = dbrow_getfield(int6, 1232928, 0);
    var int12 = dbrow_getfield(int6, 1232944, 0);
    var int13 = dbrow_getfield(int6, 1232960, 0);
    var string0 = "";
    var int14 = IF_GETWIDTH(IF_GETPARENTLAYER(int4));
    if (((int11 > 1) || (int12 != 0))) {
        if ((int13 > 1)) {
            int14 = (int14 / 2);
        };
    };
    var int15 = 0;
    int15 = 1;
    script15938(int4, int15, 0, 0, 0, 0, 1, int14, 0, 0, 1);
    CC_DELETEALLNESTED();
    if (((int11 > 1) || (int12 != 0))) {
        if ((int11 > 1)) {
            script7919(int15, 1, 0, 0, 1, 1, 61, 75, 0, 0, script19209(int11), 0, 0, 0, 0);
        } else if ((int12 != 0)) {
            script7919(int15, 1, 0, 0, 1, 1, 60, 60, 0, 0, enum_getvalue(0, 23, 16540 as cs2enum, int12), 0, 0, 0, 0);
        };
    };
    int15 = 2;
    script15938(int4, int15, 0, 0, 0, 2, 1, int14, 0, 0, 1);
    CC_DELETEALLNESTED();
    if ((int13 > 1)) {
        script7919(int15, 1, 0, 0, 1, 1, 80, 80, 0, 0, script10980(int13), 0, 0, 0, 0);
    };
    if ((int10 == 1)) {
        string0 = "<col=FFFFFF>Next floor:</col>";
    } else if ((int10 > 1)) {
        string0 = `<col=FFFFFF>Next ${inttostring(int10, 10)} floors:</col>`;
    };
    if ((int11 > 1)) {
        string0 = `${string0}<br>${script10979(int11)}${script10876(int11)}+</col>`;
    } else if ((int12 != 0)) {
        string0 = `${string0}<br><col=FFFF00>${enum_getvalue(0, 36, 16539 as cs2enum, int12)} category</col>`;
    };
    if ((int13 > 1)) {
        string0 = `${string0}<br><col=FF00>x${inttostring(int13, 10)} multiplier</col>`;
    };
    IF_SETTEXT(string0, int5);
    return;
}