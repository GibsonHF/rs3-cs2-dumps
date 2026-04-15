//
function script16572(): void {
    var int0 = script10405(18);
    if ((int0 == -1 as struct)) {
        return;
    };
    var int1 = struct_getparam(int0, 3503);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    if ((IF_GETHIDE(comp(276, 27)) == true)) {
        if ((script8314(1028) != -1)) {
            script8323(1028, 0);
        };
        IF_SETHIDE(false, comp(276, 27));
        IF_SETPOSITION(script3365(comp(857, 28)), script3366(comp(857, 28)), 0, 0, int1);
        IF_SETSIZE(IF_GETWIDTH(comp(857, 28)), IF_GETHEIGHT(comp(857, 28)), 0, 0, int1);
        IF_SETHIDE(true, int1);
        varclient_6798 = 0;
        script6060(0);
        script15855(enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443));
    } else {
        IF_SETHIDE(true, comp(276, 27));
        script15854(enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443));
        IF_SETHIDE(false, int1);
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