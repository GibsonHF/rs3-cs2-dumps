//
function script9717(int0: struct): void {
    var int1 = 1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = item_getparam(varclient_1799, 5741);
    var string0 = "";
    var int9 = -1 as obj;
    IF_SETHIDE(false, struct_getparam(int0, 8525));
    IF_SETHIDE(false, struct_getparam(int0, 8526));
    IF_SETHIDE(false, struct_getparam(int0, 8527));
    IF_SETHIDE(false, struct_getparam(int0, 8528));
    IF_SETHIDE(false, struct_getparam(int0, 8529));
    if ((int8 != -1 as struct)) {
        int1 = struct_getparam(int8, 8524);
        string0 = struct_getparam(int8, 5747);
        if ((int1 == 9)) {
            IF_SETTEXT(`Use all ${string0}`, struct_getparam(int0, 8530));
            IF_SETTEXT(`Use all ${string0}`, struct_getparam(int0, 8531));
            IF_SETTEXT(`Use all ${string0}`, struct_getparam(int0, 8532));
            IF_SETTEXT(`Use all ${string0}`, struct_getparam(int0, 8533));
            IF_SETTEXT(`Use all ${string0}`, struct_getparam(int0, 8534));
        } else {
            IF_SETTEXT(`Use all small ${string0}`, struct_getparam(int0, 8530));
            IF_SETTEXT(`Use all medium ${string0}`, struct_getparam(int0, 8531));
            IF_SETTEXT(`Use all large ${string0}`, struct_getparam(int0, 8532));
            IF_SETTEXT(`Use all huge ${string0}`, struct_getparam(int0, 8533));
            IF_SETTEXT(`Use all giant ${string0}`, struct_getparam(int0, 8534));
        };
        int9 = struct_getparam(int8, 5743);
        if ((int9 == -1 as obj)) {
            IF_SETHIDE(true, struct_getparam(int0, 8525));
        } else if (((OC_MEMBERS(int9) == 0) || (MAP_MEMBERS() == 1))) {
            int2 = INV_TOTAL(93 as inv, int9);
        };
        int9 = struct_getparam(int8, 5744);
        if ((int9 == -1 as obj)) {
            IF_SETHIDE(true, struct_getparam(int0, 8526));
        } else if (((OC_MEMBERS(int9) == 0) || (MAP_MEMBERS() == 1))) {
            int3 = INV_TOTAL(93 as inv, int9);
        };
        int9 = struct_getparam(int8, 5745);
        if ((int9 == -1 as obj)) {
            IF_SETHIDE(true, struct_getparam(int0, 8527));
        } else if (((OC_MEMBERS(int9) == 0) || (MAP_MEMBERS() == 1))) {
            int4 = INV_TOTAL(93 as inv, int9);
        };
        int9 = struct_getparam(int8, 5746);
        if ((int9 == -1 as obj)) {
            IF_SETHIDE(true, struct_getparam(int0, 8528));
        } else if (((OC_MEMBERS(int9) == 0) || (MAP_MEMBERS() == 1))) {
            int5 = INV_TOTAL(93 as inv, int9);
        };
        int9 = struct_getparam(int8, 8523);
        if ((int9 == -1 as obj)) {
            IF_SETHIDE(true, struct_getparam(int0, 8529));
        } else if (((OC_MEMBERS(int9) == 0) || (MAP_MEMBERS() == 1))) {
            int6 = INV_TOTAL(93 as inv, int9);
        };
    } else if ((OC_CATEGORY(varclient_1799) == 3470 as category)) {
        int1 = 6;
        IF_SETTEXT("Use all tiny packs", struct_getparam(int0, 8530));
        IF_SETTEXT("Use all small packs", struct_getparam(int0, 8531));
        IF_SETTEXT("Use all medium packs", struct_getparam(int0, 8532));
        IF_SETTEXT("Use all large packs", struct_getparam(int0, 8533));
        IF_SETTEXT("Use all huge packs", struct_getparam(int0, 8534));
        int2 = INV_TOTAL(93 as inv, 36813 as obj);
        int3 = INV_TOTAL(93 as inv, 34023 as obj);
        int4 = INV_TOTAL(93 as inv, 34024 as obj);
        int5 = INV_TOTAL(93 as inv, 34025 as obj);
        int6 = INV_TOTAL(93 as inv, 52194 as obj);
        IF_SETHIDE(false, struct_getparam(int0, 8529));
    } else if ((OC_CATEGORY(varclient_1799) == 4698 as category)) {
        int1 = 7;
        IF_SETTEXT("Use all tiny packs", struct_getparam(int0, 8530));
        IF_SETTEXT("Use all small packs", struct_getparam(int0, 8531));
        IF_SETTEXT("Use all medium packs", struct_getparam(int0, 8532));
        IF_SETTEXT("Use all large packs", struct_getparam(int0, 8533));
        IF_SETTEXT("Use all huge packs", struct_getparam(int0, 8534));
        IF_SETHIDE(false, struct_getparam(int0, 8529));
        int2 = INV_TOTAL(93 as inv, 52195 as obj);
        int3 = INV_TOTAL(93 as inv, 44707 as obj);
        int4 = INV_TOTAL(93 as inv, 34026 as obj);
        int5 = INV_TOTAL(93 as inv, 52196 as obj);
        int6 = INV_TOTAL(93 as inv, 52197 as obj);
    } else if ((OC_CATEGORY(varclient_1799) == 3729 as category)) {
        int1 = 8;
        IF_SETTEXT("Use all medium crates", struct_getparam(int0, 8533));
        IF_SETTEXT("Use all large crates", struct_getparam(int0, 8534));
        IF_SETHIDE(true, struct_getparam(int0, 8525));
        IF_SETHIDE(true, struct_getparam(int0, 8526));
        IF_SETHIDE(true, struct_getparam(int0, 8527));
        IF_SETHIDE(false, struct_getparam(int0, 8528));
        IF_SETHIDE(false, struct_getparam(int0, 8529));
        int5 = script9295(93 as inv, 36200 as obj);
        int6 = script9295(93 as inv, 36196 as obj);
    };
    if ((int2 > 0)) {
        int7 = varbitplayer_22565;
    } else {
        int7 = -1;
    };
    script9721(int7, struct_getparam(int0, 8530), struct_getparam(int0, 8535));
    if ((int3 > 0)) {
        int7 = varbitplayer_22566;
    } else {
        int7 = -1;
    };
    script9721(int7, struct_getparam(int0, 8531), struct_getparam(int0, 8536));
    if ((int4 > 0)) {
        int7 = varbitplayer_22567;
    } else {
        int7 = -1;
    };
    script9721(int7, struct_getparam(int0, 8532), struct_getparam(int0, 8537));
    if ((int5 > 0)) {
        int7 = varbitplayer_22568;
    } else {
        int7 = -1;
    };
    script9721(int7, struct_getparam(int0, 8533), struct_getparam(int0, 8538));
    if ((int6 > 0)) {
        int7 = varbitplayer_50268;
    } else {
        int7 = -1;
    };
    script9721(int7, struct_getparam(int0, 8534), struct_getparam(int0, 8539));
    script9722(int2, int3, int4, int5, int6, int1, struct_getparam(int0, 8540));
    return;
}