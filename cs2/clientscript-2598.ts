//
function script2598(): void {
    var int0 = -1 as obj;
    if ((varplayer_8332 == -1 as dbrow)) {
        printmessage("ERROR, %smithing_interface_material_dbrow_selected is null.");
        return;
    };
    if ((varplayer_8333 == -1 as obj)) {
        printmessage("ERROR, %smithing_interface_base_object_selected is null");
        return;
    };
    if ((varbitplayer_43239 < 0)) {
        printmessage("ERROR, %smithing_interface_upgrade_selected is null");
        return;
    };
    var int1 = item_getparam(varplayer_8333, 7805);
    switch (int1) {
        case 0: {
            IF_SETHIDE(true, comp(37, 7));
            IF_SETHIDE(true, comp(37, 8));
            IF_SETHIDE(true, comp(37, 9));
            IF_SETHIDE(true, comp(37, 10));
            IF_SETHIDE(true, comp(37, 11));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(37, 7));
            IF_SETHIDE(true, comp(37, 8));
            IF_SETHIDE(true, comp(37, 9));
            IF_SETHIDE(true, comp(37, 10));
            IF_SETHIDE(true, comp(37, 11));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(37, 7));
            IF_SETHIDE(false, comp(37, 8));
            IF_SETHIDE(true, comp(37, 9));
            IF_SETHIDE(true, comp(37, 10));
            IF_SETHIDE(true, comp(37, 11));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(37, 7));
            IF_SETHIDE(false, comp(37, 8));
            IF_SETHIDE(false, comp(37, 9));
            IF_SETHIDE(true, comp(37, 10));
            IF_SETHIDE(true, comp(37, 11));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(37, 7));
            IF_SETHIDE(false, comp(37, 8));
            IF_SETHIDE(false, comp(37, 9));
            IF_SETHIDE(false, comp(37, 10));
            IF_SETHIDE(true, comp(37, 11));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(37, 7));
            IF_SETHIDE(false, comp(37, 8));
            IF_SETHIDE(false, comp(37, 9));
            IF_SETHIDE(false, comp(37, 10));
            IF_SETHIDE(false, comp(37, 11));
            break;
        }
    };
    if ((DB_GETFIELDCOUNT(varplayer_8332, 458768) > 0)) {
        if ((int1 > 0)) {
            IF_SETHIDE(false, comp(37, 12));
        } else {
            IF_SETHIDE(true, comp(37, 12));
            if ((varbitplayer_43239 == 50)) {
                varbitplayer_43239 = int1;
            };
        };
    } else {
        IF_SETHIDE(true, comp(37, 12));
        if ((varbitplayer_43239 == 50)) {
            varbitplayer_43239 = int1;
        };
    };
    if ((varbitplayer_43239 == 50)) {
        int1 = 50;
    };
    varbitplayer_43239 = MIN(int1, varbitplayer_43239);
    int0 = script2542(varplayer_8333, varbitplayer_43239);
    if ((int0 == -1 as obj)) {
        printmessage("ERROR, can't find upgrade.");
        int0 = varplayer_8333;
    };
    switch (int0) {
        case 45435:
        case 45436:
        case 45437:
        case 45438:
        case 45439:
        case 45440:
        case 57437: {
            IF_SETHIDE(true, comp(37, 6));
            break;
        }
        default: {
            IF_SETHIDE(false, comp(37, 6));
            break;
        }
    };
    if ((item_getparam(int0, 2653) > 1)) {
        IF_SETTEXT(`${OC_NAME(int0)} x${inttostring(script18374(int0), 10)}`, comp(37, 40));
    } else {
        IF_SETTEXT(OC_NAME(int0), comp(37, 40));
    };
    script2609(varbitplayer_43239);
    script2605(int0);
    script2599();
    return;
}