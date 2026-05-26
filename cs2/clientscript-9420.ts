//
function script9420(int0: number): void {
    SOUND_VORBIS_VOLUME(36961, 1, 0, 200);
    IF_SETHIDE(0, 46596115);
    var int1 = enum_getvalue(0, 73, 8211 as cs2enum, int0);
    var int2 = struct_getparam(int1, 3931);
    var string0 = "Are you sure you want to claim this reward?";
    if ((STAT(1) < item_getparam(int2, 750))) {
        string0 = strconcat(string0, `<br><col=ff0000>You require ${inttostring(item_getparam(int2, 750), 10)} Defence to wear this armour.`);
    };
    IF_SETTEXT(string0, 46596185);
    if ((varbitplayer_21115 == 3)) {
        IF_SETTEXT(OC_NAME(struct_getparam(int1, 3931)), 46596183);
        if ((struct_getparam(int1, 3941) == 1)) {
            IF_SETOBJECT(-1 as obj, -1, 46596184);
            stack(struct_getparam(int1, 3948));
            stack(46596184);
            IF_SETGRAPHIC();
        } else {
            IF_SETOBJECT(struct_getparam(int1, 3931), -1, 46596184);
        };
    } else {
        IF_SETTEXT(OC_NAME(struct_getparam(int1, 3932)), 46596183);
        if ((struct_getparam(int1, 3941) == 1)) {
            IF_SETOBJECT(-1 as obj, -1, 46596184);
            stack(struct_getparam(int1, 3949));
            stack(46596184);
            IF_SETGRAPHIC();
        } else {
            IF_SETOBJECT(struct_getparam(int1, 3932), -1, 46596184);
        };
    };
    IF_SETONOP(callback(script9411, int0, 1), 46596181);
    return;
}