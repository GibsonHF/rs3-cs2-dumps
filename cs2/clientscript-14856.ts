//
function script14856(int0: int): void {
    SOUND_VORBIS_VOLUME(48233 as vorbis, 1, 0, 200);
    varclient_6761 = int0;
    script14857(int0);
    IF_SETHIDE(true, comp(691, 96));
    var int1 = 0;
    var int2 = enum_getvalue(0, 74, 14090 as cs2enum, int0);
    if ((int2 != -1 as dbrow)) {
        int1 = script14606(varplayer_12086, dbrow_getfield(int2, 385024, 0));
        if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int2, 385072, 0) == true))) {
            IF_SETHIDE(false, comp(691, 96));
        };
    };
    switch (int1) {
        case 0: {
            script13971(comp(691, 71), comp(691, 72), 28553 as struct, "Unavailable", true);
            break;
        }
        case 1: {
            script13969(comp(691, 71), comp(691, 72), 28553 as struct, "Harness Power");
            break;
        }
        case 2: {
            script13969(comp(691, 71), comp(691, 72), 28554 as struct, "Unharness Power");
            break;
        }
    };
    script14844(45285427, comp(-1, 65535), comp(-1, 65535), comp(691, 90), comp(691, 91), enum_getvalue(0, 74, 14090 as cs2enum, int0));
    IF_SETTEXT(TOSTRING_LOCALISED(script14612(int2), 1), comp(691, 102));
    IF_SETTEXT(TOSTRING_LOCALISED(script14611(int2), 1), comp(691, 104));
    return;
}