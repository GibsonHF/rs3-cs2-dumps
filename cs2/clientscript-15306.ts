//
function script15306(): void {
    var int0 = 0;
    var int1 = script20087();
    if ((varbitplayer_58313 == 1)) {
        IF_SETHIDE(true, comp(422, 109));  // slayer_dungeon:room_unlock_subtitle
        IF_SETHIDE(false, comp(422, 110));  // slayer_dungeon:hotspot_icon_16
        IF_SETHIDE(false, comp(422, 114));  // slayer_dungeon:hotspot_icon_17
        IF_SETHIDE(false, comp(422, 118));  // slayer_dungeon:hotspot_icon_18
        IF_SETHIDE(false, comp(422, 122));  // slayer_dungeon:hotspot_icon_19
        IF_SETHIDE(false, comp(422, 126));  // slayer_dungeon:hotspot_icon_20
        IF_SETHIDE(false, comp(422, 101));  // slayer_dungeon:hotspot_graphic_16
        IF_SETHIDE(false, comp(422, 102));  // slayer_dungeon:hotspot_graphic_17
        IF_SETHIDE(false, comp(422, 103));  // slayer_dungeon:hotspot_graphic_18
        IF_SETHIDE(false, comp(422, 104));  // slayer_dungeon:hotspot_graphic_19
        IF_SETHIDE(false, comp(422, 105));  // slayer_dungeon:hotspot_graphic_20
    } else {
        IF_SETHIDE(false, comp(422, 109));  // slayer_dungeon:room_unlock_subtitle
        IF_SETHIDE(true, comp(422, 110));  // slayer_dungeon:hotspot_icon_16
        IF_SETHIDE(true, comp(422, 114));  // slayer_dungeon:hotspot_icon_17
        IF_SETHIDE(true, comp(422, 118));  // slayer_dungeon:hotspot_icon_18
        IF_SETHIDE(true, comp(422, 122));  // slayer_dungeon:hotspot_icon_19
        IF_SETHIDE(true, comp(422, 126));  // slayer_dungeon:hotspot_icon_20
        IF_SETHIDE(true, comp(422, 101));  // slayer_dungeon:hotspot_graphic_16
        IF_SETHIDE(true, comp(422, 102));  // slayer_dungeon:hotspot_graphic_17
        IF_SETHIDE(true, comp(422, 103));  // slayer_dungeon:hotspot_graphic_18
        IF_SETHIDE(true, comp(422, 104));  // slayer_dungeon:hotspot_graphic_19
        IF_SETHIDE(true, comp(422, 105));  // slayer_dungeon:hotspot_graphic_20
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as npc;
    var int5 = -1 as struct;
    var int6 = -1 as obj;
    int0 = (int0 + 1);
    while ((int0 <= int1)) {
        int2 = script15302(int0);
        int3 = script15303(int0);
        if ((int2 > 0)) {
            int4 = enum_getvalue(0, 32, 12737 as cs2enum, int2);
            int5 = enum_getvalue(32, 73, 12740 as cs2enum, int4);
            int6 = struct_getparam(int5, 6601);
            IF_SETOBJECT_NONUM(int6, 0, script15312(int0));
            script15313(int0, 1);
            IF_SETOPBASE(`<col=ff9040>${struct_getparam(int5, 6600)}`, script15314(int0));
        } else {
            IF_SETOBJECT(-1 as obj, 0, script15312(int0));
            script15313(int0, 0);
            IF_SETOPBASE("", script15314(int0));
        };
    };
    return;
}