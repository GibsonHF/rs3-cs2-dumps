//
function script3336(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GET2DANGLE(comp(1216, 8));  // levelup:wheel
    int4 = (int4 - 800);
    if ((int4 < 0)) {
        int4 = 65000;
    };
    IF_SET2DANGLE(int4, comp(1216, 8));  // levelup:wheel
    var int5 = MAX(1, (int1 - int0));
    var int6 = ((255 / int5) + 1);
    IF_SETHIDE(false, comp(1216, 2));  // levelup:firework_effect
    IF_SETHIDE(false, comp(1216, 4));  // levelup:firework_effect_delayed
    if (((CLIENTCLOCK() < int1) && (CLIENTCLOCK() > int0))) {
        IF_SETTRANS(MIN(175, (IF_GETTRANS(comp(1216, 17)) + int6)), comp(1216, 17));  // levelup:levelup_icon
        IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(1216, 14)) - int6)), comp(1216, 14));  // levelup:number_left
        IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(1216, 14) /*levelup:number_left*/) - int6)), comp(1216, 16) /*levelup:number_right*/);
        IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(1216, 14) /*levelup:number_left*/) - int6)), comp(1216, 15) /*levelup:number_centre*/);
        return;
    };
    if ((CLIENTCLOCK() < int2)) {
        if ((CLIENTCLOCK() >= int1)) {
            if ((CLIENTCLOCK() >= (int1 + 25))) {
                IF_SETHIDE(true, comp(1216, 2));  // levelup:firework_effect
                IF_SETHIDE(true, comp(1216, 3));  // levelup:max_firework
                IF_SETHIDE(true, comp(1216, 4));  // levelup:firework_effect_delayed
            };
            if ((CLIENTCLOCK() == int1)) {
                script3337(int3, (int2 - int1));
            };
        } else if ((CLIENTCLOCK() >= int2)) {
            if ((IF_GETHIDE(comp(1216, 2)) == false)) {  // levelup:firework_effect
                IF_SETHIDE(true, comp(1216, 2));  // levelup:firework_effect
            };
            if ((IF_GETHIDE(comp(1216, 3)) == false)) {  // levelup:max_firework
                IF_SETHIDE(true, comp(1216, 3));  // levelup:max_firework
            };
            if ((IF_GETHIDE(comp(1216, 4)) == false)) {  // levelup:firework_effect_delayed
                IF_SETHIDE(true, comp(1216, 4));  // levelup:firework_effect_delayed
            };
            if ((IF_GETTRANS(comp(1216, 7)) < 255)) {  // levelup:levelup_bg
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 17)) + 10)), comp(1216, 17));  // levelup:levelup_icon
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 11) /*levelup:trim_left*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 12) /*levelup:trim_right*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 10) /*levelup:trim_centre*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 13) /*levelup:levelup_text*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 14) /*levelup:number_left*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 16) /*levelup:number_right*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 15) /*levelup:number_centre*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 8) /*levelup:wheel*/);
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 7));  // levelup:levelup_bg
            } else {
                CC_DELETEALL(comp(1216, 6));  // levelup:unlocks_layer
                CC_DELETEALL(comp(1216, 1));  // levelup:firework_layer
                IF_SETONTIMER(callback(), comp(1216, 0));  // levelup:levelup_layer
                IF_SETHIDE(true, comp(1216, 5));  // levelup:info
                IF_SETHIDE(script734(varbitplayer_228), comp(1213, 1));  // xp_popup:xp_ring_layer
            };
        };
    } else if ((CLIENTCLOCK() >= int2)) {
        if ((IF_GETHIDE(comp(1216, 2)) == false)) {  // levelup:firework_effect
            IF_SETHIDE(true, comp(1216, 2));  // levelup:firework_effect
        };
        if ((IF_GETHIDE(comp(1216, 3)) == false)) {  // levelup:max_firework
            IF_SETHIDE(true, comp(1216, 3));  // levelup:max_firework
        };
        if ((IF_GETHIDE(comp(1216, 4)) == false)) {  // levelup:firework_effect_delayed
            IF_SETHIDE(true, comp(1216, 4));  // levelup:firework_effect_delayed
        };
        if ((IF_GETTRANS(comp(1216, 7)) < 255)) {  // levelup:levelup_bg
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 17)) + 10)), comp(1216, 17));  // levelup:levelup_icon
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 11) /*levelup:trim_left*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 12) /*levelup:trim_right*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 10) /*levelup:trim_centre*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 13) /*levelup:levelup_text*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 14) /*levelup:number_left*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 16) /*levelup:number_right*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 15) /*levelup:number_centre*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7) /*levelup:levelup_bg*/) + 10)), comp(1216, 8) /*levelup:wheel*/);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 7));  // levelup:levelup_bg
        } else {
            CC_DELETEALL(comp(1216, 6));  // levelup:unlocks_layer
            CC_DELETEALL(comp(1216, 1));  // levelup:firework_layer
            IF_SETONTIMER(callback(), comp(1216, 0));  // levelup:levelup_layer
            IF_SETHIDE(true, comp(1216, 5));  // levelup:info
            IF_SETHIDE(script734(varbitplayer_228), comp(1213, 1));  // xp_popup:xp_ring_layer
        };
    };
    return;
}