//
function script9660(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = -1;
    var string0 = "";
    switch (int0) {
        case 85721202: {
            int1 = comp(1308, 131);  // ss_rework:upgrade1_disabled
            int2 = comp(1308, 119);  // ss_rework:upgrade1_title
            int3 = comp(1308, 120);  // ss_rework:upgrade1_cost
            int5 = comp(1308, 122);  // ss_rework:upgrade1_button
            int4 = comp(1308, 130);  // ss_rework:upgrade1_buy_text
            if ((varbitplayer_21749 == 0)) {
                string0 = "100 points";
            } else {
                string0 = "10 points";
            };
            break;
        }
        case 85721237: {
            int1 = comp(1308, 166);  // ss_rework:upgrade2_disabled
            int2 = comp(1308, 154);  // ss_rework:upgrade2_title
            int3 = comp(1308, 155);  // ss_rework:upgrade2_cost
            int5 = comp(1308, 157);  // ss_rework:upgrade2_button
            int4 = comp(1308, 165);  // ss_rework:upgrade2_buy_text
            if ((varbitplayer_21750 == 0)) {
                string0 = "400 points";
            } else {
                string0 = "40 points";
            };
            break;
        }
        case 85721272: {
            int1 = comp(1308, 201);  // ss_rework:upgrade3_disabled
            int2 = comp(1308, 189);  // ss_rework:upgrade3_title
            int3 = comp(1308, 190);  // ss_rework:upgrade3_cost
            int5 = comp(1308, 192);  // ss_rework:upgrade3_button
            int4 = comp(1308, 200);  // ss_rework:upgrade3_buy_text
            if ((varbitplayer_21751 == 0)) {
                string0 = "600 points";
            } else {
                string0 = "60 points";
            };
            break;
        }
        case 85721290: {
            int1 = comp(1308, 219);  // ss_rework:upgrade4_disabled
            int2 = comp(1308, 207);  // ss_rework:upgrade4_title
            int3 = comp(1308, 208);  // ss_rework:upgrade4_cost
            int5 = comp(1308, 210);  // ss_rework:upgrade4_button
            int4 = comp(1308, 218);  // ss_rework:upgrade4_buy_text
            if ((varbitplayer_36284 == 0)) {
                string0 = "1000 points";
            } else {
                string0 = "100 points";
            };
            break;
        }
        case 85721949: {
            int1 = comp(1308, 876);  // ss_rework:freezy_skin1_layer_disabled
            int2 = comp(1308, 864);  // ss_rework:freezy_skin1_title
            int3 = comp(1308, 865);  // ss_rework:freezy_skin1_cost
            int4 = comp(1308, 875);  // ss_rework:freezy_skin1_buy_text
            int5 = comp(1308, 867);  // ss_rework:freezy_skin1_button
            string0 = "125 points";
            break;
        }
        case 85721917: {
            int1 = comp(1308, 844);  // ss_rework:freezy_skin2_layer_disabled
            int2 = comp(1308, 832);  // ss_rework:freezy_skin2_title
            int3 = comp(1308, 833);  // ss_rework:freezy_skin2_cost
            int4 = comp(1308, 843);  // ss_rework:freezy_skin2_buy_text
            string0 = "125 points";
            int5 = comp(1308, 835);  // ss_rework:freezy_skin2_button
            break;
        }
        case 85721933: {
            int1 = comp(1308, 860);  // ss_rework:freezy_skin3_layer_disabled
            int2 = comp(1308, 848);  // ss_rework:freezy_skin3_title
            int3 = comp(1308, 849);  // ss_rework:freezy_skin3_cost
            int4 = comp(1308, 859);  // ss_rework:freezy_skin3_buy_text
            string0 = "125 points";
            int5 = comp(1308, 851);  // ss_rework:freezy_skin3_button
            break;
        }
        default: {
            return;
        }
    };
    if (((((int1 == comp(-1, 65535)) || (int2 == comp(-1, 65535))) || (int3 == comp(-1, 65535))) || (int4 == comp(-1, 65535)))) {
        return;
    };
    IF_SETCOLOUR(16512486, int2);
    IF_SETCOLOUR(14538955, int3);
    if ((int5 != comp(-1, 65535))) {
        IF_SETHIDE(false, int5);
    };
    IF_SETCOLOUR(16512486, int4);
    IF_SETHIDE(true, int1);
    IF_SETTEXT(string0, int3);
    return;
}