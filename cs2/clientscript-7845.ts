//
function script7845(int0: number, string0: string): void {
    IF_SETHIDE(0, 51511306);
    IF_SETHIDE(1, 51511307);
    varclient_3688 = int0;
    if ((int0 == 4)) {
        IF_SETTEXT(string0, 51511306);
        IF_SETCOLOUR(16355874, 51511306);
        stack(-1);
        stack(51511313);
        IF_SETGRAPHIC();
    } else if ((int0 == 1)) {
        IF_SETTEXT("You have entered a valid character name which is available!", 51511306);
        IF_SETCOLOUR(2996756, 51511306);
        stack(19716);
        stack(51511313);
        IF_SETGRAPHIC();
    } else if ((int0 == 5)) {
        IF_SETTEXT(string0, 51511306);
        script2731(51511306, -1, 2);
        stack(-1);
        stack(51511313);
        IF_SETGRAPHIC();
    } else if ((STRING_LENGTH(string0) == 0)) {
        if ((int0 == 0)) {
            IF_SETTEXT("The display name entered is invalid.", 51511306);
            script2731(51511306, -1, 6);
            stack(19717);
            stack(51511313);
            IF_SETGRAPHIC();
        } else {
            IF_SETTEXT("A display name is needed to play.<br>Your friends can use it to add you in-game!", 51511306);
            script2731(51511306, -1, 2);
            stack(-1);
            stack(51511313);
            IF_SETGRAPHIC();
        };
    } else {
        IF_SETTEXT(string0, 51511306);
        script2731(51511306, -1, 6);
        stack(19717);
        stack(51511313);
        IF_SETGRAPHIC();
    };
    switch (varclient_3688) {
        case 0: {
            IF_SETCOLOUR(15413039, 51511309);
            IF_SETHIDE(0, 51511309);
            break;
        }
        case 4: {
            IF_SETCOLOUR(16355874, 51511309);
            IF_SETHIDE(0, 51511309);
            break;
        }
        case 1: {
            IF_SETCOLOUR(2996756, 51511309);
            IF_SETHIDE(0, 51511309);
            break;
        }
        case 2: {
            IF_SETCOLOUR(65793, 51511309);
            IF_SETHIDE(0, 51511309);
            break;
        }
        default: {
            IF_SETHIDE(1, 51511309);
            break;
        }
    };
    return;
}