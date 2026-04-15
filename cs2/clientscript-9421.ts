//
function script9421(int0: int, int1: int): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 200);
    IF_SETHIDE(false, comp(711, 19));
    var int2 = enum_getvalue(0, 73, 8211 as cs2enum, int0);
    var int3 = struct_getparam(int2, 3931);
    var string0 = "Are you sure you want to claim this reward?";
    if ((STAT(1 as stat) < item_getparam(int3, 750))) {
        string0 = strconcat(string0, `<br><col=ff0000>You require ${inttostring(item_getparam(int3, 750), 10)} Defence to wear this armour.`);
    };
    var int4 = struct_getparam(int2, 3937);
    if ((varclient_3859 > 0)) {
        int4 = SCALE(95, 100, int4);
    };
    int4 = (int4 * int1);
    string0 = strconcat(string0, `<br>This will cost you ${inttostring(int4, 10)} renown.`);
    IF_SETTEXT(string0, comp(711, 89));
    if ((varbitplayer_21115 == 3)) {
        IF_SETTEXT(OC_NAME(struct_getparam(int2, 3931)), comp(711, 87));
        if ((struct_getparam(int2, 3941) == 1)) {
            IF_SETOBJECT(-1 as obj, -1, comp(711, 88));
            stack(struct_getparam(int2, 3948));
            stack(46596184);
            IF_SETGRAPHIC();
        } else {
            IF_SETOBJECT(struct_getparam(int2, 3931), -1, comp(711, 88));
        };
    } else {
        IF_SETTEXT(OC_NAME(struct_getparam(int2, 3932)), comp(711, 87));
        if ((struct_getparam(int2, 3941) == 1)) {
            IF_SETOBJECT(-1 as obj, -1, comp(711, 88));
            stack(struct_getparam(int2, 3949));
            stack(46596184);
            IF_SETGRAPHIC();
        } else {
            IF_SETOBJECT(struct_getparam(int2, 3932), -1, comp(711, 88));
        };
    };
    IF_SETONOP(callback(script9411, int0, 1), comp(711, 85));
    return;
}