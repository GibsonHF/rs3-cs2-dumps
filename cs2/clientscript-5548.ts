//
function script5548(): void {
    var int0 = -1 as struct;
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = -1;
    var int4 = ENUM_GETOUTPUTCOUNT(5348 as cs2enum);
    int3 = (int3 + 1);
    while ((int3 < int4)) {
        if ((int2 == 0)) {
            int0 = enum_getvalue(0, 73, 5348 as cs2enum, int3);
            int1 = struct_getparam(int0, 6991);
            if (((varplayer_3079 < struct_getparam(int1, 4632)) && (varplayer_3079 >= script766(int1)))) {
                int2 = 1;
            };
        };
        if ((int2 == 0)) {
            return;
        };
        if (((int0 == -1 as struct) || (int1 == -1 as struct))) {
            return;
        };
        IF_SETGRAPHIC(struct_getparam(int0, 6992), comp(1178, 3));  // trh_bingo:content_layer_bg
        IF_SETTEXT(struct_getparam(int0, 6993), comp(1178, 8));  // trh_bingo:total_stickers_label
        IF_SETTEXT(`Prestige ${inttostring(script5537(int1), 10)}/${inttostring(5, 10)}`, comp(1178, 5));  // trh_bingo:prestige_level
        script11636(int1);
        IF_SETGRAPHIC(struct_getparam(int0, 6994), comp(1178, 7));  // trh_bingo:use_stamp_btn_graphic
        IF_SETONMOUSEOVER(callback(script44, 77201415, struct_getparam(int0, 6995)), comp(1178, 7));  // trh_bingo:use_stamp_btn_graphic
        IF_SETONMOUSELEAVE(callback(script5549, int1, int0), comp(1178, 7));  // trh_bingo:use_stamp_btn_graphic
        script14117(int1, int0);
        IF_SETGRAPHIC(struct_getparam(int0, 6996), comp(1178, 22));  // trh_bingo:easy_task_bg_1
        IF_SETGRAPHIC(struct_getparam(int0, 6998), comp(1178, 25));  // trh_bingo:easy_task_bg_2
        IF_SETGRAPHIC(struct_getparam(int0, 7000), comp(1178, 28));  // trh_bingo:easy_task_bg_3
        IF_SETGRAPHIC(struct_getparam(int0, 7002), comp(1178, 31));  // trh_bingo:easy_task_bg_4
        IF_SETONMOUSEOVER(callback(script44, 77201430, struct_getparam(int0, 6997)), comp(1178, 22));  // trh_bingo:easy_task_bg_1
        IF_SETONMOUSEOVER(callback(script44, 77201433, struct_getparam(int0, 6999)), comp(1178, 25));  // trh_bingo:easy_task_bg_2
        IF_SETONMOUSEOVER(callback(script44, 77201436, struct_getparam(int0, 7001)), comp(1178, 28));  // trh_bingo:easy_task_bg_3
        IF_SETONMOUSEOVER(callback(script44, 77201439, struct_getparam(int0, 7003)), comp(1178, 31));  // trh_bingo:easy_task_bg_4
        IF_SETONMOUSELEAVE(callback(script44, 77201430, struct_getparam(int0, 6996)), comp(1178, 22));  // trh_bingo:easy_task_bg_1
        IF_SETONMOUSELEAVE(callback(script44, 77201433, struct_getparam(int0, 6998)), comp(1178, 25));  // trh_bingo:easy_task_bg_2
        IF_SETONMOUSELEAVE(callback(script44, 77201436, struct_getparam(int0, 7000)), comp(1178, 28));  // trh_bingo:easy_task_bg_3
        IF_SETONMOUSELEAVE(callback(script44, 77201439, struct_getparam(int0, 7002)), comp(1178, 31));  // trh_bingo:easy_task_bg_4
        IF_SETGRAPHIC(struct_getparam(int0, 7004), comp(1178, 35));  // trh_bingo:medium_task_bg_1
        IF_SETGRAPHIC(struct_getparam(int0, 7006), comp(1178, 38));  // trh_bingo:medium_task_bg_2
        IF_SETGRAPHIC(struct_getparam(int0, 7008), comp(1178, 41));  // trh_bingo:medium_task_bg_3
        IF_SETGRAPHIC(struct_getparam(int0, 7010), comp(1178, 44));  // trh_bingo:medium_task_bg_4
        IF_SETONMOUSEOVER(callback(script44, 77201443, struct_getparam(int0, 7005)), comp(1178, 35));  // trh_bingo:medium_task_bg_1
        IF_SETONMOUSEOVER(callback(script44, 77201446, struct_getparam(int0, 7007)), comp(1178, 38));  // trh_bingo:medium_task_bg_2
        IF_SETONMOUSEOVER(callback(script44, 77201449, struct_getparam(int0, 7009)), comp(1178, 41));  // trh_bingo:medium_task_bg_3
        IF_SETONMOUSEOVER(callback(script44, 77201452, struct_getparam(int0, 7011)), comp(1178, 44));  // trh_bingo:medium_task_bg_4
        IF_SETONMOUSELEAVE(callback(script44, 77201443, struct_getparam(int0, 7004)), comp(1178, 35));  // trh_bingo:medium_task_bg_1
        IF_SETONMOUSELEAVE(callback(script44, 77201446, struct_getparam(int0, 7006)), comp(1178, 38));  // trh_bingo:medium_task_bg_2
        IF_SETONMOUSELEAVE(callback(script44, 77201449, struct_getparam(int0, 7008)), comp(1178, 41));  // trh_bingo:medium_task_bg_3
        IF_SETONMOUSELEAVE(callback(script44, 77201452, struct_getparam(int0, 7010)), comp(1178, 44));  // trh_bingo:medium_task_bg_4
        IF_SETGRAPHIC(struct_getparam(int0, 7012), comp(1178, 48));  // trh_bingo:hard_task_bg_1
        IF_SETGRAPHIC(struct_getparam(int0, 7014), comp(1178, 51));  // trh_bingo:hard_task_bg_2
        IF_SETGRAPHIC(struct_getparam(int0, 7016), comp(1178, 54));  // trh_bingo:hard_task_bg_3
        IF_SETGRAPHIC(struct_getparam(int0, 7018), comp(1178, 57));  // trh_bingo:hard_task_bg_4
        IF_SETONMOUSEOVER(callback(script44, 77201456, struct_getparam(int0, 7013)), comp(1178, 48));  // trh_bingo:hard_task_bg_1
        IF_SETONMOUSEOVER(callback(script44, 77201459, struct_getparam(int0, 7015)), comp(1178, 51));  // trh_bingo:hard_task_bg_2
        IF_SETONMOUSEOVER(callback(script44, 77201462, struct_getparam(int0, 7017)), comp(1178, 54));  // trh_bingo:hard_task_bg_3
        IF_SETONMOUSEOVER(callback(script44, 77201465, struct_getparam(int0, 7019)), comp(1178, 57));  // trh_bingo:hard_task_bg_4
        IF_SETONMOUSELEAVE(callback(script44, 77201456, struct_getparam(int0, 7012)), comp(1178, 48));  // trh_bingo:hard_task_bg_1
        IF_SETONMOUSELEAVE(callback(script44, 77201459, struct_getparam(int0, 7014)), comp(1178, 51));  // trh_bingo:hard_task_bg_2
        IF_SETONMOUSELEAVE(callback(script44, 77201462, struct_getparam(int0, 7016)), comp(1178, 54));  // trh_bingo:hard_task_bg_3
        IF_SETONMOUSELEAVE(callback(script44, 77201465, struct_getparam(int0, 7018)), comp(1178, 57));  // trh_bingo:hard_task_bg_4
        IF_SETGRAPHIC(struct_getparam(int0, 7020), comp(1178, 61));  // trh_bingo:elite_task_bg_1
        IF_SETGRAPHIC(struct_getparam(int0, 7022), comp(1178, 64));  // trh_bingo:elite_task_bg_2
        IF_SETGRAPHIC(struct_getparam(int0, 7024), comp(1178, 67));  // trh_bingo:elite_task_bg_3
        IF_SETGRAPHIC(struct_getparam(int0, 7026), comp(1178, 70));  // trh_bingo:elite_task_bg_4
        IF_SETONMOUSEOVER(callback(script44, 77201469, struct_getparam(int0, 7021)), comp(1178, 61));  // trh_bingo:elite_task_bg_1
        IF_SETONMOUSEOVER(callback(script44, 77201472, struct_getparam(int0, 7023)), comp(1178, 64));  // trh_bingo:elite_task_bg_2
        IF_SETONMOUSEOVER(callback(script44, 77201475, struct_getparam(int0, 7025)), comp(1178, 67));  // trh_bingo:elite_task_bg_3
        IF_SETONMOUSEOVER(callback(script44, 77201478, struct_getparam(int0, 7027)), comp(1178, 70));  // trh_bingo:elite_task_bg_4
        IF_SETONMOUSELEAVE(callback(script44, 77201469, struct_getparam(int0, 7020)), comp(1178, 61));  // trh_bingo:elite_task_bg_1
        IF_SETONMOUSELEAVE(callback(script44, 77201472, struct_getparam(int0, 7022)), comp(1178, 64));  // trh_bingo:elite_task_bg_2
        IF_SETONMOUSELEAVE(callback(script44, 77201475, struct_getparam(int0, 7024)), comp(1178, 67));  // trh_bingo:elite_task_bg_3
        IF_SETONMOUSELEAVE(callback(script44, 77201478, struct_getparam(int0, 7026)), comp(1178, 70));  // trh_bingo:elite_task_bg_4
        int4 = ENUM_GETOUTPUTCOUNT(5351 as cs2enum);
        int3 = -1;
        var int5 = -1;
        var int6 = struct_getparam(int0, 7028);
        int3 = (int3 + 1);
        while ((int3 < int4)) {
            int5 = enum_getvalue(0, 9, 5350, int3);
            IF_SETGRAPHIC(int6, int5);
            script14119(int1, int3, int5);
        };
        int4 = ENUM_GETOUTPUTCOUNT(5352 as cs2enum);
        int3 = -1;
        var int7 = -1;
        int3 = (int3 + 1);
        while ((int3 < int4)) {
            if ((int3 <= 3)) {
                int7 = struct_getparam(int0, 7029);
            } else {
                int7 = struct_getparam(int0, 7030);
            };
            IF_SETGRAPHIC(int7, enum_getvalue(0, 9, 5353, int3));
            int5 = enum_getvalue(0, 9, 5354, int3);
            IF_SETGRAPHIC(int6, int5);
            script14120(int1, int3, int5);
        };
        script6069(int1, int0, struct_getparam(int0, 7567));
        script14127(int1, int0);
        IF_SETGRAPHIC(struct_getparam(int0, 7031), comp(1178, 127));  // trh_bingo:prestige_button_bg
        IF_SETONMOUSEOVER(callback(script44, 77201535, struct_getparam(int0, 7032)), comp(1178, 127));  // trh_bingo:prestige_button_bg
        IF_SETONMOUSELEAVE(callback(script44, 77201535, struct_getparam(int0, 7031)), comp(1178, 127));  // trh_bingo:prestige_button_bg
        IF_SETGRAPHIC(int6, comp(1178, 129));  // trh_bingo:prestige_button_stamp
        script14121(int1, 77201537);
        IF_SETTEXT(`Prestige Level - ${inttostring(script5537(int1), 10)}`, comp(1178, 135));  // trh_bingo:prestige_title
        IF_SETTEXT(struct_getparam(int0, 7033), 77201546);
        int4 = ENUM_GETOUTPUTCOUNT(5355 as cs2enum);
        int3 = -1;
        int3 = (int3 + 1);
        while ((int3 < int4)) {
            IF_SETGRAPHIC(struct_getparam(int0, 7034), enum_getvalue(0, 9, 5356, int3));
            int5 = enum_getvalue(0, 9, 5357, int3);
            IF_SETGRAPHIC(int6, int5);
            script14123(int1, int3, int5);
        };
        IF_SETONVARTRANSMIT(callback(script5552, 7870, 1), comp(1178, 133));  // trh_bingo:prize_box
        var int8 = struct_getparam(int0, 7080);
        var int9 = struct_getparam(int0, 7122);
        if ((int8 != -1 as model)) {
            IF_SETMODEL(int8, comp(1178, 148));  // trh_bingo:prestige_1_prize_model_1
            IF_SETMODELANGLE(struct_getparam(int0, 7081), struct_getparam(int0, 7082), struct_getparam(int0, 7083), struct_getparam(int0, 7084), struct_getparam(int0, 7085), struct_getparam(int0, 7086), comp(1178, 148));  // trh_bingo:prestige_1_prize_model_1
        } else if ((int9 != -1 as graphic)) {
            int9 = struct_getparam(int0, 7122);
            IF_SETGRAPHIC(int9, comp(1178, 150));  // trh_bingo:prestige_prize_graphic_1
        };
        int8 = struct_getparam(int0, 7087);
        if ((int8 != -1 as model)) {
            IF_SETMODEL(int8, comp(1178, 149));  // trh_bingo:prestige_1_prize_model_2
            IF_SETMODELANGLE(struct_getparam(int0, 7088), struct_getparam(int0, 7089), struct_getparam(int0, 7090), struct_getparam(int0, 7091), struct_getparam(int0, 7092), struct_getparam(int0, 7093), comp(1178, 149));  // trh_bingo:prestige_1_prize_model_2
        };
        int8 = struct_getparam(int0, 7094);
        int9 = struct_getparam(int0, 7123);
        if ((int8 != -1 as model)) {
            IF_SETMODEL(int8, comp(1178, 156));  // trh_bingo:prestige_prize_model_2
            IF_SETMODELANGLE(struct_getparam(int0, 7095), struct_getparam(int0, 7096), struct_getparam(int0, 7097), struct_getparam(int0, 7098), struct_getparam(int0, 7099), struct_getparam(int0, 7100), comp(1178, 156));  // trh_bingo:prestige_prize_model_2
        } else if ((int9 != -1 as graphic)) {
            int9 = struct_getparam(int0, 7123);
            IF_SETGRAPHIC(int9, comp(1178, 157));  // trh_bingo:prestige_prize_graphic_2
        };
        int8 = struct_getparam(int0, 7101);
        int9 = struct_getparam(int0, 7124);
        if ((int8 != -1 as model)) {
            IF_SETMODEL(int8, comp(1178, 163));  // trh_bingo:prestige_prize_model_3
            IF_SETMODELANGLE(struct_getparam(int0, 7102), struct_getparam(int0, 7103), struct_getparam(int0, 7104), struct_getparam(int0, 7105), struct_getparam(int0, 7106), struct_getparam(int0, 7107), comp(1178, 163));  // trh_bingo:prestige_prize_model_3
        } else if ((int9 != -1 as graphic)) {
            int9 = struct_getparam(int0, 7124);
            IF_SETGRAPHIC(int9, comp(1178, 164));  // trh_bingo:prestige_prize_graphic_3
        };
        int8 = struct_getparam(int0, 7108);
        int9 = struct_getparam(int0, 7125);
        if ((int8 != -1 as model)) {
            IF_SETMODEL(int8, comp(1178, 170));  // trh_bingo:prestige_prize_model_4
            IF_SETMODELANGLE(struct_getparam(int0, 7109), struct_getparam(int0, 7110), struct_getparam(int0, 7111), struct_getparam(int0, 7112), struct_getparam(int0, 7113), struct_getparam(int0, 7114), comp(1178, 170));  // trh_bingo:prestige_prize_model_4
        } else if ((int9 != -1 as graphic)) {
            int9 = struct_getparam(int0, 7125);
            IF_SETGRAPHIC(int9, comp(1178, 171));  // trh_bingo:prestige_prize_graphic_4
        };
        int8 = struct_getparam(int0, 7115);
        int9 = struct_getparam(int0, 7126);
        if ((int8 != -1 as model)) {
            IF_SETMODEL(int8, comp(1178, 177));  // trh_bingo:prestige_prize_model_5
            IF_SETMODELANGLE(struct_getparam(int0, 7116), struct_getparam(int0, 7117), struct_getparam(int0, 7118), struct_getparam(int0, 7119), struct_getparam(int0, 7120), struct_getparam(int0, 7121), comp(1178, 177));  // trh_bingo:prestige_prize_model_5
        } else if ((int9 != -1 as graphic)) {
            int9 = struct_getparam(int0, 7126);
            IF_SETGRAPHIC(int9, comp(1178, 178));  // trh_bingo:prestige_prize_graphic_5
        };
        IF_SETPOSITION(0, 0, 0, 0, comp(1178, 148));  // trh_bingo:prestige_1_prize_model_1
        IF_SETPOSITION(0, 0, 0, 0, comp(1178, 149));  // trh_bingo:prestige_1_prize_model_2
        IF_SETPOSITION(0, 0, 0, 0, comp(1178, 156));  // trh_bingo:prestige_prize_model_2
        IF_SETPOSITION(0, 0, 0, 0, comp(1178, 163));  // trh_bingo:prestige_prize_model_3
        IF_SETPOSITION(0, 0, 0, 0, comp(1178, 170));  // trh_bingo:prestige_prize_model_4
        IF_SETPOSITION(0, 0, 0, 0, comp(1178, 177));  // trh_bingo:prestige_prize_model_5
        script6071(int1);
        script14126(int1);
        return;
    };
    if ((int2 == 0)) {
        return;
    };
    if (((int0 == -1 as struct) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETGRAPHIC(struct_getparam(int0, 6992), comp(1178, 3));  // trh_bingo:content_layer_bg
    IF_SETTEXT(struct_getparam(int0, 6993), comp(1178, 8));  // trh_bingo:total_stickers_label
    IF_SETTEXT(`Prestige ${inttostring(script5537(int1), 10)}/${inttostring(5, 10)}`, comp(1178, 5));  // trh_bingo:prestige_level
    script11636(int1);
    IF_SETGRAPHIC(struct_getparam(int0, 6994), comp(1178, 7));  // trh_bingo:use_stamp_btn_graphic
    IF_SETONMOUSEOVER(callback(script44, 77201415, struct_getparam(int0, 6995)), comp(1178, 7));  // trh_bingo:use_stamp_btn_graphic
    IF_SETONMOUSELEAVE(callback(script5549, int1, int0), comp(1178, 7));  // trh_bingo:use_stamp_btn_graphic
    script14117(int1, int0);
    IF_SETGRAPHIC(struct_getparam(int0, 6996), comp(1178, 22));  // trh_bingo:easy_task_bg_1
    IF_SETGRAPHIC(struct_getparam(int0, 6998), comp(1178, 25));  // trh_bingo:easy_task_bg_2
    IF_SETGRAPHIC(struct_getparam(int0, 7000), comp(1178, 28));  // trh_bingo:easy_task_bg_3
    IF_SETGRAPHIC(struct_getparam(int0, 7002), comp(1178, 31));  // trh_bingo:easy_task_bg_4
    IF_SETONMOUSEOVER(callback(script44, 77201430, struct_getparam(int0, 6997)), comp(1178, 22));  // trh_bingo:easy_task_bg_1
    IF_SETONMOUSEOVER(callback(script44, 77201433, struct_getparam(int0, 6999)), comp(1178, 25));  // trh_bingo:easy_task_bg_2
    IF_SETONMOUSEOVER(callback(script44, 77201436, struct_getparam(int0, 7001)), comp(1178, 28));  // trh_bingo:easy_task_bg_3
    IF_SETONMOUSEOVER(callback(script44, 77201439, struct_getparam(int0, 7003)), comp(1178, 31));  // trh_bingo:easy_task_bg_4
    IF_SETONMOUSELEAVE(callback(script44, 77201430, struct_getparam(int0, 6996)), comp(1178, 22));  // trh_bingo:easy_task_bg_1
    IF_SETONMOUSELEAVE(callback(script44, 77201433, struct_getparam(int0, 6998)), comp(1178, 25));  // trh_bingo:easy_task_bg_2
    IF_SETONMOUSELEAVE(callback(script44, 77201436, struct_getparam(int0, 7000)), comp(1178, 28));  // trh_bingo:easy_task_bg_3
    IF_SETONMOUSELEAVE(callback(script44, 77201439, struct_getparam(int0, 7002)), comp(1178, 31));  // trh_bingo:easy_task_bg_4
    IF_SETGRAPHIC(struct_getparam(int0, 7004), comp(1178, 35));  // trh_bingo:medium_task_bg_1
    IF_SETGRAPHIC(struct_getparam(int0, 7006), comp(1178, 38));  // trh_bingo:medium_task_bg_2
    IF_SETGRAPHIC(struct_getparam(int0, 7008), comp(1178, 41));  // trh_bingo:medium_task_bg_3
    IF_SETGRAPHIC(struct_getparam(int0, 7010), comp(1178, 44));  // trh_bingo:medium_task_bg_4
    IF_SETONMOUSEOVER(callback(script44, 77201443, struct_getparam(int0, 7005)), comp(1178, 35));  // trh_bingo:medium_task_bg_1
    IF_SETONMOUSEOVER(callback(script44, 77201446, struct_getparam(int0, 7007)), comp(1178, 38));  // trh_bingo:medium_task_bg_2
    IF_SETONMOUSEOVER(callback(script44, 77201449, struct_getparam(int0, 7009)), comp(1178, 41));  // trh_bingo:medium_task_bg_3
    IF_SETONMOUSEOVER(callback(script44, 77201452, struct_getparam(int0, 7011)), comp(1178, 44));  // trh_bingo:medium_task_bg_4
    IF_SETONMOUSELEAVE(callback(script44, 77201443, struct_getparam(int0, 7004)), comp(1178, 35));  // trh_bingo:medium_task_bg_1
    IF_SETONMOUSELEAVE(callback(script44, 77201446, struct_getparam(int0, 7006)), comp(1178, 38));  // trh_bingo:medium_task_bg_2
    IF_SETONMOUSELEAVE(callback(script44, 77201449, struct_getparam(int0, 7008)), comp(1178, 41));  // trh_bingo:medium_task_bg_3
    IF_SETONMOUSELEAVE(callback(script44, 77201452, struct_getparam(int0, 7010)), comp(1178, 44));  // trh_bingo:medium_task_bg_4
    IF_SETGRAPHIC(struct_getparam(int0, 7012), comp(1178, 48));  // trh_bingo:hard_task_bg_1
    IF_SETGRAPHIC(struct_getparam(int0, 7014), comp(1178, 51));  // trh_bingo:hard_task_bg_2
    IF_SETGRAPHIC(struct_getparam(int0, 7016), comp(1178, 54));  // trh_bingo:hard_task_bg_3
    IF_SETGRAPHIC(struct_getparam(int0, 7018), comp(1178, 57));  // trh_bingo:hard_task_bg_4
    IF_SETONMOUSEOVER(callback(script44, 77201456, struct_getparam(int0, 7013)), comp(1178, 48));  // trh_bingo:hard_task_bg_1
    IF_SETONMOUSEOVER(callback(script44, 77201459, struct_getparam(int0, 7015)), comp(1178, 51));  // trh_bingo:hard_task_bg_2
    IF_SETONMOUSEOVER(callback(script44, 77201462, struct_getparam(int0, 7017)), comp(1178, 54));  // trh_bingo:hard_task_bg_3
    IF_SETONMOUSEOVER(callback(script44, 77201465, struct_getparam(int0, 7019)), comp(1178, 57));  // trh_bingo:hard_task_bg_4
    IF_SETONMOUSELEAVE(callback(script44, 77201456, struct_getparam(int0, 7012)), comp(1178, 48));  // trh_bingo:hard_task_bg_1
    IF_SETONMOUSELEAVE(callback(script44, 77201459, struct_getparam(int0, 7014)), comp(1178, 51));  // trh_bingo:hard_task_bg_2
    IF_SETONMOUSELEAVE(callback(script44, 77201462, struct_getparam(int0, 7016)), comp(1178, 54));  // trh_bingo:hard_task_bg_3
    IF_SETONMOUSELEAVE(callback(script44, 77201465, struct_getparam(int0, 7018)), comp(1178, 57));  // trh_bingo:hard_task_bg_4
    IF_SETGRAPHIC(struct_getparam(int0, 7020), comp(1178, 61));  // trh_bingo:elite_task_bg_1
    IF_SETGRAPHIC(struct_getparam(int0, 7022), comp(1178, 64));  // trh_bingo:elite_task_bg_2
    IF_SETGRAPHIC(struct_getparam(int0, 7024), comp(1178, 67));  // trh_bingo:elite_task_bg_3
    IF_SETGRAPHIC(struct_getparam(int0, 7026), comp(1178, 70));  // trh_bingo:elite_task_bg_4
    IF_SETONMOUSEOVER(callback(script44, 77201469, struct_getparam(int0, 7021)), comp(1178, 61));  // trh_bingo:elite_task_bg_1
    IF_SETONMOUSEOVER(callback(script44, 77201472, struct_getparam(int0, 7023)), comp(1178, 64));  // trh_bingo:elite_task_bg_2
    IF_SETONMOUSEOVER(callback(script44, 77201475, struct_getparam(int0, 7025)), comp(1178, 67));  // trh_bingo:elite_task_bg_3
    IF_SETONMOUSEOVER(callback(script44, 77201478, struct_getparam(int0, 7027)), comp(1178, 70));  // trh_bingo:elite_task_bg_4
    IF_SETONMOUSELEAVE(callback(script44, 77201469, struct_getparam(int0, 7020)), comp(1178, 61));  // trh_bingo:elite_task_bg_1
    IF_SETONMOUSELEAVE(callback(script44, 77201472, struct_getparam(int0, 7022)), comp(1178, 64));  // trh_bingo:elite_task_bg_2
    IF_SETONMOUSELEAVE(callback(script44, 77201475, struct_getparam(int0, 7024)), comp(1178, 67));  // trh_bingo:elite_task_bg_3
    IF_SETONMOUSELEAVE(callback(script44, 77201478, struct_getparam(int0, 7026)), comp(1178, 70));  // trh_bingo:elite_task_bg_4
    int4 = ENUM_GETOUTPUTCOUNT(5351 as cs2enum);
    int3 = -1;
    int5 = -1;
    int6 = struct_getparam(int0, 7028);
    int3 = (int3 + 1);
    while ((int3 < int4)) {
        int5 = enum_getvalue(0, 9, 5350, int3);
        IF_SETGRAPHIC(int6, int5);
        script14119(int1, int3, int5);
    };
    int4 = ENUM_GETOUTPUTCOUNT(5352 as cs2enum);
    int3 = -1;
    int7 = -1;
    int3 = (int3 + 1);
    while ((int3 < int4)) {
        if ((int3 <= 3)) {
            int7 = struct_getparam(int0, 7029);
        } else {
            int7 = struct_getparam(int0, 7030);
        };
        IF_SETGRAPHIC(int7, enum_getvalue(0, 9, 5353, int3));
        int5 = enum_getvalue(0, 9, 5354, int3);
        IF_SETGRAPHIC(int6, int5);
        script14120(int1, int3, int5);
    };
    script6069(int1, int0, struct_getparam(int0, 7567));
    script14127(int1, int0);
    IF_SETGRAPHIC(struct_getparam(int0, 7031), comp(1178, 127));  // trh_bingo:prestige_button_bg
    IF_SETONMOUSEOVER(callback(script44, 77201535, struct_getparam(int0, 7032)), comp(1178, 127));  // trh_bingo:prestige_button_bg
    IF_SETONMOUSELEAVE(callback(script44, 77201535, struct_getparam(int0, 7031)), comp(1178, 127));  // trh_bingo:prestige_button_bg
    IF_SETGRAPHIC(int6, comp(1178, 129));  // trh_bingo:prestige_button_stamp
    script14121(int1, 77201537);
    IF_SETTEXT(`Prestige Level - ${inttostring(script5537(int1), 10)}`, comp(1178, 135));  // trh_bingo:prestige_title
    IF_SETTEXT(struct_getparam(int0, 7033), 77201546);
    int4 = ENUM_GETOUTPUTCOUNT(5355 as cs2enum);
    int3 = -1;
    int3 = (int3 + 1);
    while ((int3 < int4)) {
        IF_SETGRAPHIC(struct_getparam(int0, 7034), enum_getvalue(0, 9, 5356, int3));
        int5 = enum_getvalue(0, 9, 5357, int3);
        IF_SETGRAPHIC(int6, int5);
        script14123(int1, int3, int5);
    };
    IF_SETONVARTRANSMIT(callback(script5552, 7870, 1), comp(1178, 133));  // trh_bingo:prize_box
    int8 = struct_getparam(int0, 7080);
    int9 = struct_getparam(int0, 7122);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 148));  // trh_bingo:prestige_1_prize_model_1
        IF_SETMODELANGLE(struct_getparam(int0, 7081), struct_getparam(int0, 7082), struct_getparam(int0, 7083), struct_getparam(int0, 7084), struct_getparam(int0, 7085), struct_getparam(int0, 7086), comp(1178, 148));  // trh_bingo:prestige_1_prize_model_1
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7122);
        IF_SETGRAPHIC(int9, comp(1178, 150));  // trh_bingo:prestige_prize_graphic_1
    };
    int8 = struct_getparam(int0, 7087);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 149));  // trh_bingo:prestige_1_prize_model_2
        IF_SETMODELANGLE(struct_getparam(int0, 7088), struct_getparam(int0, 7089), struct_getparam(int0, 7090), struct_getparam(int0, 7091), struct_getparam(int0, 7092), struct_getparam(int0, 7093), comp(1178, 149));  // trh_bingo:prestige_1_prize_model_2
    };
    int8 = struct_getparam(int0, 7094);
    int9 = struct_getparam(int0, 7123);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 156));  // trh_bingo:prestige_prize_model_2
        IF_SETMODELANGLE(struct_getparam(int0, 7095), struct_getparam(int0, 7096), struct_getparam(int0, 7097), struct_getparam(int0, 7098), struct_getparam(int0, 7099), struct_getparam(int0, 7100), comp(1178, 156));  // trh_bingo:prestige_prize_model_2
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7123);
        IF_SETGRAPHIC(int9, comp(1178, 157));  // trh_bingo:prestige_prize_graphic_2
    };
    int8 = struct_getparam(int0, 7101);
    int9 = struct_getparam(int0, 7124);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 163));  // trh_bingo:prestige_prize_model_3
        IF_SETMODELANGLE(struct_getparam(int0, 7102), struct_getparam(int0, 7103), struct_getparam(int0, 7104), struct_getparam(int0, 7105), struct_getparam(int0, 7106), struct_getparam(int0, 7107), comp(1178, 163));  // trh_bingo:prestige_prize_model_3
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7124);
        IF_SETGRAPHIC(int9, comp(1178, 164));  // trh_bingo:prestige_prize_graphic_3
    };
    int8 = struct_getparam(int0, 7108);
    int9 = struct_getparam(int0, 7125);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 170));  // trh_bingo:prestige_prize_model_4
        IF_SETMODELANGLE(struct_getparam(int0, 7109), struct_getparam(int0, 7110), struct_getparam(int0, 7111), struct_getparam(int0, 7112), struct_getparam(int0, 7113), struct_getparam(int0, 7114), comp(1178, 170));  // trh_bingo:prestige_prize_model_4
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7125);
        IF_SETGRAPHIC(int9, comp(1178, 171));  // trh_bingo:prestige_prize_graphic_4
    };
    int8 = struct_getparam(int0, 7115);
    int9 = struct_getparam(int0, 7126);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 177));  // trh_bingo:prestige_prize_model_5
        IF_SETMODELANGLE(struct_getparam(int0, 7116), struct_getparam(int0, 7117), struct_getparam(int0, 7118), struct_getparam(int0, 7119), struct_getparam(int0, 7120), struct_getparam(int0, 7121), comp(1178, 177));  // trh_bingo:prestige_prize_model_5
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7126);
        IF_SETGRAPHIC(int9, comp(1178, 178));  // trh_bingo:prestige_prize_graphic_5
    };
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 148));  // trh_bingo:prestige_1_prize_model_1
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 149));  // trh_bingo:prestige_1_prize_model_2
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 156));  // trh_bingo:prestige_prize_model_2
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 163));  // trh_bingo:prestige_prize_model_3
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 170));  // trh_bingo:prestige_prize_model_4
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 177));  // trh_bingo:prestige_prize_model_5
    script6071(int1);
    script14126(int1);
    return;
}