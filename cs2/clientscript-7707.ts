//
function script7707(int0: number, int1: number): void {
    if ((int1 == 0)) {
        switch (int0) {
            case 68616233: {
                IF_SETGRAPHIC(18093 as graphic, comp(1047, 1));
                IF_SETGRAPHIC(18094 as graphic, comp(1047, 0));
                IF_SETGRAPHIC(18095 as graphic, comp(1047, 2));
                break;
            }
            case 68616232: {
                IF_SETGRAPHIC(18093 as graphic, comp(1047, 128));
                IF_SETGRAPHIC(18094 as graphic, comp(1047, 127));
                IF_SETGRAPHIC(18095 as graphic, comp(1047, 129));
                break;
            }
            case 68616214: {
                IF_SETTEXT("Every task will yield an XP lamp.", comp(1047, 13));
                break;
            }
            case 68616215: {
                IF_SETTEXT("Hiker boots and gloves: Collect a Road Trip journal.", comp(1047, 13));
                break;
            }
            case 68616216: {
                IF_SETTEXT("Hiker cap: 5 tasks completed.", comp(1047, 13));
                break;
            }
            case 68616217: {
                IF_SETTEXT("Hiker jacket: 10 tasks completed.", comp(1047, 13));
                break;
            }
            case 68616218: {
                IF_SETTEXT("Hiker leggings: 15 tasks completed.", comp(1047, 13));
                break;
            }
            case 68616219: {
                IF_SETTEXT("Hiker backpack: All tasks completed.", comp(1047, 13));
                break;
            }
            case 68616220: {
                IF_SETTEXT("Cheeky Monkey: All tasks completed.", comp(1047, 13));
                break;
            }
            case 68616221: {
                IF_SETTEXT("Partyhat firemaking: All tasks completed.", comp(1047, 13));
                break;
            }
        };
    } else if ((int1 == 1)) {
        if ((int0 == 68616233)) {
            if ((IF_GETHIDE(comp(1047, 21)) == true)) {
                IF_SETGRAPHIC(18087 as graphic, comp(1047, 1));
                IF_SETGRAPHIC(18088 as graphic, comp(1047, 0));
                IF_SETGRAPHIC(18089 as graphic, comp(1047, 2));
            } else {
                IF_SETGRAPHIC(18090 as graphic, comp(1047, 1));
                IF_SETGRAPHIC(18091 as graphic, comp(1047, 0));
                IF_SETGRAPHIC(18092 as graphic, comp(1047, 2));
            };
        } else if ((IF_GETHIDE(comp(1047, 21)) == true)) {
            IF_SETGRAPHIC(18090 as graphic, comp(1047, 128));
            IF_SETGRAPHIC(18091 as graphic, comp(1047, 127));
            IF_SETGRAPHIC(18092 as graphic, comp(1047, 129));
        } else {
            IF_SETGRAPHIC(18087 as graphic, comp(1047, 128));
            IF_SETGRAPHIC(18088 as graphic, comp(1047, 127));
            IF_SETGRAPHIC(18089 as graphic, comp(1047, 129));
        };
    } else if ((int1 == 2)) {
        if ((int0 == 68616233)) {
            IF_SETHIDE(true, comp(1047, 21));
            IF_SETHIDE(false, comp(1047, 20));
            IF_SETTEXT("Select a task on the left for more information", comp(1047, 13));
            IF_SETHIDE(true, comp(1047, 14));
            IF_SETHIDE(false, comp(1047, 15));
            IF_SETHIDE(false, comp(1047, 69));
            IF_SETHIDE(false, comp(1047, 70));
            IF_SETPOSITION(-60, -60, 0, 0, comp(1047, 44));
            IF_SETGRAPHIC(18090 as graphic, comp(1047, 128));
            IF_SETGRAPHIC(18091 as graphic, comp(1047, 127));
            IF_SETGRAPHIC(18092 as graphic, comp(1047, 129));
        } else {
            IF_SETHIDE(false, comp(1047, 21));
            IF_SETHIDE(true, comp(1047, 20));
            IF_SETTEXT("Hover over a reward on the left for more information", comp(1047, 13));
            IF_SETHIDE(true, comp(1047, 14));
            IF_SETHIDE(true, comp(1047, 15));
            IF_SETHIDE(true, comp(1047, 69));
            IF_SETHIDE(true, comp(1047, 70));
            IF_SETGRAPHIC(18090 as graphic, comp(1047, 1));
            IF_SETGRAPHIC(18091 as graphic, comp(1047, 0));
            IF_SETGRAPHIC(18092 as graphic, comp(1047, 2));
        };
    };
    return;
}