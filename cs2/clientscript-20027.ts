//
function script20027(int0: number): number {
    if ((varbitplayer_58144 == 0)) {
        return -1;
    };
    if ((int0 == 0)) {
        return -1;
    };
    var int1 = script19209(int0);
    if ((int1 == -1)) {
        script12478(`No graphic specified for rarity ${inttostring(int0, 10)} in trh210_get_rarity_id_graphic.`);
    };
    return int1;
}