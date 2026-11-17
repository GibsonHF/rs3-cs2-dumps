//
function script15663(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    if ((IF_GETHIDE(comp(744, 173)) == false)) {  // loginscreen:login_progress_popup_password
        return;
    };
    if ((varclient_174 != 102)) {
        varclient_1089 = varclient_174;
    };
    script15651(102);
    script15687(varclient_174);
    var string2 = IF_GETTEXT(comp(744, 111));  // loginscreen:toggle_remember_username_login
    IF_SETHIDE(true, comp(744, 174));  // loginscreen:com_174
    IF_SETHIDE(true, comp(744, 177));  // loginscreen:login_progress_popup_throbber_layer
    IF_SETHIDE(true, comp(744, 184));  // loginscreen:tnc_text
    IF_SETTEXT(string0, comp(744, 183));  // loginscreen:tnc_background
    if ((int2 == -1)) {
        if ((int1 == 0)) {
            if (((strcmp(string2, "") == 0) && (SSO_AVAILABLE() == 1))) {
                string2 = SSO_DISPLAYNAME();
                if ((strcmp(string2, "") != 0)) {
                    IF_SETTEXT(SSO_DISPLAYNAME(), comp(744, 176));  // loginscreen:login_progress_wrapper
                };
            };
        } else if ((script13749() == 0)) {
            IF_SETHIDE(false, comp(744, 184));  // loginscreen:tnc_text
        };
    };
    if ((IF_GETHIDE(comp(744, 184)) == true)) {  // loginscreen:tnc_text
        IF_SETPOSITION(0, 83, 1, 0, comp(744, 181));  // loginscreen:login_progress_popup_cancel
        IF_SETPOSITION(0, 148, 1, 0, comp(744, 183));  // loginscreen:tnc_background
    } else {
        IF_SETPOSITION(0, 0, 1, 0, comp(744, 181));  // loginscreen:login_progress_popup_cancel
        IF_SETPOSITION(0, 75, 1, 0, comp(744, 183));  // loginscreen:tnc_background
    };
    varclient_1092 = (CLIENTCLOCK() + 5);
    IF_SETGRAPHIC(-1 as graphic, comp(744, 182));  // loginscreen:tnc_layer
    var int3 = comp(744, 181);  // loginscreen:login_progress_popup_cancel
    if ((int3 != comp(-1, 65535))) {
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
    IF_SETTEXT(string1, comp(744, 185));  // loginscreen:other
    if ((IF_FIND(comp(744, 185)) == 1)) {  // loginscreen:other
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