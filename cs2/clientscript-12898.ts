//
function script12898(): void {
    if (((script12895(1) != 0) || (script12895(2) != 0))) {
        IF_SETHIDE(false, comp(1798, 9));
        if ((varbitplayer_33894 != 0)) {
            IF_SETTEXT(OC_NAME(enum_getvalue(0, 33, 11770 as cs2enum, (varbitplayer_33894 - 1))), comp(1798, 1));
            switch (script12895(1)) {
                case 0: {
                    IF_SETTEXT("Unplanted", comp(1798, 2));
                    break;
                }
                case 1: {
                    IF_SETTEXT("Planted", comp(1798, 2));
                    break;
                }
                case 2: {
                    IF_SETTEXT("Sprouted", comp(1798, 2));
                    break;
                }
                case 3: {
                    IF_SETTEXT("Growing", comp(1798, 2));
                    break;
                }
                case 4: {
                    IF_SETTEXT("Ready", comp(1798, 2));
                    break;
                }
            };
            IF_SETTEXT(script12896(((varbitplayer_33893 + 2520) - DATE_MINUTES())), comp(1798, 3));
        } else {
            IF_SETTEXT("Empty", comp(1798, 1));
            IF_SETTEXT("", comp(1798, 2));
            IF_SETTEXT("", comp(1798, 3));
        };
        if ((varbitplayer_33897 != 0)) {
            IF_SETTEXT(OC_NAME(enum_getvalue(0, 33, 11770 as cs2enum, (varbitplayer_33897 - 1))), comp(1798, 131));
            switch (script12895(2)) {
                case 0: {
                    IF_SETTEXT("Unplanted", comp(1798, 132));
                    break;
                }
                case 1: {
                    IF_SETTEXT("Planted", comp(1798, 132));
                    break;
                }
                case 2: {
                    IF_SETTEXT("Sprouted", comp(1798, 132));
                    break;
                }
                case 3: {
                    IF_SETTEXT("Growing", comp(1798, 132));
                    break;
                }
                case 4: {
                    IF_SETTEXT("Ready", comp(1798, 132));
                    break;
                }
            };
            IF_SETTEXT(script12896(((varbitplayer_33896 + 2520) - DATE_MINUTES())), comp(1798, 133));
        } else {
            IF_SETTEXT("Empty", comp(1798, 131));
            IF_SETTEXT("", comp(1798, 132));
            IF_SETTEXT("", comp(1798, 133));
        };
    } else {
        IF_SETHIDE(true, comp(1798, 9));
    };
    return;
}