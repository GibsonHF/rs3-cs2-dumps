//
function script21199(): void {
    var int2 = 0;
    var int3 = 0;
    unk12259();
    [int2, int3] = [];
    if ((varclient_8507 == int3)) {
        return;
    };
    if (((varclient_8507 >= 3) && (int3 == 0))) {
        IF_SETONTIMER(callback(), comp(1589, 1));  // plugin_hub_parent_manage_settings:com_1
        int3 = 4;
    };
    var int4 = varclient_8507;
    varclient_8507 = int3;
    switch (int3) {
        case 0: {
            IF_SETHIDE(false, comp(1589, 9));  // plugin_hub_parent_manage_settings:settings_close_button
            IF_SETTEXT("Load dependencies for installation", comp(1589, 14));
            IF_SETHIDE(true, comp(1589, 15));
            IF_SETHIDE(true, comp(1589, 13));
            IF_SETENABLED(true, comp(1589, 14));
            IF_SETHIDE(true, comp(1589, 10));
            IF_SETENABLED(false, comp(1589, 11));
            IF_SETENABLED(false, comp(1589, 12));
            stack(21202);
            stack(int0);
            IF_SETONBUTTONCLICK("i", 104136718);
            IF_SETONBUTTONCLICK(callback(), 104136715);
            IF_SETONBUTTONCLICK(callback(), 104136716);
            if ((int4 == -1)) {
                stack(int0);
                unk11212();
            };
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1589, 9));  // plugin_hub_parent_manage_settings:settings_close_button
            IF_SETTEXT("Loading dependencies...", comp(1589, 14));
            IF_SETHIDE(false, comp(1589, 15));
            IF_SETHIDE(true, comp(1589, 13));
            IF_SETENABLED(false, comp(1589, 14));
            IF_SETHIDE(true, comp(1589, 10));
            IF_SETENABLED(false, comp(1589, 11));
            IF_SETENABLED(false, comp(1589, 12));
            IF_SETONBUTTONCLICK(callback(), 104136718);
            IF_SETONBUTTONCLICK(callback(), 104136715);
            IF_SETONBUTTONCLICK(callback(), 104136716);
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1589, 9));  // plugin_hub_parent_manage_settings:settings_close_button
            IF_SETTEXT("", comp(1589, 14));
            IF_SETHIDE(true, comp(1589, 15));
            IF_SETHIDE(true, comp(1589, 13));
            IF_SETENABLED(false, comp(1589, 14));
            IF_SETHIDE(false, comp(1589, 10));
            IF_SETENABLED(true, comp(1589, 11));
            IF_SETENABLED(true, comp(1589, 12));
            IF_SETONBUTTONCLICK(callback(), 104136718);
            stack(21203);
            stack(int0);
            stack(int1);
            IF_SETONBUTTONCLICK("ii", 104136715);
            stack(21205);
            stack(int0);
            stack(int1);
            IF_SETONBUTTONCLICK("ii", 104136716);
            stack(int0);
            script21200();
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(1589, 9));  // plugin_hub_parent_manage_settings:settings_close_button
            IF_SETTEXT("", comp(1589, 14));
            IF_SETHIDE(true, comp(1589, 15));
            IF_SETHIDE(false, comp(1589, 13));
            IF_SETENABLED(false, comp(1589, 14));
            IF_SETHIDE(false, comp(1589, 10));
            IF_SETENABLED(false, comp(1589, 11));
            IF_SETENABLED(true, comp(1589, 12));
            IF_SETONBUTTONCLICK(callback(), 104136718);
            IF_SETONBUTTONCLICK(callback(), 104136715);
            stack(21205);
            stack(int0);
            stack(int1);
            IF_SETONBUTTONCLICK("ii", 104136716);
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(1589, 9));  // plugin_hub_parent_manage_settings:settings_close_button
            IF_SETTEXT("", comp(1589, 14));
            IF_SETHIDE(true, comp(1589, 15));
            IF_SETHIDE(true, comp(1589, 13));
            IF_SETENABLED(false, comp(1589, 14));
            IF_SETHIDE(true, comp(1589, 10));
            IF_SETENABLED(false, comp(1589, 11));
            IF_SETENABLED(false, comp(1589, 12));
            IF_SETONBUTTONCLICK(callback(), 104136718);
            IF_SETONBUTTONCLICK(callback(), 104136715);
            IF_SETONBUTTONCLICK(callback(), 104136716);
            stack(int0);
            script21201();
            script21206();
            break;
        }
    };
    return;
}