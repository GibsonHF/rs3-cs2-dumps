//
function script5106(): void {
    IF_SETHIDE(true, comp(1116, 33));  // clan_signpost:clan_selected_layer1
    IF_SETHIDE(true, comp(1116, 160));  // clan_signpost:clan_selected_layer2
    IF_SETHIDE(true, comp(1116, 209));  // clan_signpost:clan_selected_layer3
    IF_SETHIDE(true, comp(1116, 258));  // clan_signpost:clan_selected_layer4
    IF_SETHIDE(true, comp(1116, 307));  // clan_signpost:clan_selected_layer5
    IF_SETHIDE(true, comp(1116, 356));  // clan_signpost:clan_selected_layer6
    IF_SETHIDE(true, comp(1116, 405));  // clan_signpost:clan_selected_layer7
    IF_SETHIDE(true, comp(1116, 454));  // clan_signpost:clan_selected_layer8
    IF_SETHIDE(true, comp(1116, 503));  // clan_signpost:clan_selected_layer9
    switch (varplayer_1940) {
        case 1: {
            IF_SETHIDE(false, comp(1116, 33));  // clan_signpost:clan_selected_layer1
            script5107(varplayer_1930);
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1116, 160));  // clan_signpost:clan_selected_layer2
            script5107(varplayer_1931);
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1116, 209));  // clan_signpost:clan_selected_layer3
            script5107(varplayer_1932);
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1116, 258));  // clan_signpost:clan_selected_layer4
            script5107(varplayer_1933);
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1116, 307));  // clan_signpost:clan_selected_layer5
            script5107(varplayer_1934);
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1116, 356));  // clan_signpost:clan_selected_layer6
            script5107(varplayer_1935);
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1116, 405));  // clan_signpost:clan_selected_layer7
            script5107(varplayer_1936);
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(1116, 454));  // clan_signpost:clan_selected_layer8
            script5107(varplayer_1937);
            break;
        }
        case 9: {
            IF_SETHIDE(false, comp(1116, 503));  // clan_signpost:clan_selected_layer9
            script5107(varplayer_1938);
            break;
        }
    };
    return;
}