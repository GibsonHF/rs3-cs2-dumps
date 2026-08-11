//
function script11193(): void {
    IF_SETOBJECT(19675 as obj, -1, comp(1944, 46));  // toolbelt_v2:herbicide_button_graphic
    IF_SETOBJECT(31188 as obj, -1, comp(1944, 56));  // toolbelt_v2:seedicide_button_graphic
    IF_SETOBJECT(27996 as obj, -1, comp(1944, 66));  // toolbelt_v2:charmimp_button_graphic
    IF_SETOBJECT(18337 as obj, -1, comp(1944, 76));  // toolbelt_v2:bonecrusher_button_graphic
    IF_SETOBJECT(41375 as obj, -1, comp(1944, 86));  // toolbelt_v2:gold_acc_button_graphic
    IF_SETOBJECT(4446 as obj, -1, comp(1944, 97));  // toolbelt_v2:keyring_button_graphic
    if ((varbitplayer_38662 == 1)) {
        IF_SETGRAPHIC(13165 as graphic, comp(1944, 87));  // toolbelt_v2:gold_acc_enabled
    } else {
        IF_SETGRAPHIC(13166 as graphic, comp(1944, 87));  // toolbelt_v2:gold_acc_enabled
    };
    IF_SETHIDE(false, comp(1944, 33));  // toolbelt_v2:settings_choice
    return;
}