//
function script11910(int0: struct, int1: component, int2: int, int3: int, int4: int, int5: unknown_int): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    if (((script6431() == false) && (script4761(25) == 0))) {
        return;
    };
    var int0 = script8247(int0);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 541 as struct;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    [int10, int11, int12, int13] = script14244();
    var int14 = 342;
    var int15 = 0;
    if ((script6431() == true)) {
        varclient_2 = 0;
        script1889(int9, struct_getparam(enum_getvalue(0, 73, 14118 as cs2enum, varplayer_7989), 7275));
    };
    script6211(int1, int2);
    if ((varclient_2 != 1)) {
        script8808();
        IF_OPENSUBCLIENT(comp(1477, 908), 1451);
        varclient_2 = 1;
        [string0, string1, string2, int7, int8] = script967(int0, 1, 1, 1);
        int6 = script17704(int0);
        stack(struct_getparam(int0, 2802));
        stack(struct_getparam(int9, 8237));
        IF_SETGRAPHIC();
        stack(int9);
        stack(8231);
        struct_getparam();
        if ((IF_FIND(stack()) == 1)) {
            CC_SETTEXT(string0);
        };
        if ((IF_FIND(struct_getparam(int9, 8931)) == 1)) {
            CC_SETTEXT(string2);
        };
        if ((IF_FIND(struct_getparam(int9, 8232)) == 1)) {
            CC_SETTEXT(string1);
            IF_SETSIZE(8, (2 + script7593(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS(), 0)), 1, 0, comp(1451, 9));
            int15 = (unk11025(95092745) + IF_GETHEIGHT(comp(1451, 9)));
        };
        if ((IF_FIND(struct_getparam(int9, 8932)) == 1)) {
            CC_SETTEXT(script17698(int0, 0));
            if ((IF_FIND[1](struct_getparam(int9, 8934)) == 1)) {
                if ((STRING_LENGTH(CC_GETTEXT()) > 0)) {
                    CC_SETGRAPHIC[1](22629 as graphic);
                } else {
                    CC_SETGRAPHIC[1](-1 as graphic);
                };
            };
        };
        if ((IF_FIND(struct_getparam(int9, 8933)) == 1)) {
            CC_SETTEXT(script17707(int6, 0));
            if ((IF_FIND[1](struct_getparam(int9, 8935)) == 1)) {
                CC_SETGRAPHIC[1](script17705(int6));
            };
        };
        if ((script7473(int0, int7, int8, 1) > 0)) {
            int15 = (int15 + 50);
            if ((IF_FIND(struct_getparam(int9, 8930)) == 1)) {
                IF_SETHIDE(false, comp(1451, 15));
            };
        } else if ((IF_FIND(struct_getparam(int9, 8930)) == 1)) {
            IF_SETHIDE(true, comp(1451, 15));
        };
        int15 = (int15 + 9);
        if ((int5 == 0)) {
            if ((int2 == -1)) {
                var [int3, int4] = script8405(int1);
            } else {
                [int3, int4] = script8406(int1, int2);
            };
        };
        int4 = (int4 + script20394(35));
        if (((int4 + int15) >= int13)) {
            int4 = (int4 - int15);
            int4 = (int4 - script20394(35));
        };
        int4 = MAX(MIN(int4, (int13 - int15)), int11);
        int3 = MAX(MIN((int3 - (int14 / 2)), (int12 - int14)), int10);
        if ((IF_FIND(struct_getparam(int9, 8230)) == 1)) {
            CC_SETSIZE(int14, int15, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
        };
        if ((script7981(int0) == 1)) {
            IF_SETHIDE(false, comp(1451, 27));
        } else {
            IF_SETHIDE(true, comp(1451, 27));
        };
    };
    return;
}