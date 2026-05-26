//
function script6979(int0: number): void {
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
        IF_SETTEXT("Unknown recipe", 101908496);
        IF_SETTEXT("Cost to unlock:<br>Unknown", 101908495);
        return;
    };
    var string0 = OC_NAME(int1);
    string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 3));
    IF_SETTEXT(string0, 101908496);
    var int3 = script7157(101908487, int1, 0);
    if ((int3 > IF_GETHEIGHT(101908487))) {
        IF_SETSCROLLSIZE(0, int3, 101908487);
    } else {
        IF_SETSCROLLSIZE(0, 0, 101908487);
    };
    script31(101908483, 101908487, -1, -1, -1, -1, -1, -1);
    var int4 = item_getparam(int1, 4665);
    IF_SETHIDE(0, 101908504);
    if ((script7611(int2) == 1)) {
        IF_SETTEXT("Unlocked!", 101908495);
    } else if ((int4 != -1)) {
        IF_SETTEXT(`Cost to unlock:<br>${TOSTRING_LOCALISED(int4, 1)}`, 101908495);
        IF_SETHIDE(1, 101908504);
    } else {
        IF_SETTEXT("-", 101908495);
    };
    return;
}