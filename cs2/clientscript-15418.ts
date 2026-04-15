//
function script15418(int0: int): graphic {
    if ((varbitplayer_54030 == 0)) {
        return -1 as graphic;
    };
    if ((int0 == 0)) {
        if ((MAP_LANG() == 3)) {
            return 583 as graphic;
        };
        return 582 as graphic;
    };
    var int1 = script10980(int0);
    if ((int1 == -1 as graphic)) {
        script12478(`No graphic specified for multiplier ${inttostring(int0, 10)} in trh193_get_multiplier_id_graphic.`);
    };
    return int1;
}