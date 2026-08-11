//
function script7509(int0: number): void {
    var int1 = 0;
    var int2 = 3;
    if ((varclient_2707 >= 4)) {
        int2 = 1;
    } else if ((varclient_2707 >= 2)) {
        int2 = 2;
    };
    if (((varclient_2705 > int2) && (varclient_2706 == false))) {
        SOUND_VORBIS_VOLUME(16778 as vorbis, 1, 0, 50);
        varclient_2705 = (varclient_2705 - 1);
        IF_SETGRAPHIC(script7504(script7513(varclient_2705)), comp(1389, 15));  // rand_dnd_select_card:rand_dnd_chosen_card
        IF_SETTEXT(script7505(script7513(varclient_2705)), comp(1389, 7));  // rand_dnd_select_card:rand_dnd_card_name_text
        IF_SETTEXT(script7515(script7513(varclient_2705)), comp(1389, 26));  // rand_dnd_select_card:info_text
        IF_SETONTIMER(callback(script7511, 100, 0, int0), comp(1389, 5));  // rand_dnd_select_card:rand_dnd_cards_perm_layer
        varclient_2706 = true;
    };
    return;
}