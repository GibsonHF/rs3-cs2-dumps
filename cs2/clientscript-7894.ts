//
function script7894(int0: number, int1: number): void {
    IF_SETGRAPHIC(19674 as graphic, comp(1420, 93));  // acc_create:icon_gender
    IF_SETGRAPHIC(19675 as graphic, comp(1420, 89));  // acc_create:icon_hair
    IF_SETGRAPHIC(19676 as graphic, comp(1420, 85));  // acc_create:icon_torso
    IF_SETGRAPHIC(19677 as graphic, comp(1420, 81));  // acc_create:icon_legs
    IF_SETGRAPHIC(19678 as graphic, comp(1420, 77));  // acc_create:icon_feet
    IF_SETGRAPHIC(19679 as graphic, comp(1420, 73));  // acc_create:icon_beard
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 92));  // acc_create:tab_appearance_graphic
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 88));  // acc_create:tab_hair_graphic
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 84));  // acc_create:tab_torso_graphic
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 80));  // acc_create:tab_legs_graphic
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 76));  // acc_create:tab_feet_graphic
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 72));  // acc_create:tab_beard_graphic
    IF_SENDTOBACK(comp(1420, 90));  // acc_create:tab_appearance
    IF_SENDTOBACK(comp(1420, 86));  // acc_create:tab_hair
    IF_SENDTOBACK(comp(1420, 82));  // acc_create:tab_torso
    IF_SENDTOBACK(comp(1420, 78));  // acc_create:tab_legs
    IF_SENDTOBACK(comp(1420, 74));  // acc_create:tab_feet
    IF_SENDTOBACK(comp(1420, 70));  // acc_create:tab_beard
    IF_SETHIDE(true, comp(1420, 102));  // acc_create:gender_buttons
    if ((varclient_3687 == 1)) {
        IF_SETHIDE(true, comp(1420, 70));  // acc_create:tab_beard
    } else {
        IF_SETHIDE(false, comp(1420, 70));  // acc_create:tab_beard
    };
    if (((int0 == 1) || (int0 == 5))) {
        IF_SETHIDE(true, comp(1420, 46));  // acc_create:avatar_paperdoll
        IF_SETHIDE(false, comp(1420, 47));  // acc_create:avatar_head
    } else {
        IF_SETHIDE(false, comp(1420, 46));  // acc_create:avatar_paperdoll
        IF_SETHIDE(true, comp(1420, 47));  // acc_create:avatar_head
    };
    switch (int0) {
        case 0: {
            IF_SETGRAPHIC(19668 as graphic, comp(1420, 93));  // acc_create:icon_gender
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 92));  // acc_create:tab_appearance_graphic
            IF_SENDTOFRONT(comp(1420, 90));  // acc_create:tab_appearance
            IF_SETTEXT("Choose Appearance", comp(1420, 67));  // acc_create:title
            IF_SETHIDE(false, comp(1420, 102));  // acc_create:gender_buttons
            break;
        }
        case 1: {
            IF_SETGRAPHIC(19669 as graphic, comp(1420, 89));  // acc_create:icon_hair
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 88));  // acc_create:tab_hair_graphic
            IF_SENDTOFRONT(comp(1420, 86));  // acc_create:tab_hair
            IF_SETTEXT("Choose A Hair Style", comp(1420, 67));  // acc_create:title
            if ((int1 == 1)) {
                IF_SETMODELANIM(20948 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 159)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 2: {
            IF_SETGRAPHIC(19670 as graphic, comp(1420, 85));  // acc_create:icon_torso
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 84));  // acc_create:tab_torso_graphic
            IF_SENDTOFRONT(comp(1420, 82));  // acc_create:tab_torso
            IF_SETTEXT("Choose A Top", comp(1420, 67));  // acc_create:title
            if ((int1 == 1)) {
                IF_SETMODELANIM(20945 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 180)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 3: {
            IF_SETGRAPHIC(19671 as graphic, comp(1420, 81));  // acc_create:icon_legs
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 80));  // acc_create:tab_legs_graphic
            IF_SENDTOFRONT(comp(1420, 78));  // acc_create:tab_legs
            IF_SETTEXT("Choose Some Legs", comp(1420, 67));  // acc_create:title
            if ((int1 == 1)) {
                IF_SETMODELANIM(20946 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 4: {
            IF_SETGRAPHIC(19672 as graphic, comp(1420, 77));  // acc_create:icon_feet
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 76));  // acc_create:tab_feet_graphic
            IF_SENDTOFRONT(comp(1420, 74));  // acc_create:tab_feet
            IF_SETTEXT("Choose Some Shoes", comp(1420, 67));  // acc_create:title
            if ((int1 == 1)) {
                IF_SETMODELANIM(20944 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 189)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
        case 5: {
            IF_SETGRAPHIC(19673 as graphic, comp(1420, 73));  // acc_create:icon_beard
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 72));  // acc_create:tab_beard_graphic
            IF_SENDTOFRONT(comp(1420, 70));  // acc_create:tab_beard
            IF_SETTEXT("Choose A Beard", comp(1420, 67));  // acc_create:title
            if ((int1 == 1)) {
                IF_SETMODELANIM(20947 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), comp(1420, 14));  // acc_create:animation_cancel_listener
            };
            break;
        }
    };
    if ((int0 == varclient_3482)) {
        return;
    };
    varclient_3482 = int0;
    if ((IF_GETHEIGHT(comp(1420, 127)) != 0)) {  // acc_create:colours_sliding
        IF_SETONTIMER(callback(), comp(1420, 5));  // acc_create:colour_listener
        IF_SETSIZE(0, 0, 1, 0, comp(1420, 127));  // acc_create:colours_sliding
    };
    script7867();
    return;
}