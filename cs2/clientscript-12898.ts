//
function script12898(): void {
    if (((script12895(1) != 0) || (script12895(2) != 0))) {
        IF_SETHIDE(0, 117833737);
        if ((varbitplayer_33894 != 0)) {
            IF_SETTEXT(OC_NAME(enum_getvalue(0, 33, 11770 as cs2enum, (varbitplayer_33894 - 1))), 117833729);
            switch (script12895(1)) {
                case 0: {
                    IF_SETTEXT("Unplanted", 117833730);
                    break;
                }
                case 1: {
                    IF_SETTEXT("Planted", 117833730);
                    break;
                }
                case 2: {
                    IF_SETTEXT("Sprouted", 117833730);
                    break;
                }
                case 3: {
                    IF_SETTEXT("Growing", 117833730);
                    break;
                }
                case 4: {
                    IF_SETTEXT("Ready", 117833730);
                    break;
                }
            };
            IF_SETTEXT(script12896(((varbitplayer_33893 + 2520) - DATE_MINUTES())), 117833731);
        } else {
            IF_SETTEXT("Empty", 117833729);
            IF_SETTEXT("", 117833730);
            IF_SETTEXT("", 117833731);
        };
        if ((varbitplayer_33897 != 0)) {
            IF_SETTEXT(OC_NAME(enum_getvalue(0, 33, 11770 as cs2enum, (varbitplayer_33897 - 1))), 117833859);
            switch (script12895(2)) {
                case 0: {
                    IF_SETTEXT("Unplanted", 117833860);
                    break;
                }
                case 1: {
                    IF_SETTEXT("Planted", 117833860);
                    break;
                }
                case 2: {
                    IF_SETTEXT("Sprouted", 117833860);
                    break;
                }
                case 3: {
                    IF_SETTEXT("Growing", 117833860);
                    break;
                }
                case 4: {
                    IF_SETTEXT("Ready", 117833860);
                    break;
                }
            };
            IF_SETTEXT(script12896(((varbitplayer_33896 + 2520) - DATE_MINUTES())), 117833861);
        } else {
            IF_SETTEXT("Empty", 117833859);
            IF_SETTEXT("", 117833860);
            IF_SETTEXT("", 117833861);
        };
    } else {
        IF_SETHIDE(1, 117833737);
    };
    return;
}