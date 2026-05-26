//
function script15663(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    if ((IF_GETHIDE(48758953) == 0)) {
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    script15687(varclient_174);
    var string2 = IF_GETTEXT(48758891);
    IF_SETHIDE(1, 48758954);
    IF_SETHIDE(1, 48758957);
    IF_SETHIDE(1, 48758964);
    IF_SETTEXT(string0, 48758963);
    if ((int2 == -1)) {
        if ((int1 == 0)) {
            if (((strcmp(string2, "") == 0) && (SSO_AVAILABLE() == 1))) {
                string2 = SSO_DISPLAYNAME();
                if ((strcmp(string2, "") != 0)) {
                    IF_SETTEXT(SSO_DISPLAYNAME(), 48758956);
                };
            };
        } else if ((script13749() == 0)) {
            IF_SETHIDE(0, 48758964);
        };
    };
    if ((IF_GETHIDE(48758964) == 1)) {
        IF_SETPOSITION(0, 83, 1, 0, 48758961);
        IF_SETPOSITION(0, 148, 1, 0, 48758963);
    } else {
        IF_SETPOSITION(0, 0, 1, 0, 48758961);
        IF_SETPOSITION(0, 75, 1, 0, 48758963);
    };
    varclient_1092 = (CLIENTCLOCK() + 5);
    IF_SETGRAPHIC(-1, 48758962);
    var int3 = 48758961;
    if ((int3 != -1)) {
        if ((CC_FIND(int3, 0) == 1)) {
            if ((CC_GETGRAPHIC() == 18964)) {
                CC_SETHIDE(0);
            };
            if (((CC_FIND(int3, 1) == 1) && (CC_GETGRAPHIC() == 18963))) {
                CC_SETHIDE(0);
                CC_SET2DANGLE(0);
            };
        } else {
            CC_CREATE(int3, 5, 0);
            CC_CREATE[1](int3, 5, 1);
            CC_SETGRAPHIC(18964);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 1, 0);
            CC_SETGRAPHIC[1](18963);
            CC_SETSIZE[1](0, 0, 1, 1);
            CC_SETPOSITION[1](0, 0, 1, 0);
        };
    };
    IF_SETONTIMER(callback(script2951, int3), int3);
    IF_SETTEXT(string1, 48758965);
    if ((IF_FIND(48758965) == 1)) {
        if ((int2 == -1)) {
            CC_SETHIDE(0);
            CC_SETONBUTTONCLICK(callback(script15666, int0));
        } else {
            CC_SETHIDE(0);
            switch (int2) {
                case 0: {
                    CC_SETONBUTTONCLICK(callback(script15263));
                    break;
                }
                case 1: {
                    CC_SETONBUTTONCLICK(callback(script15257));
                    break;
                }
                case 2: {
                    CC_SETONBUTTONCLICK(callback(script15258, 1));
                    break;
                }
                case 3: {
                    CC_SETONBUTTONCLICK(callback(script15258, 2));
                    break;
                }
                case 4: {
                    CC_SETONBUTTONCLICK(callback(script15258, 4));
                    break;
                }
                default: {
                    CC_SETHIDE(1);
                    break;
                }
            };
        };
    };
    return;
}