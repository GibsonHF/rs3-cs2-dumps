//
function script3744(int0: int): void {
    IF_SETHIDE(false, comp(746, 15));
    switch (int0) {
        case 1: {
            IF_SETPOSITION(5, 0, 0, 0, comp(746, 15));
            break;
        }
        case 6: {
            IF_SETPOSITION(55, 0, 0, 0, comp(746, 15));
            break;
        }
        case 13: {
            IF_SETPOSITION(105, 0, 0, 0, comp(746, 15));
            break;
        }
        case 2: {
            IF_SETPOSITION(155, 0, 0, 0, comp(746, 15));
            break;
        }
        case 8: {
            IF_SETPOSITION(205, 0, 0, 0, comp(746, 15));
            break;
        }
        case 14: {
            IF_SETPOSITION(255, 0, 0, 0, comp(746, 15));
            break;
        }
        case 5: {
            IF_SETPOSITION(305, 0, 0, 0, comp(746, 15));
            break;
        }
        case 9: {
            IF_SETPOSITION(355, 0, 0, 0, comp(746, 15));
            break;
        }
        case 15: {
            IF_SETPOSITION(405, 0, 0, 0, comp(746, 15));
            break;
        }
        case 3: {
            IF_SETPOSITION(5, 50, 0, 0, comp(746, 15));
            break;
        }
        case 10: {
            IF_SETPOSITION(55, 50, 0, 0, comp(746, 15));
            break;
        }
        case 16: {
            IF_SETPOSITION(105, 50, 0, 0, comp(746, 15));
            break;
        }
        case 7: {
            IF_SETPOSITION(155, 50, 0, 0, comp(746, 15));
            break;
        }
        case 11: {
            IF_SETPOSITION(205, 50, 0, 0, comp(746, 15));
            break;
        }
        case 17: {
            IF_SETPOSITION(255, 50, 0, 0, comp(746, 15));
            break;
        }
        case 4: {
            IF_SETPOSITION(305, 50, 0, 0, comp(746, 15));
            break;
        }
        case 19: {
            IF_SETPOSITION(355, 50, 0, 0, comp(746, 15));
            break;
        }
        case 18: {
            IF_SETPOSITION(405, 50, 0, 0, comp(746, 15));
            break;
        }
        case 12: {
            IF_SETPOSITION(5, 100, 0, 0, comp(746, 15));
            break;
        }
        case 20: {
            IF_SETPOSITION(55, 100, 0, 0, comp(746, 15));
            break;
        }
        case 21: {
            IF_SETPOSITION(105, 100, 0, 0, comp(746, 15));
            break;
        }
        case 22: {
            IF_SETPOSITION(155, 100, 0, 0, comp(746, 15));
            break;
        }
        case 23: {
            IF_SETPOSITION(205, 100, 0, 0, comp(746, 15));
            break;
        }
        case 24: {
            IF_SETPOSITION(255, 100, 0, 0, comp(746, 15));
            break;
        }
        case 25: {
            IF_SETPOSITION(305, 100, 0, 0, comp(746, 15));
            break;
        }
        case 26: {
            IF_SETPOSITION(355, 100, 0, 0, comp(746, 15));
            break;
        }
        case 27: {
            IF_SETPOSITION(405, 100, 0, 0, comp(746, 15));
            break;
        }
    };
    script7794(comp(746, 128), 21363 as struct);
    IF_SETONMOUSEOVER(callback(), comp(746, 128));
    IF_SETONMOUSELEAVE(callback(), 48889984);
    var int1 = 0;
    CC_CREATE(48889863, 5, int1);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 371, int0));
    var string0 = "Boosted Skill";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 48889863);
    script3975();
    return;
}