//
function script7707(int0: number, int1: number): void {
    if ((int1 == 0)) {
        switch (int0) {
            case 68616233: {
                IF_SETGRAPHIC(18093, 68616193);
                IF_SETGRAPHIC(18094, 68616192);
                IF_SETGRAPHIC(18095, 68616194);
                break;
            }
            case 68616232: {
                IF_SETGRAPHIC(18093, 68616320);
                IF_SETGRAPHIC(18094, 68616319);
                IF_SETGRAPHIC(18095, 68616321);
                break;
            }
            case 68616214: {
                IF_SETTEXT("Every task will yield an XP lamp.", 68616205);
                break;
            }
            case 68616215: {
                IF_SETTEXT("Hiker boots and gloves: Collect a Road Trip journal.", 68616205);
                break;
            }
            case 68616216: {
                IF_SETTEXT("Hiker cap: 5 tasks completed.", 68616205);
                break;
            }
            case 68616217: {
                IF_SETTEXT("Hiker jacket: 10 tasks completed.", 68616205);
                break;
            }
            case 68616218: {
                IF_SETTEXT("Hiker leggings: 15 tasks completed.", 68616205);
                break;
            }
            case 68616219: {
                IF_SETTEXT("Hiker backpack: All tasks completed.", 68616205);
                break;
            }
            case 68616220: {
                IF_SETTEXT("Cheeky Monkey: All tasks completed.", 68616205);
                break;
            }
            case 68616221: {
                IF_SETTEXT("Partyhat firemaking: All tasks completed.", 68616205);
                break;
            }
        };
    } else if ((int1 == 1)) {
        if ((int0 == 68616233)) {
            if ((IF_GETHIDE(68616213) == 1)) {
                IF_SETGRAPHIC(18087, 68616193);
                IF_SETGRAPHIC(18088, 68616192);
                IF_SETGRAPHIC(18089, 68616194);
            } else {
                IF_SETGRAPHIC(18090, 68616193);
                IF_SETGRAPHIC(18091, 68616192);
                IF_SETGRAPHIC(18092, 68616194);
            };
        } else if ((IF_GETHIDE(68616213) == 1)) {
            IF_SETGRAPHIC(18090, 68616320);
            IF_SETGRAPHIC(18091, 68616319);
            IF_SETGRAPHIC(18092, 68616321);
        } else {
            IF_SETGRAPHIC(18087, 68616320);
            IF_SETGRAPHIC(18088, 68616319);
            IF_SETGRAPHIC(18089, 68616321);
        };
    } else if ((int1 == 2)) {
        if ((int0 == 68616233)) {
            IF_SETHIDE(1, 68616213);
            IF_SETHIDE(0, 68616212);
            IF_SETTEXT("Select a task on the left for more information", 68616205);
            IF_SETHIDE(1, 68616206);
            IF_SETHIDE(0, 68616207);
            IF_SETHIDE(0, 68616261);
            IF_SETHIDE(0, 68616262);
            IF_SETPOSITION(-60, -60, 0, 0, 68616236);
            IF_SETGRAPHIC(18090, 68616320);
            IF_SETGRAPHIC(18091, 68616319);
            IF_SETGRAPHIC(18092, 68616321);
        } else {
            IF_SETHIDE(0, 68616213);
            IF_SETHIDE(1, 68616212);
            IF_SETTEXT("Hover over a reward on the left for more information", 68616205);
            IF_SETHIDE(1, 68616206);
            IF_SETHIDE(1, 68616207);
            IF_SETHIDE(1, 68616261);
            IF_SETHIDE(1, 68616262);
            IF_SETGRAPHIC(18090, 68616193);
            IF_SETGRAPHIC(18091, 68616192);
            IF_SETGRAPHIC(18092, 68616194);
        };
    };
    return;
}