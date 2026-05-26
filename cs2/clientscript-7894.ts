//
function script7894(int0: number, int1: number): void {
    IF_SETGRAPHIC(19674 as graphic, comp(1420, 93));
    IF_SETGRAPHIC(19675 as graphic, comp(1420, 89));
    IF_SETGRAPHIC(19676 as graphic, comp(1420, 85));
    IF_SETGRAPHIC(19677 as graphic, comp(1420, 81));
    IF_SETGRAPHIC(19678 as graphic, comp(1420, 77));
    IF_SETGRAPHIC(19679 as graphic, comp(1420, 73));
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 92));
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 88));
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 84));
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 80));
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 76));
    IF_SETGRAPHIC(18100 as graphic, comp(1420, 72));
    IF_SENDTOBACK(comp(1420, 90));
    IF_SENDTOBACK(comp(1420, 86));
    IF_SENDTOBACK(comp(1420, 82));
    IF_SENDTOBACK(comp(1420, 78));
    IF_SENDTOBACK(comp(1420, 74));
    IF_SENDTOBACK(comp(1420, 70));
    IF_SETHIDE(true, comp(1420, 102));
    if ((varclient_3687 == 1)) {
        IF_SETHIDE(true, comp(1420, 70));
    } else {
        IF_SETHIDE(false, comp(1420, 70));
    };
    if (((int0 == 1) || (int0 == 5))) {
        IF_SETHIDE(true, comp(1420, 46));
        IF_SETHIDE(false, comp(1420, 47));
    } else {
        IF_SETHIDE(false, comp(1420, 46));
        IF_SETHIDE(true, comp(1420, 47));
    };
    switch (int0) {
        case 0: {
            IF_SETGRAPHIC(19668 as graphic, comp(1420, 93));
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 92));
            IF_SENDTOFRONT(comp(1420, 90));
            IF_SETTEXT("Choose Appearance", comp(1420, 67));
            IF_SETHIDE(false, comp(1420, 102));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(19669 as graphic, comp(1420, 89));
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 88));
            IF_SENDTOFRONT(comp(1420, 86));
            IF_SETTEXT("Choose A Hair Style", comp(1420, 67));
            if ((int1 == 1)) {
                IF_SETMODELANIM(20948 as seq, comp(1420, 46));
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 159)), comp(1420, 14));
            };
            break;
        }
        case 2: {
            IF_SETGRAPHIC(19670 as graphic, comp(1420, 85));
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 84));
            IF_SENDTOFRONT(comp(1420, 82));
            IF_SETTEXT("Choose A Top", comp(1420, 67));
            if ((int1 == 1)) {
                IF_SETMODELANIM(20945 as seq, comp(1420, 46));
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 180)), comp(1420, 14));
            };
            break;
        }
        case 3: {
            IF_SETGRAPHIC(19671 as graphic, comp(1420, 81));
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 80));
            IF_SENDTOFRONT(comp(1420, 78));
            IF_SETTEXT("Choose Some Legs", comp(1420, 67));
            if ((int1 == 1)) {
                IF_SETMODELANIM(20946 as seq, comp(1420, 46));
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), comp(1420, 14));
            };
            break;
        }
        case 4: {
            IF_SETGRAPHIC(19672 as graphic, comp(1420, 77));
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 76));
            IF_SENDTOFRONT(comp(1420, 74));
            IF_SETTEXT("Choose Some Shoes", comp(1420, 67));
            if ((int1 == 1)) {
                IF_SETMODELANIM(20944 as seq, comp(1420, 46));
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 189)), comp(1420, 14));
            };
            break;
        }
        case 5: {
            IF_SETGRAPHIC(19673 as graphic, comp(1420, 73));
            IF_SETGRAPHIC(18102 as graphic, comp(1420, 72));
            IF_SENDTOFRONT(comp(1420, 70));
            IF_SETTEXT("Choose A Beard", comp(1420, 67));
            if ((int1 == 1)) {
                IF_SETMODELANIM(20947 as seq, comp(1420, 46));
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), comp(1420, 14));
            };
            break;
        }
    };
    if ((int0 == varclient_3482)) {
        return;
    };
    varclient_3482 = int0;
    if ((IF_GETHEIGHT(comp(1420, 127)) != 0)) {
        IF_SETONTIMER(callback(), comp(1420, 5));
        IF_SETSIZE(0, 0, 1, 0, 93061247);
    };
    script7867();
    return;
}