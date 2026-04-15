//
function script8574(int0: int): void {
    CC_CREATE(comp(1890, 10), 5, int0);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(4, ((29 * int0) + 5), 0, 0);
    var string0 = "You can drag these to your ability bar";
    if (((varbitplayer_1892 == 1) || (varbitplayer_27168 == 1))) {
        string0 = "Unlock your ability bar to be able to drag these";
    };
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    CC_SETONMOUSELEAVE(callback(script8805));
    switch (int0) {
        case 0: {
            CC_SETGRAPHIC(31337 as graphic);
            break;
        }
        case 1: {
            CC_SETGRAPHIC(31338 as graphic);
            break;
        }
        case 2: {
            CC_SETGRAPHIC(31339 as graphic);
            break;
        }
        case 3: {
            CC_SETGRAPHIC(31340 as graphic);
            break;
        }
        case 4: {
            CC_SETGRAPHIC(31341 as graphic);
            break;
        }
        case 5: {
            CC_SETGRAPHIC(31342 as graphic);
            break;
        }
        case 6: {
            CC_SETGRAPHIC(31343 as graphic);
            break;
        }
        case 7: {
            CC_SETGRAPHIC(31344 as graphic);
            break;
        }
        case 8: {
            CC_SETGRAPHIC(31345 as graphic);
            break;
        }
        case 9: {
            CC_SETGRAPHIC(31346 as graphic);
            break;
        }
    };
    return;
}