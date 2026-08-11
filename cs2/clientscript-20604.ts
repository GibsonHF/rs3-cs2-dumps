//
function script20604(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = comp(1495, 20);  // marketplace_preview:preview_window_border
    var int7 = 97976339;
    var int8 = comp(1495, 15);  // marketplace_preview:ragdoll_model
    var int9 = comp(1495, 13);  // marketplace_preview:preview_panel_main_layer
    var int10 = comp(1495, 16);  // marketplace_preview:pet_layer
    var int11 = comp(1495, 17);  // marketplace_preview:preview_anim_layer
    var int12 = comp(1495, 18);  // marketplace_preview:preview_dragger
    var int13 = comp(1495, 14);  // marketplace_preview:preview_graphic
    var int14 = comp(1495, 26);  // marketplace_preview:recolour_button
    var int15 = comp(1495, 29);  // marketplace_preview:recolour_buttons_background
    var int16 = comp(1495, 25);  // marketplace_preview:recolour_button_layer
    IF_SETONTIMER(callback(), int9);
    IF_SETHIDE(false, int6);
    IF_SETHIDE(true, int8);
    IF_SETHIDE(true, int10);
    IF_SETHIDE(true, int11);
    IF_SETHIDE(true, int12);
    IF_SETHIDE(true, int13);
    if ((int5 == 1)) {
        IF_SETHIDE(true, int14);
        IF_SETHIDE(true, int15);
    };
    IF_SETHIDE(true, int16);
    IF_SETONTIMER(callback(), comp(1495, 15));  // marketplace_preview:ragdoll_model
    var int17 = -1;
    var int18 = -1 as dbrow;
    if ((int0 != -1)) {
        int18 = struct_getparam(int0, 9254);
        if (((struct_getparam(int0, 1331) == true) && (int5 == 1))) {
            IF_SETHIDE(false, int14);
            script18910(11063, 97976352, 97976351, 28, 30, 5);
        };
    };
    switch (int1) {
        case 2: {
            script17960(int0, -1, -1, int6, int7, int8, int9, int6, int18);
            break;
        }
        case 5: {
            int17 = script17962(int0);
            script17958(int0, int17, script17961(int17, int0), int6, int7, int10, int9, int6, 50, int18);
            if (((int0 != -1) && (struct_getparam(int0, 1331) == true))) {
                script19031(int4, int10);
            };
            break;
        }
        case 4: {
            script18695(int0, int6, int7, int12, int9, int6, 0, int18, 0);
            if (((int0 != -1) && (struct_getparam(int0, 5166) != -1 as cs2enum))) {
                script19714(4, int0, int18, struct_getparam(int0, 5166));
            };
            break;
        }
        case 7: {
            script616(int6, int7, int11, int9, struct_getparam(int0, 9457), int18, struct_getparam(int0, 4267));
            break;
        }
        default: {
            IF_SETHIDE(true, int6);
            if ((int2 != -1 as graphic)) {
                IF_SETGRAPHIC(int2, int13);
                IF_SETHIDE(false, int13);
            } else {
                IF_SETHIDE(true, int9);
                IF_SETSIZE(0, 0, 1, 1, comp(1495, 37));  // marketplace_preview:spinner_layer
            };
            break;
        }
    };
    var string0 = "";
    if ((int0 != -1)) {
        string0 = struct_getparam(int0, 2533);
    };
    if ((int3 == 1)) {
        if ((STRING_LENGTH(string0) > 0)) {
            IF_SETTEXT(string0, comp(1495, 33));  // marketplace_preview:rotator_button_backwards
            IF_SETHIDE(false, comp(1495, 33));  // marketplace_preview:rotator_button_backwards
        } else {
            IF_SETHIDE(true, comp(1495, 33));  // marketplace_preview:rotator_button_backwards
        };
    } else {
        IF_SETHIDE(true, comp(1495, 33));  // marketplace_preview:rotator_button_backwards
    };
    return;
}