//
function script21075(): void {
    if ((script20133(varbitplayer_58391) == 1)) {
        IF_SETENABLED(true, comp(1409, 128));
        IF_SETTEXT("Teleport", comp(1409, 128));
        IF_SETOP(1, "Teleport", comp(1409, 128));
        IF_SETOPCURSOR(1, 46, comp(1409, 128));
    } else if ((script20135(varbitplayer_58391) == 1)) {
        IF_SETENABLED(true, comp(1409, 128));
        IF_SETTEXT("Unlock", comp(1409, 128));
        IF_SETOP(1, "Unlock", comp(1409, 128));
        IF_SETOPCURSOR(1, 195, comp(1409, 128));
    } else if ((PLAYERMEMBER() == 0)) {
        if ((varbitplayer_58388 > 0)) {
            stack(varbitplayer_58388);
            script20929();
            if (BRANCH_LESS_THAN()) {
                IF_SETENABLED(true, comp(1409, 128));
                IF_SETTEXT("Unlock", comp(1409, 128));
                IF_SETOP(1, "Unlock", comp(1409, 128));
                IF_SETOPCURSOR(1, 195, comp(1409, 128));
            } else {
                IF_SETENABLED(false, comp(1409, 128));
                IF_SETTEXT("Locked", comp(1409, 128));
                IF_SETOP(1, "Unlock", comp(1409, 128));
            };
        } else {
            IF_SETENABLED(false, comp(1409, 128));
            IF_SETTEXT("Locked", comp(1409, 128));
            IF_SETOP(1, "Unlock", comp(1409, 128));
        };
    } else {
        IF_SETENABLED(false, comp(1409, 128));
        IF_SETTEXT("Locked", comp(1409, 128));
        IF_SETOP(1, "Unlock", comp(1409, 128));
    };
    return;
}