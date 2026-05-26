//
function script16572(): void {
    var int0 = script10405(18);
    if ((int0 == -1)) {
        return;
    };
    var int1 = struct_getparam(int0, 3503);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    if ((IF_GETHIDE(18087963) == 1)) {
        if ((script8314(1028) != -1)) {
            script8323(1028, 0);
        };
        IF_SETHIDE(0, comp(276, 27));
        IF_SETPOSITION(script3365(56164380), script3366(56164380), 0, 0, int1);
        IF_SETSIZE(IF_GETWIDTH(56164380), IF_GETHEIGHT(56164380), 0, 0, int1);
        IF_SETHIDE(1, int1);
        varclient_6798 = 0;
        script6060(0);
        script15855(enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443));
    } else {
        IF_SETHIDE(1, comp(276, 27));
        script15854(enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443));
        IF_SETHIDE(0, int1);
        IF_SETPOSITION(0, 82, 0, 0, int1);
        IF_SETSIZE(300, 100, 0, 0, int1);
        script9292();
    };
    script15881();
    script8491(18);
    script1558(18, 0);
    script15871();
    script10228();
    script15872();
    return;
}