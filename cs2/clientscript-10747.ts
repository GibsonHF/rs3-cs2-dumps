//
function script10747(int0: number): void {
    IF_SETHIDE(true, comp(138, 34));  // glidermap:window_close_button
    IF_SETHIDE(true, comp(138, 16));  // glidermap:mountain_go
    IF_SETHIDE(true, comp(138, 17));  // glidermap:mountain_back
    IF_SETHIDE(true, comp(138, 18));  // glidermap:digsite_go
    IF_SETHIDE(true, comp(138, 19));  // glidermap:desert_go
    IF_SETHIDE(true, comp(138, 20));  // glidermap:desert_back
    IF_SETHIDE(true, comp(138, 21));  // glidermap:jungle_go
    IF_SETHIDE(true, comp(138, 22));  // glidermap:jungle_back
    IF_SETHIDE(true, comp(138, 23));  // glidermap:ogre_go
    IF_SETHIDE(true, comp(138, 24));  // glidermap:ogre_back
    IF_SETHIDE(true, comp(138, 25));  // glidermap:tgv_go
    IF_SETHIDE(true, comp(138, 26));  // glidermap:tgv_back
    IF_SETHIDE(true, comp(138, 27));  // glidermap:crash_go
    IF_SETHIDE(true, comp(138, 28));  // glidermap:crash_back
    IF_SETHIDE(true, comp(138, 29));  // glidermap:elfcity_go
    IF_SETHIDE(true, comp(138, 30));  // glidermap:elfcity_back
    IF_SETHIDE(true, comp(138, 31));  // glidermap:elr1_go
    IF_SETHIDE(true, comp(138, 32));  // glidermap:elr1_back
    if ((varplayer_2671 < 200)) {
        IF_SETHIDE(true, comp(138, 12));  // glidermap:ogre_button_layer
    };
    if ((varbitplayer_9547 < 120)) {
        IF_SETHIDE(true, comp(138, 13));  // glidermap:tgv_button_layer
    };
    if (((varbitplayer_25043 == 0) || (varbitplayer_23198 < 400))) {
        IF_SETHIDE(true, comp(138, 14));  // glidermap:elfcity_button_layer
    };
    if ((varbitplayer_33889 < 1)) {
        IF_SETHIDE(true, comp(138, 15));  // glidermap:elr1_button_layer
    };
    stack(16);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 7));  // glidermap:grandtree_button_layer
    };
    stack(8);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 8));  // glidermap:mountain_button_layer
    };
    stack(2);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 9));  // glidermap:digsite_button_layer
    };
    stack(11);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 10));  // glidermap:desert_button_layer
    };
    stack(6);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 11));  // glidermap:jungle_button_layer
    };
    stack(15);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 12));  // glidermap:ogre_button_layer
    };
    stack(16);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 13));  // glidermap:tgv_button_layer
    };
    stack(23);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 14));  // glidermap:elfcity_button_layer
    };
    stack(32);
    stack(0);
    script20932();
    if (BRANCH_EQUALS(0)) {
        IF_SETHIDE(true, comp(138, 15));  // glidermap:elr1_button_layer
    };
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(138, 34));  // glidermap:window_close_button
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(138, 16));  // glidermap:mountain_go
            IF_SETMODELANIM(786 as seq, comp(138, 16));  // glidermap:mountain_go
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(138, 17));  // glidermap:mountain_back
            IF_SETMODELANIM(786 as seq, comp(138, 17));  // glidermap:mountain_back
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(138, 18));  // glidermap:digsite_go
            IF_SETMODELANIM(785 as seq, comp(138, 18));  // glidermap:digsite_go
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(138, 19));  // glidermap:desert_go
            IF_SETMODELANIM(785 as seq, comp(138, 19));  // glidermap:desert_go
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(138, 20));  // glidermap:desert_back
            IF_SETMODELANIM(785 as seq, comp(138, 20));  // glidermap:desert_back
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(138, 21));  // glidermap:jungle_go
            IF_SETMODELANIM(785 as seq, comp(138, 21));  // glidermap:jungle_go
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(138, 22));  // glidermap:jungle_back
            IF_SETMODELANIM(785 as seq, comp(138, 22));  // glidermap:jungle_back
            break;
        }
        case 10: {
            IF_SETHIDE(false, comp(138, 23));  // glidermap:ogre_go
            IF_SETMODELANIM(785 as seq, comp(138, 23));  // glidermap:ogre_go
            break;
        }
        case 11: {
            IF_SETHIDE(false, comp(138, 24));  // glidermap:ogre_back
            IF_SETMODELANIM(785 as seq, comp(138, 24));  // glidermap:ogre_back
            break;
        }
        case 12: {
            IF_SETHIDE(false, comp(138, 25));  // glidermap:tgv_go
            IF_SETMODELANIM(785 as seq, comp(138, 25));  // glidermap:tgv_go
            break;
        }
        case 13: {
            IF_SETHIDE(false, comp(138, 26));  // glidermap:tgv_back
            IF_SETMODELANIM(785 as seq, comp(138, 26));  // glidermap:tgv_back
            break;
        }
        case 9: {
            IF_SETHIDE(false, comp(138, 27));  // glidermap:crash_go
            IF_SETMODELANIM(785 as seq, comp(138, 27));  // glidermap:crash_go
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(138, 28));  // glidermap:crash_back
            IF_SETMODELANIM(785 as seq, comp(138, 28));  // glidermap:crash_back
            break;
        }
        case 14: {
            IF_SETHIDE(false, comp(138, 29));  // glidermap:elfcity_go
            IF_SETMODELANIM(786 as seq, comp(138, 29));  // glidermap:elfcity_go
            break;
        }
        case 15: {
            IF_SETHIDE(false, comp(138, 30));  // glidermap:elfcity_back
            IF_SETMODELANIM(786 as seq, comp(138, 30));  // glidermap:elfcity_back
            break;
        }
        case 16: {
            IF_SETHIDE(false, comp(138, 31));  // glidermap:elr1_go
            IF_SETMODELANIM(786 as seq, comp(138, 31));  // glidermap:elr1_go
            break;
        }
        case 17: {
            IF_SETHIDE(false, comp(138, 32));  // glidermap:elr1_back
            IF_SETMODELANIM(786 as seq, comp(138, 32));  // glidermap:elr1_back
            break;
        }
    };
    script8841(57, 1);
    return;
}