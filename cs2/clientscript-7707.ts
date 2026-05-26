//
function script7707(int0: number, int1: number): void {
    if ((int1 == 0)) {
        switch (int0) {
            case 68616233: {
                stack(18093);
                stack(68616193);
                IF_SETGRAPHIC();
                stack(18094);
                stack(68616192);
                IF_SETGRAPHIC();
                stack(18095);
                stack(68616194);
                IF_SETGRAPHIC();
                break;
            }
            case 68616232: {
                stack(18093);
                stack(68616320);
                IF_SETGRAPHIC();
                stack(18094);
                stack(68616319);
                IF_SETGRAPHIC();
                stack(18095);
                stack(68616321);
                IF_SETGRAPHIC();
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
                stack(18087);
                stack(68616193);
                IF_SETGRAPHIC();
                stack(18088);
                stack(68616192);
                IF_SETGRAPHIC();
                stack(18089);
                stack(68616194);
                IF_SETGRAPHIC();
            } else {
                stack(18090);
                stack(68616193);
                IF_SETGRAPHIC();
                stack(18091);
                stack(68616192);
                IF_SETGRAPHIC();
                stack(18092);
                stack(68616194);
                IF_SETGRAPHIC();
            };
        } else if ((IF_GETHIDE(68616213) == 1)) {
            stack(18090);
            stack(68616320);
            IF_SETGRAPHIC();
            stack(18091);
            stack(68616319);
            IF_SETGRAPHIC();
            stack(18092);
            stack(68616321);
            IF_SETGRAPHIC();
        } else {
            stack(18087);
            stack(68616320);
            IF_SETGRAPHIC();
            stack(18088);
            stack(68616319);
            IF_SETGRAPHIC();
            stack(18089);
            stack(68616321);
            IF_SETGRAPHIC();
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
            stack(18090);
            stack(68616320);
            IF_SETGRAPHIC();
            stack(18091);
            stack(68616319);
            IF_SETGRAPHIC();
            stack(18092);
            stack(68616321);
            IF_SETGRAPHIC();
        } else {
            IF_SETHIDE(0, 68616213);
            IF_SETHIDE(1, 68616212);
            IF_SETTEXT("Hover over a reward on the left for more information", 68616205);
            IF_SETHIDE(1, 68616206);
            IF_SETHIDE(1, 68616207);
            IF_SETHIDE(1, 68616261);
            IF_SETHIDE(1, 68616262);
            stack(18090);
            stack(68616193);
            IF_SETGRAPHIC();
            stack(18091);
            stack(68616192);
            IF_SETGRAPHIC();
            stack(18092);
            stack(68616194);
            IF_SETGRAPHIC();
        };
    };
    return;
}