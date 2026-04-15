//
function script20027(int0: int): graphic {
    if ((varbitplayer_58144 == 0)) {
        return -1 as graphic;
    };
    if ((int0 == 0)) {
        return -1 as graphic;
    };
    var int1 = script19209(int0);
    if ((int1 == -1 as graphic)) {
        script12478(`No graphic specified for rarity ${inttostring(int0, 10)} in trh210_get_rarity_id_graphic.`);
    };
    return int1;
}