//
function script6391(int0: quest, int1: obj): int {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return -1;
    };
    var int2 = 1;
    while ((int2 <= 12)) {
        switch (int2) {
            case 1: {
                if ((quest_getparam(int0, 887) == int1)) {
                    return quest_getparam(int0, 949);
                };
                break;
            }
            case 2: {
                if ((quest_getparam(int0, 888) == int1)) {
                    return quest_getparam(int0, 950);
                };
                break;
            }
            case 3: {
                if ((quest_getparam(int0, 889) == int1)) {
                    return quest_getparam(int0, 951);
                };
                break;
            }
            case 4: {
                if ((quest_getparam(int0, 890) == int1)) {
                    return quest_getparam(int0, 952);
                };
                break;
            }
            case 5: {
                if ((quest_getparam(int0, 891) == int1)) {
                    return quest_getparam(int0, 1212);
                };
                break;
            }
            case 6: {
                if ((quest_getparam(int0, 892) == int1)) {
                    return quest_getparam(int0, 1270);
                };
                break;
            }
            case 7: {
                if ((quest_getparam(int0, 893) == int1)) {
                    return quest_getparam(int0, 1330);
                };
                break;
            }
            case 8: {
                if ((quest_getparam(int0, 894) == int1)) {
                    return quest_getparam(int0, 1360);
                };
                break;
            }
            case 9: {
                if ((quest_getparam(int0, 895) == int1)) {
                    return quest_getparam(int0, 1361);
                };
                break;
            }
            case 10: {
                if ((quest_getparam(int0, 896) == int1)) {
                    return quest_getparam(int0, 1362);
                };
                break;
            }
            case 11: {
                if ((quest_getparam(int0, 898) == int1)) {
                    return quest_getparam(int0, 1363);
                };
                break;
            }
            case 12: {
                if ((quest_getparam(int0, 948) == int1)) {
                    return quest_getparam(int0, 3291);
                };
                break;
            }
        };
        int2 = (int2 + 1);
    };
    var string0 = script2103(int0);
    script12478(`oc_debugname is not a quest_req_item1-6 for '${string0}'.`);
    return 0;
}