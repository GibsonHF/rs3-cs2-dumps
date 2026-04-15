//[clientscript,chatdefault_init]
function script1362(int0: int): void {
    varclient_2483 = "";
    varclient_2504 = "";
    varclient_1028 = 0;
    varclient_41 = 0;
    varclient_2505 = "";
    script1558(int0, 1);
    script8492(int0);
    var int1 = script8552(int0);
    if ((int1 != comp(-1, 65535))) {
        script8549(int0, IF_GETSCROLLHEIGHT(int1), IF_GETSCROLLY(int1), IF_GETHEIGHT(int1));
        switch (int0) {
            case 18: {
                int1 = comp(137, 0);
                if ((script6431() == false)) {
                    IF_SETONVARTRANSMIT(callback(script8490, int0, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1775, 458, 458, 458, 8200, 457, 1774, 4739, 1775, 1775, 3680, 3680, 3680, 4737, 5967, 1775, 9451, 4818, 33), int1);
                } else {
                    IF_SETONVARTRANSMIT(callback(script8490, int0, 1772, 1773, 1774, 4739, 1775, 458, 458, 458, 457, 1775, 3680, 4737, 5967, 1775, 9451, 9451, 4818, 17), int1);
                };
                IF_SETONVARTRANSMIT(callback(script464, 3680, 1), comp(137, 54));
                break;
            }
            case 19: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1772, 1775, 458, 458, 458, 8200, 457, 1774, 4739, 1775, 1775, 3680, 4737, 5967, 1775, 9451, 4818, 31), int1);
                break;
            }
            case 20: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 1772, 1772, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1775, 458, 458, 458, 8200, 457, 1774, 4739, 1775, 1775, 4737, 5967, 1775, 9451, 4818, 30), int1);
                break;
            }
            case 21: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1773, 1775, 458, 458, 458, 8200, 457, 1774, 4739, 1775, 1775, 4737, 5967, 1775, 9451, 4818, 30), int1);
                break;
            }
            case 22: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 1773, 1773, 1773, 1773, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1775, 458, 458, 458, 8200, 457, 1774, 4739, 1775, 1775, 4737, 5967, 1775, 9451, 4818, 30), int1);
                break;
            }
            case 23: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1774, 1775, 458, 458, 458, 8200, 457, 1774, 4739, 1775, 1775, 4737, 5967, 1775, 9451, 4818, 30), int1);
                break;
            }
            case 25: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 4739, 1775, 458, 458, 458, 8200, 457, 4739, 4739, 1775, 1775, 4737, 5967, 1775, 9451, 4818, 30), int1);
                break;
            }
            case 46: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 11968, 1775, 458, 458, 458, 8200, 457, 11968, 11968, 1775, 1775, 4737, 5967, 1775, 9451, 4818, 30), int1);
                break;
            }
            case 1019: {
                IF_SETONVARTRANSMIT(callback(script8490, int0, 1772, 1772, 1775, 457, 1775, 3680, 4737, 5967, 9451, 4818, 10), int1);
                break;
            }
        };
        IF_SETONVARCTRANSMIT(callback(script8490, int0, 2834, 2504, 4505, 3), int1);
        IF_SETONFRIENDTRANSMIT(callback(script8490, int0), int1);
        IF_SETONCHATTRANSMIT(callback(script81, int0), int1);
        IF_SETONCLANTRANSMIT(callback(script81, int0), int1);
        stack(8490);
        stack(int0);
        stack("i");
        stack(int1);
        IF_SETONPLAYERGROUPTRANSMIT();
    };
    var int2 = 0;
    var int3 = enum_getvalue(0, 9, script8604(int0), int2);
    while ((int3 != comp(-1, 65535))) {
        IF_SETCOLOUR(6908265, int3);
        int2 = (int2 + 1);
        int3 = enum_getvalue(0, 9, script8604(int0), int2);
    };
    var int4 = script8554(int0);
    if ((((int4 != comp(-1, 65535)) && (int0 != 18)) && (IF_FIND(int4) == 1))) {
        CC_CLEAROPS();
        switch (int0) {
            case 20: {
                CC_SETOP(4, "Friends Quick Chat");
                break;
            }
            case 21: {
                CC_SETOP(6, "Clan Quick Chat");
                break;
            }
            case 22: {
                CC_SETOP(8, "Guest Clan Quick Chat");
                break;
            }
            case 23: {
                CC_SETOP(1, "Public Chat");
                CC_SETOP(2, "Public Quick Chat");
                break;
            }
            case 25: {
                CC_SETOP(9, "Group Chat");
                CC_SETOP(10, "Group Quick Chat");
                break;
            }
        };
    };
    var int5 = script19625(int0);
    if ((int5 != comp(-1, 65535))) {
        if ((script19316() == false)) {
            IF_SETHIDE(true, int5);
        } else {
            IF_SETHIDE(false, int5);
        };
    };
    if ((int0 == 18)) {
        script15844(1);
    };
    return;
}