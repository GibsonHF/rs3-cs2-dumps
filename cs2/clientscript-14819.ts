//
function script14819(int0: component, int1: component, int2: component, int3: component): void {
    var string0 = "";
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as achievement;
    switch (int0) {
        case 44892192: {
            int5 = ACHIEVEMENT_FINDSUBCAT(4815 as category, 4881 as category);
            int6 = 0;
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            int5 = (int5 + ACHIEVEMENT_FINDSUBCAT(4815 as category, 4816 as category));
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            varclient_6763 = int6;
            varclient_6764 = int5;
            string0 = `${TOSTRING_LOCALISED(varclient_6763, 1)}/${TOSTRING_LOCALISED(varclient_6764, 1)}`;
            if ((varclient_6764 > 0)) {
                int4 = 41;
            };
            break;
        }
        case 44892193: {
            int5 = ACHIEVEMENT_FINDSUBCAT(4815 as category, 4882 as category);
            int6 = 0;
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            varclient_6765 = int6;
            varclient_6766 = int5;
            string0 = `${TOSTRING_LOCALISED(varclient_6765, 1)}/${TOSTRING_LOCALISED(varclient_6766, 1)}`;
            if ((varclient_6766 > 0)) {
                int4 = 42;
            };
            break;
        }
        case 44892194: {
            int5 = ACHIEVEMENT_FINDSUBCAT(4815 as category, 4883 as category);
            int6 = 0;
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            varclient_6767 = int6;
            varclient_6768 = int5;
            string0 = `${TOSTRING_LOCALISED(varclient_6767, 1)}/${TOSTRING_LOCALISED(varclient_6768, 1)}`;
            if ((varclient_6768 > 0)) {
                int4 = 43;
            };
            break;
        }
        case 44892195: {
            int5 = ACHIEVEMENT_FINDSUBCAT(4815 as category, 4887 as category);
            int6 = 0;
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            varclient_6822 = int6;
            varclient_6823 = int5;
            string0 = `${TOSTRING_LOCALISED(varclient_6822, 1)}/${TOSTRING_LOCALISED(varclient_6823, 1)}`;
            if ((varclient_6823 > 0)) {
                int4 = 44;
            };
            break;
        }
        case 44892196: {
            int5 = ACHIEVEMENT_FINDSUBCAT(4815 as category, 4884 as category);
            int6 = 0;
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            varclient_6769 = int6;
            varclient_6770 = int5;
            string0 = `${TOSTRING_LOCALISED(varclient_6769, 1)}/${TOSTRING_LOCALISED(varclient_6770, 1)}`;
            if ((varclient_6770 > 0)) {
                int4 = 45;
            };
            break;
        }
        case 44892197: {
            int5 = ACHIEVEMENT_FINDSUBCAT(4815 as category, 4885 as category);
            int6 = 0;
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            varclient_6771 = int6;
            varclient_6772 = int5;
            string0 = `${TOSTRING_LOCALISED(varclient_6771, 1)}/${TOSTRING_LOCALISED(varclient_6772, 1)}`;
            if ((varclient_6772 > 0)) {
                int4 = 46;
            };
            break;
        }
        case 44892198: {
            int5 = ACHIEVEMENT_FINDSUBCAT(4815 as category, 4886 as category);
            int6 = 0;
            int7 = ACHIEVEMENT_FINDNEXT();
            while ((int7 != -1 as achievement)) {
                if ((ACHIEVEMENT_REQSTATE(int7) == -2)) {
                    int6 = (int6 + 1);
                };
                int7 = ACHIEVEMENT_FINDNEXT();
            };
            varclient_6773 = int6;
            varclient_6774 = int5;
            string0 = `${TOSTRING_LOCALISED(varclient_6773, 1)}/${TOSTRING_LOCALISED(varclient_6774, 1)}`;
            if ((varclient_6774 > 0)) {
                int4 = 47;
            };
            break;
        }
    };
    script14724("Achievement Category", int0, -1);
    IF_SETTEXT(string0, int1);
    if ((int4 != -1)) {
        script13310(int2, int3, int4, (8 * 1000));
    };
    return;
}