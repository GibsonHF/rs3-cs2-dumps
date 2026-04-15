//
function script467(): void {
    CC_DELETEALL(comp(549, 22));
    IF_SETHIDE(true, comp(549, 66));
    var int0 = 0;
    while ((int0 < 14)) {
        CC_CREATE(comp(549, 22), 5, int0);
        if ((((int0 != 6) && (int0 != 8)) && (int0 != 11))) {
            if ((INV_GETOBJ(94 as inv, int0) != -1 as obj)) {
                CC_SETSIZE(36, 32, 0, 0);
                if ((int0 == 0)) {
                    CC_SETPOSITION(script788(comp(549, 25), 2, 2), 0, 0);
                } else if ((int0 == 1)) {
                    CC_SETPOSITION(script788(comp(549, 26), 2, 2), 0, 0);
                } else if ((int0 == 2)) {
                    CC_SETPOSITION(script788(comp(549, 27), 2, 2), 0, 0);
                } else if ((int0 == 3)) {
                    CC_SETPOSITION(script788(comp(549, 29), 2, 2), 0, 0);
                } else if ((int0 == 4)) {
                    CC_SETPOSITION(script788(comp(549, 30), 2, 2), 0, 0);
                } else if ((int0 == 5)) {
                    CC_SETPOSITION(script788(comp(549, 31), 2, 2), 0, 0);
                } else if ((int0 == 7)) {
                    CC_SETPOSITION(script788(comp(549, 32), 2, 2), 0, 0);
                } else if ((int0 == 9)) {
                    CC_SETPOSITION(script788(comp(549, 34), 2, 2), 0, 0);
                } else if ((int0 == 10)) {
                    CC_SETPOSITION(script788(comp(549, 33), 2, 2), 0, 0);
                } else if ((int0 == 12)) {
                    CC_SETPOSITION(script788(comp(549, 35), 2, 2), 0, 0);
                } else if ((int0 == 13)) {
                    CC_SETPOSITION(script788(comp(549, 28), 2, 2), 0, 0);
                };
                CC_SETOBJECT(INV_GETOBJ(94 as inv, int0), INV_GETNUM(94 as inv, int0));
                CC_SETOPBASE(OC_NAME(INV_GETOBJ(94 as inv, int0)));
                CC_SETOP(1, "Remove<col=ff9040>");
                CC_SETOP(10, "Examine<col=ff9040>");
                CC_SETOUTLINE(1);
            } else {
                CC_SETSIZE(32, 32, 0, 0);
                if ((int0 == 0)) {
                    CC_SETPOSITION(script788(comp(549, 25), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24431 as graphic);
                } else if ((int0 == 1)) {
                    CC_SETPOSITION(script788(comp(549, 26), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24432 as graphic);
                } else if ((int0 == 2)) {
                    CC_SETPOSITION(script788(comp(549, 27), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24433 as graphic);
                } else if ((int0 == 3)) {
                    CC_SETPOSITION(script788(comp(549, 29), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24434 as graphic);
                } else if ((int0 == 4)) {
                    CC_SETPOSITION(script788(comp(549, 30), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24436 as graphic);
                } else if ((int0 == 5)) {
                    CC_SETPOSITION(script788(comp(549, 31), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24437 as graphic);
                } else if ((int0 == 7)) {
                    CC_SETPOSITION(script788(comp(549, 32), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24438 as graphic);
                } else if ((int0 == 9)) {
                    CC_SETPOSITION(script788(comp(549, 34), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24439 as graphic);
                } else if ((int0 == 10)) {
                    CC_SETPOSITION(script788(comp(549, 33), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24440 as graphic);
                } else if ((int0 == 12)) {
                    CC_SETPOSITION(script788(comp(549, 35), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24435 as graphic);
                } else if ((int0 == 13)) {
                    CC_SETPOSITION(script788(comp(549, 28), 2, 2), 0, 0);
                    CC_SETGRAPHIC(24441 as graphic);
                };
            };
        };
        int0 = (int0 + 1);
    };
    if ((varclient_4678 == 1)) {
        IF_SETSIZE(130, 45, 0, 0, comp(549, 12));
        IF_SETPOSITION(-16, 51, 1, 1, comp(549, 12));
        IF_SETHIDE(false, comp(549, 13));
    } else {
        IF_SETSIZE(130, 66, 0, 0, comp(549, 12));
        IF_SETPOSITION(-16, 74, 1, 1, comp(549, 12));
        IF_SETHIDE(true, comp(549, 13));
    };
    if ((varplayer_5055 == 0)) {
        IF_SETHIDE(true, comp(549, 19));
        IF_SETHIDE(true, comp(549, 16));
        IF_SETHIDE(false, comp(549, 20));
        IF_SETHIDE(false, comp(549, 17));
    } else {
        IF_SETHIDE(false, comp(549, 19));
        IF_SETHIDE(false, comp(549, 16));
        IF_SETHIDE(true, comp(549, 20));
        IF_SETHIDE(true, comp(549, 17));
    };
    return;
}