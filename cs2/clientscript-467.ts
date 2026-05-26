//
function script467(): void {
    CC_DELETEALL(35979286);
    IF_SETHIDE(1, 35979330);
    var int0 = 0;
    while ((int0 < 14)) {
        CC_CREATE(35979286, 5, int0);
        if ((((int0 != 6) && (int0 != 8)) && (int0 != 11))) {
            if ((INV_GETOBJ(94, int0) != -1)) {
                CC_SETSIZE(36, 32, 0, 0);
                if ((int0 == 0)) {
                    CC_SETPOSITION(script788(35979289, 2, 2), 0, 0);
                } else if ((int0 == 1)) {
                    CC_SETPOSITION(script788(35979290, 2, 2), 0, 0);
                } else if ((int0 == 2)) {
                    CC_SETPOSITION(script788(35979291, 2, 2), 0, 0);
                } else if ((int0 == 3)) {
                    CC_SETPOSITION(script788(35979293, 2, 2), 0, 0);
                } else if ((int0 == 4)) {
                    CC_SETPOSITION(script788(35979294, 2, 2), 0, 0);
                } else if ((int0 == 5)) {
                    CC_SETPOSITION(script788(35979295, 2, 2), 0, 0);
                } else if ((int0 == 7)) {
                    CC_SETPOSITION(script788(35979296, 2, 2), 0, 0);
                } else if ((int0 == 9)) {
                    CC_SETPOSITION(script788(35979298, 2, 2), 0, 0);
                } else if ((int0 == 10)) {
                    CC_SETPOSITION(script788(35979297, 2, 2), 0, 0);
                } else if ((int0 == 12)) {
                    CC_SETPOSITION(script788(35979299, 2, 2), 0, 0);
                } else if ((int0 == 13)) {
                    CC_SETPOSITION(script788(35979292, 2, 2), 0, 0);
                };
                CC_SETOBJECT(INV_GETOBJ(94, int0), INV_GETNUM(94, int0));
                CC_SETOPBASE(OC_NAME(INV_GETOBJ(94, int0)));
                CC_SETOP(1, "Remove<col=ff9040>");
                CC_SETOP(10, "Examine<col=ff9040>");
                CC_SETOUTLINE(1);
            } else {
                CC_SETSIZE(32, 32, 0, 0);
                if ((int0 == 0)) {
                    CC_SETPOSITION(script788(35979289, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24431);
                } else if ((int0 == 1)) {
                    CC_SETPOSITION(script788(35979290, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24432);
                } else if ((int0 == 2)) {
                    CC_SETPOSITION(script788(35979291, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24433);
                } else if ((int0 == 3)) {
                    CC_SETPOSITION(script788(35979293, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24434);
                } else if ((int0 == 4)) {
                    CC_SETPOSITION(script788(35979294, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24436);
                } else if ((int0 == 5)) {
                    CC_SETPOSITION(script788(35979295, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24437);
                } else if ((int0 == 7)) {
                    CC_SETPOSITION(script788(35979296, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24438);
                } else if ((int0 == 9)) {
                    CC_SETPOSITION(script788(35979298, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24439);
                } else if ((int0 == 10)) {
                    CC_SETPOSITION(script788(35979297, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24440);
                } else if ((int0 == 12)) {
                    CC_SETPOSITION(script788(35979299, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24435);
                } else if ((int0 == 13)) {
                    CC_SETPOSITION(script788(35979292, 2, 2), 0, 0);
                    CC_SETGRAPHIC(24441);
                };
            };
        };
        int0 = (int0 + 1);
    };
    if ((varclient_4678 == 1)) {
        IF_SETSIZE(130, 45, 0, 0, 35979276);
        IF_SETPOSITION(-16, 51, 1, 1, 35979276);
        IF_SETHIDE(0, 35979277);
    } else {
        IF_SETSIZE(130, 66, 0, 0, 35979276);
        IF_SETPOSITION(-16, 74, 1, 1, 35979276);
        IF_SETHIDE(1, 35979277);
    };
    if ((varplayer_5055 == 0)) {
        IF_SETHIDE(1, 35979283);
        IF_SETHIDE(1, 35979280);
        IF_SETHIDE(0, 35979284);
        IF_SETHIDE(0, 35979281);
    } else {
        IF_SETHIDE(0, 35979283);
        IF_SETHIDE(0, 35979280);
        IF_SETHIDE(1, 35979284);
        IF_SETHIDE(1, 35979281);
    };
    return;
}