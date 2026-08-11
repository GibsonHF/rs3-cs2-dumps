//
function script20738(): void {
    var int0 = 17040 as graphic;
    var int1 = 17041;
    if ((varbitclient_61229 == 1)) {
        int0 = 17042 as graphic;
        int1 = 17065;
    };
    IF_SETGRAPHIC(int0, comp(1512, 27));  // house_furniture_catalogue:toggle_icon
    IF_SETONMOUSEOVER(callback(script44, 99090459, int1), comp(1512, 26));  // house_furniture_catalogue:toggle_button
    IF_SETONMOUSELEAVE(callback(script44, 99090459, int0), comp(1512, 26));  // house_furniture_catalogue:toggle_button
    return;
}