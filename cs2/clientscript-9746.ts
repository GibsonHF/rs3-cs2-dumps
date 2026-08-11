//
function script9746(): void {
    IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 1));  // rand_entrance:yes_text
    IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 9));  // rand_entrance:no_text
    if (((varclient_4188 == 0) || (varclient_4188 == -1))) {
        IF_SETHIDE(false, comp(1049, 22));  // rand_entrance:hm_yes_option_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 0)) == 18525 as graphic)) {  // rand_entrance:yes_radial
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 65));  // rand_entrance:yes_radial_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 65));  // rand_entrance:yes_radial_disabled
        };
        IF_SETHIDE(false, comp(1049, 24));  // rand_entrance:hm_no_option_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 8)) == 18525 as graphic)) {  // rand_entrance:no_radial
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 66));  // rand_entrance:no_radial_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 66));  // rand_entrance:no_radial_disabled
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 1));  // rand_entrance:yes_text
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 9));  // rand_entrance:no_text
    } else {
        IF_SETHIDE(true, comp(1049, 22));  // rand_entrance:hm_yes_option_layer_disabled
        IF_SETHIDE(true, comp(1049, 24));  // rand_entrance:hm_no_option_layer_disabled
    };
    return;
}