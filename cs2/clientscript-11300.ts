//
function script11300(): void {
    var string0 = "Placing:<br>";
    if ((varplayer_5228 >= 1)) {
        string0 = strconcat(string0, enum_getvalue(0, 36, 9971 as cs2enum, varplayer_5228));
    } else {
        string0 = "Select an object to place";
    };
    IF_SETTEXT(string0, comp(1613, 60));
    return;
}