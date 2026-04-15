//
function script15663(int0: unknown_int, int1: unknown_int, int2: unknown_int, string0: string, string1: unknown_string): void {
    if ((IF_GETHIDE(comp(744, 168)) == false)) {
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    script15687(varclient_174);
    var string2 = IF_GETTEXT(comp(744, 106));
    IF_SETHIDE(true, comp(744, 169));
    IF_SETHIDE(true, comp(744, 172));
    IF_SETHIDE(true, comp(744, 179));
    IF_SETTEXT(string0, comp(744, 178));
    if ((int2 == -1)) {
        if ((int1 == 0)) {
            if (((strcmp(string2, "") == 0) && (SSO_AVAILABLE() == 1))) {
                string2 = SSO_DISPLAYNAME();
                if ((strcmp(string2, "") != 0)) {
                    IF_SETTEXT(SSO_DISPLAYNAME(), comp(744, 171));
                };
            };
        } else if ((script13749() == false)) {
            IF_SETHIDE(false, comp(744, 179));
        };
    };
    if ((IF_GETHIDE(comp(744, 179)) == true)) {
        IF_SETPOSITION(0, 83, 1, 0, comp(744, 176));
        IF_SETPOSITION(0, 148, 1, 0, comp(744, 178));
    } else {
        IF_SETPOSITION(0, 0, 1, 0, comp(744, 176));
        IF_SETPOSITION(0, 75, 1, 0, comp(744, 178));
    };
    varclient_1092 = (CLIENTCLOCK() + 5);
    stack(-1);
    stack(48758961);
    IF_SETGRAPHIC();
    var int3 = 48758960;
    if ((int3 != -1)) {
        if ((CC_FIND(int3, 0) == 1)) {
            if ((CC_GETGRAPHIC() == 18964 as graphic)) {
                CC_SETHIDE(false);
            };
            if (((CC_FIND(int3, 1) == 1) && (CC_GETGRAPHIC() == 18963 as graphic))) {
                CC_SETHIDE(false);
                CC_SET2DANGLE(0);
            };
        } else {
            CC_CREATE(int3, 5, 0);
            CC_CREATE[1](int3, 5, 1);
            CC_SETGRAPHIC(18964 as graphic);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 1, 0);
            CC_SETGRAPHIC[1](18963 as graphic);
            CC_SETSIZE[1](0, 0, 1, 1);
            CC_SETPOSITION[1](0, 0, 1, 0);
        };
    };
    IF_SETONTIMER(callback(script2951, int3), int3);
    IF_SETTEXT(string1, 48758964);
    if ((IF_FIND(48758964) == 1)) {
        if ((int2 == -1)) {
            CC_SETHIDE(false);
            CC_SETONBUTTONCLICK(callback(script15666, int0));
        } else {
            CC_SETHIDE(false);
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
                    CC_SETHIDE(true);
                    break;
                }
            };
        };
    };
    return;
}