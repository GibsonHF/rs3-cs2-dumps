//
function script6979(int0: int): void {
    if ((int0 == -1)) {
        script7610("Select a potion from the list to view boosts.");
        return;
    };
    var int1 = enum_getvalue(0, 33, 9448 as cs2enum, int0);
    if ((int1 == -1 as obj)) {
        script7610("Select a potion from the list to view boosts.");
        return;
    };
    var int2 = item_getparam(int1, 2646);
    if ((int2 == -1)) {
        script7610("Select a potion from the list to view boosts.");
        return;
    };
    if ((script7612(int2) == 0)) {
        script7610("The Meilyr clan are still working on perfecting this recipe. You can help them by finding lost journal pages within Daemonheim.");
        IF_SETTEXT("Unknown recipe", comp(1555, 16));
        IF_SETTEXT("Cost to unlock:<br>Unknown", comp(1555, 15));
        return;
    };
    var string0 = OC_NAME(int1);
    string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 3));
    IF_SETTEXT(string0, comp(1555, 16));
    var int3 = script7157(comp(1555, 7), int1, 0);
    if ((int3 > IF_GETHEIGHT(comp(1555, 7)))) {
        IF_SETSCROLLSIZE(0, int3, comp(1555, 7));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1555, 7));
    };
    script31(comp(1555, 3), comp(1555, 7), -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic);
    var int4 = item_getparam(int1, 4665);
    IF_SETHIDE(false, comp(1555, 24));
    if ((script7611(int2) == 1)) {
        IF_SETTEXT("Unlocked!", comp(1555, 15));
    } else if ((int4 != -1)) {
        IF_SETTEXT(`Cost to unlock:<br>${TOSTRING_LOCALISED(int4, 1)}`, comp(1555, 15));
        IF_SETHIDE(true, comp(1555, 24));
    } else {
        IF_SETTEXT("-", comp(1555, 15));
    };
    return;
}