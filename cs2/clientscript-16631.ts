//
function script16631(int0: int): unknown_int {
    if ((varbitplayer_51290 == 0)) {
        return -1;
    };
    switch (int0) {
        case 0: {
            if ((MAP_LANG() == 3)) {
                return 19535;
            };
            return 19534;
        }
        case 1: {
            return 27718;
        }
        case 2: {
            return 27740;
        }
        case 3: {
            return 27745;
        }
        case 4: {
            return 27746;
        }
        case 5: {
            return 27747;
        }
        case 6: {
            return 27748;
        }
        case 7: {
            return 27749;
        }
    };
    script12478(`No graphic specified for modifier ${inttostring(int0, 10)} in trh184_get_modifier_id_graphic.`);
    return -1;
}