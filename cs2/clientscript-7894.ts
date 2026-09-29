//
function script7894(int0: number, int1: number): void {
    IF_SETGRAPHIC(19674 as graphic, comp(1420, 93));  // acc_create:com_93
    IF_SETGRAPHIC(19675 as graphic, comp(1420, 89));  // acc_create:advanced_text
    IF_SETGRAPHIC(19676 as graphic, comp(1420, 85));  // acc_create:advanced_build
    IF_SETGRAPHIC(19677 as graphic, comp(1420, 81));  // acc_create:play_now_middle
    IF_SETGRAPHIC(19678 as graphic, comp(1420, 77));  // acc_create:login_button_small_1
    IF_SETGRAPHIC(19679 as graphic, comp(1420, 73));  // acc_create:rotate_layer
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 92));  // acc_create:bg
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 88));  // acc_create:advanced_icon_ironman
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 84));  // acc_create:advanced_button
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 80));  // acc_create:play_now_left
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 76));  // acc_create:login_button_small_hover
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 72));  // acc_create:avatar_head
    IF_SENDTOBACK(comp(1420, 90));  // acc_create:main_contents
    IF_SENDTOBACK(comp(1420, 86));  // acc_create:advanced_click
    IF_SENDTOBACK(comp(1420, 82));  // acc_create:play_now_right
    IF_SENDTOBACK(comp(1420, 78));  // acc_create:login_button_text_pc
    IF_SENDTOBACK(comp(1420, 74));  // acc_create:play_now_button_layer
    IF_SENDTOBACK(comp(1420, 70));  // acc_create:avatar_layer
    IF_SETHIDE(true, comp(1420, 102));  // acc_create:tab_feet
    if ((varclient_3687 == 1)) {
        IF_SETHIDE(true, comp(1420, 70));  // acc_create:avatar_layer
    } else {
        IF_SETHIDE(false, comp(1420, 70));  // acc_create:avatar_layer
    };
    if (((int0 == 1) || (int0 == 5))) {
        IF_SETHIDE(true, comp(1420, 46));  // acc_create:large_3
        IF_SETHIDE(false, comp(1420, 47));  // acc_create:large_4
    } else {
        IF_SETHIDE(false, comp(1420, 46));  // acc_create:large_3
        IF_SETHIDE(true, comp(1420, 47));  // acc_create:large_4
    };
    switch (int0) {
        case 0: {
            IF_SETGRAPHIC(19668 as graphic, comp(1420, 93));  // acc_create:com_93
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 92));  // acc_create:bg
            IF_SENDTOFRONT(comp(1420, 90));  // acc_create:main_contents
            IF_SETTEXT("Choose Appearance", comp(1420, 67));  // acc_create:large_24
            IF_SETHIDE(false, comp(1420, 102));  // acc_create:tab_feet
            break;
        }
        case 1: {
            IF_SETGRAPHIC(19669 as graphic, comp(1420, 89));  // acc_create:advanced_text
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 88));  // acc_create:advanced_icon_ironman
            IF_SENDTOFRONT(comp(1420, 86));  // acc_create:advanced_click
            IF_SETTEXT("Choose A Hair Style", comp(1420, 67));  // acc_create:large_24
            if ((int1 == 1)) {
                IF_SETMODELANIM(20948 as seq, comp(1420, 46));  // acc_create:large_3
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 159)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 2: {
            IF_SETGRAPHIC(19670 as graphic, comp(1420, 85));  // acc_create:advanced_build
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 84));  // acc_create:advanced_button
            IF_SENDTOFRONT(comp(1420, 82));  // acc_create:play_now_right
            IF_SETTEXT("Choose A Top", comp(1420, 67));  // acc_create:large_24
            if ((int1 == 1)) {
                IF_SETMODELANIM(20945 as seq, comp(1420, 46));  // acc_create:large_3
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 180)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 3: {
            IF_SETGRAPHIC(19671 as graphic, comp(1420, 81));  // acc_create:play_now_middle
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 80));  // acc_create:play_now_left
            IF_SENDTOFRONT(comp(1420, 78));  // acc_create:login_button_text_pc
            IF_SETTEXT("Choose Some Legs", comp(1420, 67));  // acc_create:large_24
            if ((int1 == 1)) {
                IF_SETMODELANIM(20946 as seq, comp(1420, 46));  // acc_create:large_3
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 4: {
            IF_SETGRAPHIC(19672 as graphic, comp(1420, 77));  // acc_create:login_button_small_1
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 76));  // acc_create:login_button_small_hover
            IF_SENDTOFRONT(comp(1420, 74));  // acc_create:play_now_button_layer
            IF_SETTEXT("Choose Some Shoes", comp(1420, 67));  // acc_create:large_24
            if ((int1 == 1)) {
                IF_SETMODELANIM(20944 as seq, comp(1420, 46));  // acc_create:large_3
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 189)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 5: {
            IF_SETGRAPHIC(19673 as graphic, comp(1420, 73));  // acc_create:rotate_layer
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 72));  // acc_create:avatar_head
            IF_SENDTOFRONT(comp(1420, 70));  // acc_create:avatar_layer
            IF_SETTEXT("Choose A Beard", comp(1420, 67));  // acc_create:large_24
            if ((int1 == 1)) {
                IF_SETMODELANIM(20947 as seq, comp(1420, 46));  // acc_create:large_3
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
    };
    if ((int0 == varclient_3482)) {
        return;
    };
    varclient_3482 = int0;
    if ((IF_GETHEIGHT(comp(1420, 127)) != 0)) {  // acc_create:items_icon
        IF_SETONTIMER(callback(), comp(1420, 5));  // acc_create:colour_listener
        IF_SETSIZE(0, 0, 1, 0, comp(1420, 127));  // acc_create:items_icon
    };
    script7867();
    return;
}