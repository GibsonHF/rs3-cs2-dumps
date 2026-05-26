//
function script11622(): void {
    switch (varbitplayer_51273) {
        case 1: {
            IF_SETHIDE(1, 58392587);
            IF_SETHIDE(0, 58392601);
            break;
        }
        case 2: {
            if ((varbitplayer_54119 == 0)) {
                IF_SETHIDE(1, 58392601);
                IF_SETHIDE(0, 58392587);
                IF_SETTEXT("You do not meet the requirements to claim this item.", 58392587);
            } else {
                script18122();
            };
            break;
        }
        default: {
            script18122();
            break;
        }
    };
    return;
}