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
    IF_SETTEXT(varclient_4289, 15204468);
    varclient_4290 = STRING_LENGTH(varclient_4289);
    script10121(15204468, -1, -1, 15204467);
    script10132();
    if ((varbitclient_23068 > 0)) {
        IF_SETHIDE(0, 15204475);
        IF_SETHIDE(1, 15204477);
        if ((varbitclient_23079 > 0)) {
            IF_SETHIDE(0, 15204476);
        } else {
            IF_SETHIDE(1, 15204476);
        };
    } else {
        IF_SETHIDE(1, 15204475);
        IF_SETHIDE(0, 15204477);
        if ((varbitclient_23079 > 0)) {
            IF_SETHIDE(0, 15204478);
        } else {
            IF_SETHIDE(1, 15204478);
        };
    };
    if ((varbitclient_23249 > 0)) {
        IF_SETHIDE(0, 15204533);
        IF_SETHIDE(1, 15204535);
        IF_SETHIDE(1, 15204534);
    } else {
        IF_SETHIDE(1, 15204533);
        IF_SETHIDE(0, 15204535);
        IF_SETHIDE(1, 15204536);
    };
    if ((varbitclient_23250 > 0)) {
        IF_SETHIDE(0, 15204537);
        IF_SETHIDE(1, 15204539);
        IF_SETHIDE(1, 15204538);
    } else {
        IF_SETHIDE(1, 15204537);
        IF_SETHIDE(0, 15204539);
        IF_SETHIDE(1, 15204540);
    };
    if ((STRING_LENGTH(varclient_4291) > 0)) {
        IF_SETHIDE(0, 15204489);
        stack(TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291));
        [int0, string0, string1] = stack();
        if ((int0 != -1)) {
            [int3, int4, int5, int6, int7] = TTV_WEBCAM_GETCAP_BYUNIQUEID(int0, varclient_4292);
            IF_SETTEXT(string1, 15204483);
            IF_SETHIDE(1, 15204490);
            IF_SETHIDE(0, 15204481);
            IF_SETTEXT(`${inttostring(int5, 10)} x ${inttostring(int6, 10)}, framerate: ${inttostring(int7, 10)}`, 15204487);
            int2 = TTV_WEBCAM_GETDEVICE_COUNT();
            if ((int2 > 1)) {
                IF_SETHIDE(0, 15204484);
                IF_SETHIDE(0, 15204485);
            } else {
                IF_SETHIDE(1, 15204484);
                IF_SETHIDE(1, 15204485);
            };
        };
    };
    if ((varbitclient_23069 > 0)) {
        IF_SETHIDE(0, 15204481);
        IF_SETHIDE(1, 15204491);
        IF_SETHIDE(0, 15204489);
    } else {
        IF_SETHIDE(1, 15204481);
        IF_SETHIDE(0, 15204491);
        IF_SETHIDE(1, 15204489);
    };
    if ((varbitclient_23079 > 0)) {
        IF_SETTEXT("Stop Broadcast", 15204502);
    };
    script7698();
    return;
}