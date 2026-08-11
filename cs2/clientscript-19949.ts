//
function script19949(): void {
    var int0 = -1;
    var int1 = ENUM_GETOUTPUTCOUNT(8220 as cs2enum);
    int0 = (int0 + 1);
    while ((int0 < int1)) {
        IF_SETHIDE(true, enum_getvalue(0, 9, 8220 as cs2enum, int0));
    };
    IF_SETHIDE(true, comp(1336, 28));  // easter_egg_hunt:clue_info_text
    return;
}