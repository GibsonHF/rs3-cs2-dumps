//
function script9748(): void {
    IF_SETHIDE(true, comp(1049, 32));  // rand_entrance:2_recommended
    IF_SETHIDE(true, comp(1049, 36));  // rand_entrance:3_recommended
    IF_SETHIDE(true, comp(1049, 40));  // rand_entrance:4_recommended
    IF_SETHIDE(true, comp(1049, 46));  // rand_entrance:5_recommended
    IF_SETGRAPHIC(18526 as graphic, comp(1049, 10));  // rand_entrance:option_1
    IF_SETGRAPHIC(18526 as graphic, comp(1049, 61));  // rand_entrance:option_2
    IF_SETGRAPHIC(18526 as graphic, comp(1049, 63));  // rand_entrance:option_3
    IF_SETGRAPHIC(18526 as graphic, comp(1049, 41));  // rand_entrance:option_4
    IF_SETGRAPHIC(18526 as graphic, comp(1049, 47));  // rand_entrance:option_5
    switch (varplayer_4474) {
        case 1: {
            IF_SETGRAPHIC(18525 as graphic, comp(1049, 10));  // rand_entrance:option_1
            break;
        }
        case 2: {
            IF_SETGRAPHIC(18525 as graphic, comp(1049, 61));  // rand_entrance:option_2
            break;
        }
        case 3: {
            IF_SETGRAPHIC(18525 as graphic, comp(1049, 63));  // rand_entrance:option_3
            break;
        }
        case 4: {
            IF_SETGRAPHIC(18525 as graphic, comp(1049, 41));  // rand_entrance:option_4
            break;
        }
        case 5: {
            IF_SETGRAPHIC(18525 as graphic, comp(1049, 47));  // rand_entrance:option_5
            break;
        }
    };
    if (((varclient_4189 == 1) || (varplayer_4474 == 1))) {
        IF_SETHIDE(false, comp(1049, 29));  // rand_entrance:option_1_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 10)) == 18525 as graphic)) {  // rand_entrance:option_1
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 68));  // rand_entrance:option_1_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 68));  // rand_entrance:option_1_disabled
        };
        IF_SETHIDE(false, comp(1049, 33));  // rand_entrance:option_2_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 61)) == 18525 as graphic)) {  // rand_entrance:option_2
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 69));  // rand_entrance:option_2_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 69));  // rand_entrance:option_2_disabled
        };
        IF_SETHIDE(false, comp(1049, 37));  // rand_entrance:option_3_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 63)) == 18525 as graphic)) {  // rand_entrance:option_3
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 70));  // rand_entrance:option_3_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 70));  // rand_entrance:option_3_disabled
        };
        IF_SETHIDE(false, comp(1049, 43));  // rand_entrance:option_4_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 41)) == 18525 as graphic)) {  // rand_entrance:option_4
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 71));  // rand_entrance:option_4_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 71));  // rand_entrance:option_4_disabled
        };
        IF_SETHIDE(false, comp(1049, 49));  // rand_entrance:option_5_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 47)) == 18525 as graphic)) {  // rand_entrance:option_5
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 72));  // rand_entrance:option_5_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 72));  // rand_entrance:option_5_disabled
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 11));  // rand_entrance:option_1_text
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 62));  // rand_entrance:option_2_text
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 64));  // rand_entrance:option_3_text
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 42));  // rand_entrance:option_4_text
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));  // rand_entrance:option_5_text
    } else {
        IF_SETHIDE(true, comp(1049, 29));  // rand_entrance:option_1_layer_disabled
        IF_SETHIDE(true, comp(1049, 33));  // rand_entrance:option_2_layer_disabled
        IF_SETHIDE(true, comp(1049, 37));  // rand_entrance:option_3_layer_disabled
        IF_SETHIDE(true, comp(1049, 43));  // rand_entrance:option_4_layer_disabled
        IF_SETHIDE(true, comp(1049, 49));  // rand_entrance:option_5_layer_disabled
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 11));  // rand_entrance:option_1_text
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 62));  // rand_entrance:option_2_text
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 64));  // rand_entrance:option_3_text
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 42));  // rand_entrance:option_4_text
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 48));  // rand_entrance:option_5_text
        switch (varplayer_4474) {
            case 2: {
                IF_SETHIDE(false, comp(1049, 37));  // rand_entrance:option_3_layer_disabled
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 64));  // rand_entrance:option_3_text
                IF_SETHIDE(false, comp(1049, 43));  // rand_entrance:option_4_layer_disabled
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 42));  // rand_entrance:option_4_text
                IF_SETHIDE(false, comp(1049, 49));  // rand_entrance:option_5_layer_disabled
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));  // rand_entrance:option_5_text
                IF_SETHIDE(false, comp(1049, 32));  // rand_entrance:2_recommended
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1049, 43));  // rand_entrance:option_4_layer_disabled
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 42));  // rand_entrance:option_4_text
                IF_SETHIDE(false, comp(1049, 49));  // rand_entrance:option_5_layer_disabled
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));  // rand_entrance:option_5_text
                IF_SETHIDE(false, comp(1049, 36));  // rand_entrance:3_recommended
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1049, 49));  // rand_entrance:option_5_layer_disabled
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));  // rand_entrance:option_5_text
                IF_SETHIDE(false, comp(1049, 40));  // rand_entrance:4_recommended
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1049, 46));  // rand_entrance:5_recommended
                break;
            }
        };
    };
    return;
}