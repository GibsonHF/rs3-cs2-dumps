//
function script4677(): void {
    switch (varbitplayer_4766) {
        case 1: {
            if ((varbitplayer_4758 == 10)) {
                if ((((STAT_BASE(6 as stat) >= 30) && (STAT_BASE(4 as stat) >= 30)) && (STAT_BASE(0 as stat) >= 30))) {
                    IF_SETTEXT("Carn is no more, his behemoth has been dealt with, and Linza has her ore. The tales of Great Ozan can continue!", comp(102, 30));
                } else {
                    IF_SETTEXT("Carn has been defeated and Linza appreciates her new ore. The story still feels incomplete, somehow.", comp(102, 30));
                };
            } else {
                IF_SETTEXT("Carn's defeated, but the story still feels incomplete somehow.", comp(102, 30));
            };
            break;
        }
        case 2: {
            if ((varbitplayer_4758 == 10)) {
                if (((STAT_BASE(16 as stat) >= 55) && (STAT_BASE(17 as stat) >= 55))) {
                    IF_SETTEXT("I have become Vengeance: death to those who callously disregard life. They, and everyone like them, will pay for what they have done.", comp(102, 30));
                } else {
                    IF_SETTEXT("Am I done now? No, there's more that must be done. Vengeance has not yet been satisfied.", comp(102, 30));
                };
            } else {
                IF_SETTEXT("I killed them...but in doing so I never thought to check for survivors. Am I a monster?", comp(102, 30));
            };
            break;
        }
        case 4: {
            if ((varbitplayer_4758 == 10)) {
                if ((STAT_BASE(2 as stat) >= 70)) {
                    IF_SETTEXT("Ha! Thok stronger than squishy monsters in dungeon! None are as mighty as Thok.", comp(102, 30));
                } else {
                    IF_SETTEXT("Odd... Thok remember being much stronger in dungeon.", comp(102, 30));
                };
            } else {
                IF_SETTEXT("Thok save Marm, but Thok not show how mighty Thok is. Thok need to do more.", comp(102, 30));
            };
            break;
        }
        case 3: {
            if ((((STAT_BASE(0 as stat) >= 60) && (STAT_BASE(17 as stat) >= 45)) && (STAT_BASE(24 as stat) >= 55))) {
                if ((varbitplayer_4758 == 10)) {
                    IF_SETTEXT("I finally completed my task; the perfect spy, the perfect assassin.", comp(102, 30));
                } else {
                    IF_SETTEXT("I completed my task, but...I made mistakes, left things undone...", comp(102, 30));
                };
            } else {
                IF_SETTEXT("My task is incomplete, this story still unfinished. I remember there was...more...", comp(102, 30));
            };
            break;
        }
        case 6: {
            if ((STAT_BASE(2 as stat) >= 75)) {
                if ((varbitplayer_4758 == 10)) {
                    IF_SETTEXT("A mighty adventure for Thok and Marmaros! Thok have best adventures.", comp(102, 30));
                } else {
                    IF_SETTEXT("Thok smash bone face good...but Thok still have more to do!", comp(102, 30));
                };
            } else {
                IF_SETTEXT("Thok enjoy smashing foes...but Thok remember being stronger before.", comp(102, 30));
            };
            break;
        }
    };
    return;
}