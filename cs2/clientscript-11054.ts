//
function script11054(): void {
    var int0 = struct_getparam(varplayer_5144, 4829);
    var int1 = struct_getparam(varplayer_5144, 3344);
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 3038) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 3038), 104267776);
        } else {
            IF_SETGRAPHIC(-1 as graphic, 104267776);
        };
        IF_SETNPCMODEL(struct_getparam(int0, 1347), 104267778);
        IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4737), 104267778);
        IF_SETMODELANGLE(0, struct_getparam(int0, 3041), 0, 0, 0, struct_getparam(int0, 3040), 104267778);
    };
    if ((struct_getparam(varplayer_5144, 3344) > 0)) {
        IF_SETHIDE(0, 104267796);
        IF_SETOBJECT_NONUM(995, 10000, 104267784);
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
            IF_SETTEXT(script940(int1), 104267785);
        } else {
            IF_SETTEXT("Free", 104267785);
        };
        if ((script17401() >= int1)) {
            IF_SETCOLOUR(3342130, 104267785);
        } else {
            IF_SETCOLOUR(16724530, 104267785);
        };
    } else {
        IF_SETHIDE(1, 104267796);
    };
    if ((struct_getparam(varplayer_5144, 4827) != -1 as obj)) {
        IF_SETHIDE(0, 104267797);
        IF_SETOBJECT(struct_getparam(varplayer_5144, 4827), -1, 104267782);
        IF_SETTEXT(inttostring(struct_getparam(varplayer_5144, 4828), 10), 104267786);
        if ((INV_TOTAL(93, struct_getparam(varplayer_5144, 4827)) >= struct_getparam(varplayer_5144, 4828))) {
            IF_SETCOLOUR(3342130, 104267786);
        } else {
            IF_SETCOLOUR(16724530, 104267786);
        };
    } else {
        IF_SETHIDE(1, 104267797);
    };
    return;
}