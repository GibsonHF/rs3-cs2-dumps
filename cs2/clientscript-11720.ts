//
function script11720(): void {
    IF_SETHIDE(true, comp(1654, 36));
    IF_SETSIZE(SCALE(300, 5000, MIN(5000, varbitplayer_28733)), 5, 0, 0, comp(1654, 6));
    var int0 = 1;
    if ((varbitplayer_28733 >= 100)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 7));
        int0 = 2;
    };
    if ((varbitplayer_28733 >= 500)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 8));
        int0 = 3;
    };
    if ((varbitplayer_28733 >= 750)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 9));
        int0 = 4;
    };
    if ((varbitplayer_28733 >= 1000)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 10));
        int0 = 5;
    };
    if ((varbitplayer_28733 >= 1250)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 11));
        int0 = 6;
    };
    if ((varbitplayer_28733 >= 1500)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 12));
        int0 = 7;
    };
    if ((varbitplayer_28733 >= 1750)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 13));
        int0 = 8;
    };
    if ((varbitplayer_28733 >= 2000)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 14));
        int0 = 9;
    };
    if ((varbitplayer_28733 >= 2500)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 15));
        int0 = 10;
    };
    if ((varbitplayer_28733 >= 3000)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 16));
        int0 = 11;
    };
    if ((varbitplayer_28733 >= 5000)) {
        IF_SETGRAPHIC(2548 as graphic, comp(1654, 17));
        int0 = 0;
    };
    var int1 = 0;
    var string0 = "Next unlock: Soon";
    switch (int0) {
        case 0: {
            int1 = 320;
            string0 = "All rewards unlocked!";
            break;
        }
        case 1: {
            int1 = SCALE(320, 100, varbitplayer_28733);
            string0 = `Next unlock: Supply Discount<br>${inttostring(varbitplayer_28733, 10)}/100`;
            break;
        }
        case 2: {
            int1 = SCALE(320, 400, (varbitplayer_28733 - 100));
            string0 = `Next unlock: Bank access (Canal)<br>${inttostring(varbitplayer_28733, 10)}/500`;
            break;
        }
        case 3: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 500));
            string0 = `Next unlock: Fast travel-1<br>${inttostring(varbitplayer_28733, 10)}/750`;
            break;
        }
        case 4: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 750));
            string0 = `Next unlock: Supply Discount+<br>${inttostring(varbitplayer_28733, 10)}/1000`;
            break;
        }
        case 5: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1000));
            string0 = `Next unlock: 'The reputable'<br>${inttostring(varbitplayer_28733, 10)}/1250`;
            break;
        }
        case 6: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1250));
            string0 = `Next unlock: Bank access (Waterfall)<br>${inttostring(varbitplayer_28733, 10)}/1500`;
            break;
        }
        case 7: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1500));
            string0 = `Next unlock: POH location<br>${inttostring(varbitplayer_28733, 10)}/1750`;
            break;
        }
        case 8: {
            int1 = SCALE(320, 250, (varbitplayer_28733 - 1750));
            string0 = `Next unlock: Fast travel-2<br>${inttostring(varbitplayer_28733, 10)}/2000`;
            break;
        }
        case 9: {
            int1 = SCALE(320, 500, (varbitplayer_28733 - 2000));
            string0 = `Next unlock: Pet Goebie<br>${inttostring(varbitplayer_28733, 10)}/2500`;
            break;
        }
        case 10: {
            int1 = SCALE(320, 500, (varbitplayer_28733 - 2500));
            string0 = `Next unlock: 'of the Goebies'<br>${inttostring(varbitplayer_28733, 10)}/3000`;
            break;
        }
        case 11: {
            int1 = SCALE(320, 2000, (varbitplayer_28733 - 3000));
            string0 = `Next unlock: ${inttostring(10, 10)}% Rare drop chance<br>${inttostring(varbitplayer_28733, 10)}/5000`;
            break;
        }
    };
    IF_SETSIZE(int1, 25, 0, 0, comp(1654, 32));
    IF_SETTEXT(`Current reputation: ${inttostring(MIN(5000, varbitplayer_28733), 10)}/5000`, comp(1654, 34));
    IF_SETTEXT(string0, comp(1654, 26));
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(14194 as graphic, comp(1654, 35));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(14196 as graphic, comp(1654, 35));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(14195 as graphic, comp(1654, 35));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(14195 as graphic, comp(1654, 35));
            break;
        }
    };
    return;
}