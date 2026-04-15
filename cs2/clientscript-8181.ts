//
function script8181(int0: unknown_int, int1: unknown_int): void {
    switch (int1) {
        case 1: {
            if ((script9666() == 1)) {
                return;
            };
            if ((IF_HASSUB(comp(1477, 744)) == 1)) {
                script18123();
            } else {
                if ((((script4550(1316) == 1) || (script9571(1316) == 1)) || (script4550(516) == 1))) {
                    script14728();
                    return;
                };
                if ((script8292(-1, -1) == 1)) {
                    if ((script8292(0, 4) == 1)) {
                        if (((varbitplayer_37069 == 4) && (IF_GETHIDE(comp(755, 87)) == false))) {
                            IF_SETHIDE(true, comp(755, 87));
                            return;
                        };
                    } else if ((script8292(3, 3) == 1)) {
                        if ((IF_GETHIDE(comp(1343, 172)) == false)) {
                            IF_SETHIDE(true, comp(1343, 172));
                            return;
                        };
                        if ((IF_GETHIDE(comp(1343, 30)) == false)) {
                            IF_SETHIDE(true, comp(1343, 30));
                            return;
                        };
                    } else if (((script8292(3, 1) == 1) && (IF_GETHIDE(comp(1284, 35)) == false))) {
                        IF_SETHIDE(true, comp(1284, 35));
                        return;
                    };
                    script8290(0);
                    if ((struct_getparam(21301, 3507) != comp(-1, 65535))) {
                        IF_TRIGGEROP(struct_getparam(21301, 3507), 1, 1);
                    };
                } else {
                    if ((script14726(13) == 1)) {
                        script14728();
                        return;
                    };
                    if ((script8854() == 18)) {
                        script675();
                    } else {
                        if ((script6358() == 1)) {
                            return;
                        };
                        if (((((script8081(1028, 1622 as overlayinterface) == 1) && (int0 != 93913160)) && (int0 != 93913103)) && (int0 != 93913131))) {
                            return;
                        };
                        if (((script8081(1045, 743 as overlayinterface) == 1) && (varplayer_9670 == 12))) {
                            return;
                        };
                        if ((IF_HASSUB(comp(1477, 693)) == 1)) {
                            script675();
                        } else if ((IF_GETHIDE(comp(1477, 787)) == false)) {
                            script2256(comp(1477, 787));
                        } else if ((int0 == 93913160)) {
                            script4143();
                        } else if (((script6431() == true) && (script15532(0) == 1))) {
                            IF_TRIGGEROP(comp(279, 4), -1, 1);
                        } else {
                            script8182();
                        };
                    };
                };
            };
            break;
        }
    };
    return;
}