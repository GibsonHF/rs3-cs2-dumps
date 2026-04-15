//
function script11054(): void {
    var int0 = struct_getparam(varplayer_5144, 4829);
    var int1 = struct_getparam(varplayer_5144, 3344);
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 3038) != -1 as graphic)) {
            stack(struct_getparam(int0, 3038));
            stack(104267776);
            IF_SETGRAPHIC();
        } else {
            stack(-1);
            stack(104267776);
            IF_SETGRAPHIC();
        };
        IF_SETNPCMODEL(struct_getparam(int0, 1347), comp(1591, 2));
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4737), comp(1591, 2));
        IF_SETMODELANGLE(0, struct_getparam(int0, 3041), 0, 0, 0, struct_getparam(int0, 3040), comp(1591, 2));
    };
    if ((struct_getparam(varplayer_5144, 3344) > 0)) {
        IF_SETHIDE(false, comp(1591, 20));
        IF_SETOBJECT_NONUM(995 as obj, 10000, comp(1591, 8));
        if ((varbitplayer_22912 == 1)) {
            int1 = SCALE(int1, 100, 75);
        };
        if ((varbitplayer_45717 == 1)) {
            int1 = SCALE(int1, 100, 50);
        };
        if ((script19320() == 1)) {
            int1 = 0;
        };
        if ((int1 > 0)) {
            IF_SETTEXT(script940(int1), comp(1591, 9));
        } else {
            IF_SETTEXT("Free", comp(1591, 9));
        };
        if ((script17401() >= int1)) {
            IF_SETCOLOUR(3342130, comp(1591, 9));
        } else {
            IF_SETCOLOUR(16724530, comp(1591, 9));
        };
    } else {
        IF_SETHIDE(true, comp(1591, 20));
    };
    if ((struct_getparam(varplayer_5144, 4827) != -1 as obj)) {
        IF_SETHIDE(false, comp(1591, 21));
        IF_SETOBJECT(struct_getparam(varplayer_5144, 4827), -1, comp(1591, 6));
        IF_SETTEXT(inttostring(struct_getparam(varplayer_5144, 4828), 10), comp(1591, 10));
        if ((INV_TOTAL(93 as inv, struct_getparam(varplayer_5144, 4827)) >= struct_getparam(varplayer_5144, 4828))) {
            IF_SETCOLOUR(3342130, comp(1591, 10));
        } else {
            IF_SETCOLOUR(16724530, comp(1591, 10));
        };
    } else {
        IF_SETHIDE(true, comp(1591, 21));
    };
    return;
}