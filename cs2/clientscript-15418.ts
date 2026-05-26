//
function script15418(int0: number): number {
    if ((varbitplayer_54030 == 0)) {
        return -1;
    };
    if ((int0 == 0)) {
        if ((MAP_LANG() == 3)) {
            return 583;
        };
        return 582;
    };
    var int1 = script10980(int0);
    if ((int1 == -1)) {
        script12478(`No graphic specified for multiplier ${inttostring(int0, 10)} in trh193_get_multiplier_id_graphic.`);
    };
    return int1;
}