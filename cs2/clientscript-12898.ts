//
function script12898(): void {
    if (((script12895(1) != 0) || (script12895(2) != 0))) {
        IF_SETHIDE(false, comp(1798, 9));  // elrc:planter_layer
        if ((varbitplayer_33894 != 0)) {
            IF_SETTEXT(OC_NAME(enum_getvalue(0, 33, 11770 as cs2enum, (varbitplayer_33894 - 1))), comp(1798, 1));  // elrc:planter_seed1
            switch (script12895(1)) {
                case 0: {
                    IF_SETTEXT("Unplanted", comp(1798, 2));  // elrc:planter_seed1_desc
                    break;
                }
                case 1: {
                    IF_SETTEXT("Planted", comp(1798, 2));  // elrc:planter_seed1_desc
                    break;
                }
                case 2: {
                    IF_SETTEXT("Sprouted", comp(1798, 2));  // elrc:planter_seed1_desc
                    break;
                }
                case 3: {
                    IF_SETTEXT("Growing", comp(1798, 2));  // elrc:planter_seed1_desc
                    break;
                }
                case 4: {
                    IF_SETTEXT("Ready", comp(1798, 2));  // elrc:planter_seed1_desc
                    break;
                }
            };
            IF_SETTEXT(script12896(((varbitplayer_33893 + 2520) - DATE_MINUTES())), comp(1798, 3));  // elrc:planter_seed1_time
        } else {
            IF_SETTEXT("Empty", comp(1798, 1));  // elrc:planter_seed1
            IF_SETTEXT("", comp(1798, 2));  // elrc:planter_seed1_desc
            IF_SETTEXT("", comp(1798, 3));  // elrc:planter_seed1_time
        };
        if ((varbitplayer_33897 != 0)) {
            IF_SETTEXT(OC_NAME(enum_getvalue(0, 33, 11770 as cs2enum, (varbitplayer_33897 - 1))), comp(1798, 131));  // elrc:planter_seed2
            switch (script12895(2)) {
                case 0: {
                    IF_SETTEXT("Unplanted", comp(1798, 132));  // elrc:planter_seed2_desc
                    break;
                }
                case 1: {
                    IF_SETTEXT("Planted", comp(1798, 132));  // elrc:planter_seed2_desc
                    break;
                }
                case 2: {
                    IF_SETTEXT("Sprouted", comp(1798, 132));  // elrc:planter_seed2_desc
                    break;
                }
                case 3: {
                    IF_SETTEXT("Growing", comp(1798, 132));  // elrc:planter_seed2_desc
                    break;
                }
                case 4: {
                    IF_SETTEXT("Ready", comp(1798, 132));  // elrc:planter_seed2_desc
                    break;
                }
            };
            IF_SETTEXT(script12896(((varbitplayer_33896 + 2520) - DATE_MINUTES())), comp(1798, 133));  // elrc:planter_seed2_time
        } else {
            IF_SETTEXT("Empty", comp(1798, 131));  // elrc:planter_seed2
            IF_SETTEXT("", comp(1798, 132));  // elrc:planter_seed2_desc
            IF_SETTEXT("", comp(1798, 133));  // elrc:planter_seed2_time
        };
    } else {
        IF_SETHIDE(true, comp(1798, 9));  // elrc:planter_layer
    };
    return;
}