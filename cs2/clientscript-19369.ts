//
function script19369(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): number {
    var int1 = MIN(int5, int1);
    if (((int0 == -1 as obj) || (int1 < 1))) {
        return 0;
    };
    if ((int3 != 964 as inv)) {
        script12478("Attempted to withdraw from group storage to unexpected inv");
        return 0;
    };
    if (((script4356() == 0) && (OC_MEMBERS(int0) == 1))) {
        script14152("You need to be on a members' world to withdraw that item.");
        return 0;
    };
    switch (int0) {
        case 36725:
        case 36720:
        case 36719:
        case 36599: {
            if ((script13692() == 0)) {
                script14152("You need to complete the invention tutorial to withdraw that item.");
                return 0;
            };
            break;
        }
        case 50805: {
            if (((((((((varbitplayer_48172 + varbitplayer_48173) + varbitplayer_48174) + varbitplayer_48175) + varbitplayer_48176) + varbitplayer_61477) + varbitplayer_61478) + varbitplayer_61479) != 0)) {
                script12478("Player has artificers measure vars set but no measure.");
                script14152("You can only have one of those at a time.");
                return 0;
            };
            if (((script11197(50805, CLEARBIT(-1, 0)) == 1) || (script12517(964, 50805, 0) != -1))) {
                script14152("You can only have one of those at a time.");
                return 0;
            };
            break;
        }
    };
    var int7 = 0;
    if ((varplayer_160 == 1)) {
        if ((OC_CERT(int0) == int0)) {
            script14153("This item cannot be withdrawn as a note.");
        } else {
            int7 = 1;
        };
    };
    var int6 = script19356(int6, int0);
    var int8 = 0;
    if ((int7 == 1)) {
        int8 = script19593(int3, OC_CERT(int0), int1, INV_SIZE(int3));
    } else {
        int8 = script19593(int3, int0, int1, INV_SIZE(int3));
    };
    if ((int8 >= int1)) {
        script19569();
        script14183();
        script14152("You don't have enough inventory space.");
        return 0;
    };
    var int9 = int2;
    var int10 = int1;
    int1 = (int1 - int8);
    if ((OC_HASVAROBJ(int0) == 0)) {
        script19602(int2, int5, int0, int1, int3, int4, int7, int6);
        if ((int1 == int5)) {
            script19371(int2, int0, int6);
        };
    } else {
        if ((int2 == -1)) {
            var int2 = script19584(int0, 0, 0);
            if ((int2 == -1)) {
                return 0;
            };
        };
        script19602(int2, 1, int0, 1, int3, int4, 0, int6);
        int1 = (int1 - 1);
        if ((int1 > 0)) {
            int2 = script19584(int0, int2, 0);
            script19370(int2, int0, int3, int1, int6);
        } else {
            script19371(int2, int0, int6);
        };
    };
    if ((int8 > 0)) {
        script14183();
        script14153("You don't have enough inventory space to withdraw that many.");
    } else {
        script14154();
    };
    varbitplayer_56599 = 1;
    return 1;
}