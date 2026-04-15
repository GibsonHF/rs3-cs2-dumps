//
function script7845(int0: int, string0: string): void {
    IF_SETHIDE(false, comp(786, 10));
    IF_SETHIDE(true, comp(786, 11));
    varclient_3688 = int0;
    if ((int0 == 4)) {
        IF_SETTEXT(string0, comp(786, 10));
        IF_SETCOLOUR(16355874, comp(786, 10));
        stack(-1);
        stack(51511313);
        IF_SETGRAPHIC();
    } else if ((int0 == 1)) {
        IF_SETTEXT("You have entered a valid character name which is available!", comp(786, 10));
        IF_SETCOLOUR(2996756, comp(786, 10));
        stack(19716);
        stack(51511313);
        IF_SETGRAPHIC();
    } else if ((int0 == 5)) {
        IF_SETTEXT(string0, comp(786, 10));
        script2731(comp(786, 10), -1, 2);
        stack(-1);
        stack(51511313);
        IF_SETGRAPHIC();
    } else if ((STRING_LENGTH(string0) == 0)) {
        if ((int0 == 0)) {
            IF_SETTEXT("The display name entered is invalid.", comp(786, 10));
            script2731(comp(786, 10), -1, 6);
            stack(19717);
            stack(51511313);
            IF_SETGRAPHIC();
        } else {
            IF_SETTEXT("A display name is needed to play.<br>Your friends can use it to add you in-game!", comp(786, 10));
            script2731(comp(786, 10), -1, 2);
            stack(-1);
            stack(51511313);
            IF_SETGRAPHIC();
        };
    } else {
        IF_SETTEXT(string0, comp(786, 10));
        script2731(comp(786, 10), -1, 6);
        stack(19717);
        stack(51511313);
        IF_SETGRAPHIC();
    };
    switch (varclient_3688) {
        case 0: {
            IF_SETCOLOUR(15413039, comp(786, 13));
            IF_SETHIDE(false, comp(786, 13));
            break;
        }
        case 4: {
            IF_SETCOLOUR(16355874, comp(786, 13));
            IF_SETHIDE(false, comp(786, 13));
            break;
        }
        case 1: {
            IF_SETCOLOUR(2996756, comp(786, 13));
            IF_SETHIDE(false, comp(786, 13));
            break;
        }
        case 2: {
            IF_SETCOLOUR(65793, comp(786, 13));
            IF_SETHIDE(false, comp(786, 13));
            break;
        }
        default: {
            IF_SETHIDE(true, comp(786, 13));
            break;
        }
    };
    return;
}