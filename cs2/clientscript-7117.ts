//
function script7117(): void {
    var int0 = -1;
    if ((((((script15532(0) == 0) && (varplayer_1168 != -1 as cs2enum)) && (varplayer_7881 != -1 as cs2enum)) && (varplayer_1169 != -1 as cs2enum)) && (enum_hasoutput(26, varplayer_1168, varplayer_1169) == 1))) {
        IF_SETHIDE(false, comp(1371, 11));
        IF_SETHIDE(true, comp(1371, 8));
        int0 = enum_getreverseindex(26, 0, varplayer_1168, varplayer_1169, 0);
        script10428(89849883, 89849884, varplayer_7881, -1, "Select a category", int0, 0);
        return;
    };
    IF_SETHIDE(true, comp(1371, 11));
    IF_SETHIDE(false, comp(1371, 8));
    if (((strcmp(varclient_2390, "") != 0) && (strcmp(varclient_2390, "null") != 0))) {
        script13969(89849865, -1, 38566, varclient_2390);
    } else {
        script13969(89849865, -1, 38566, "Create Item");
    };
    return;
}