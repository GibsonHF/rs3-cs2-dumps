//
function script10130(): void {
    var int0 = -1;
    var string0 = "";
    var string1 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    if ((STRING_LENGTH(varclient_4289) < 1)) {
        varclient_4289 = "Broadcast Title";
    };
    IF_SETTEXT(varclient_4289, comp(232, 116));
    varclient_4290 = STRING_LENGTH(varclient_4289);
    script10121(comp(232, 116), -1, -1, comp(232, 115));
    script10132();
    if ((varbitclient_23068 > 0)) {
        IF_SETHIDE(false, comp(232, 123));
        IF_SETHIDE(true, comp(232, 125));
        if ((varbitclient_23079 > 0)) {
            IF_SETHIDE(false, comp(232, 124));
        } else {
            IF_SETHIDE(true, comp(232, 124));
        };
    } else {
        IF_SETHIDE(true, comp(232, 123));
        IF_SETHIDE(false, comp(232, 125));
        if ((varbitclient_23079 > 0)) {
            IF_SETHIDE(false, comp(232, 126));
        } else {
            IF_SETHIDE(true, comp(232, 126));
        };
    };
    if ((varbitclient_23249 > 0)) {
        IF_SETHIDE(false, comp(232, 181));
        IF_SETHIDE(true, comp(232, 183));
        IF_SETHIDE(true, comp(232, 182));
    } else {
        IF_SETHIDE(true, comp(232, 181));
        IF_SETHIDE(false, comp(232, 183));
        IF_SETHIDE(true, comp(232, 184));
    };
    if ((varbitclient_23250 > 0)) {
        IF_SETHIDE(false, comp(232, 185));
        IF_SETHIDE(true, comp(232, 187));
        IF_SETHIDE(true, comp(232, 186));
    } else {
        IF_SETHIDE(true, comp(232, 185));
        IF_SETHIDE(false, comp(232, 187));
        IF_SETHIDE(true, comp(232, 188));
    };
    if ((STRING_LENGTH(varclient_4291) > 0)) {
        IF_SETHIDE(false, comp(232, 137));
        stack(TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291));
        [int0, string0, string1] = stack();
        if ((int0 != -1)) {
            [int3, int4, int5, int6, int7] = TTV_WEBCAM_GETCAP_BYUNIQUEID(int0, varclient_4292);
            IF_SETTEXT(string1, comp(232, 131));
            IF_SETHIDE(true, comp(232, 138));
            IF_SETHIDE(false, comp(232, 129));
            IF_SETTEXT(`${inttostring(int5, 10)} x ${inttostring(int6, 10)}, framerate: ${inttostring(int7, 10)}`, comp(232, 135));
            int2 = TTV_WEBCAM_GETDEVICE_COUNT();
            if ((int2 > 1)) {
                IF_SETHIDE(false, comp(232, 132));
                IF_SETHIDE(false, comp(232, 133));
            } else {
                IF_SETHIDE(true, comp(232, 132));
                IF_SETHIDE(true, comp(232, 133));
            };
        };
    };
    if ((varbitclient_23069 > 0)) {
        IF_SETHIDE(false, comp(232, 129));
        IF_SETHIDE(true, comp(232, 139));
        IF_SETHIDE(false, comp(232, 137));
    } else {
        IF_SETHIDE(true, comp(232, 129));
        IF_SETHIDE(false, comp(232, 139));
        IF_SETHIDE(true, comp(232, 137));
    };
    if ((varbitclient_23079 > 0)) {
        IF_SETTEXT("Stop Broadcast", comp(232, 150));
    };
    script7698();
    return;
}