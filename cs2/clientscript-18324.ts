//
function script18324(): void {
    switch (varplayer_10946) {
        case 45037: {
            script17549();
            script17550();
            script17555(4273985, "", 1);
            break;
        }
        case 32142:
        case 32143: {
            script17549();
            script17550();
            if ((varplayer_10946 == 32142 as struct)) {
                script17555(16757760, "Burn: ", 1);
            } else if ((varplayer_10948 > 0)) {
                script17555(65280, "Acidity level: ", 1);
            };
            break;
        }
        case 45409:
        case 45780:
        case 46256:
        case 47805: {
            script17549();
            script17550();
            break;
        }
        case 45585:
        case 47804: {
            script17550();
            break;
        }
        case 7044: {
            script17555(13195556, "", 1);
            break;
        }
        case 52833:
        case 52834:
        case 52835:
        case 52836:
        case 52837:
        case 52838:
        case 52839:
        case 52840:
        case 9689:
        case 9690:
        case 9691:
        case 9692:
        case 9710:
        case 9716:
        case 9840:
        case 9841:
        case 9843: {
            script17555(13195556, "Aggression: ", 0);
            break;
        }
        case 50215: {
            script17555(957373, "Barrier strength: ", 1);
            script19134(12028948, "", 0);
            break;
        }
        case 49042: {
            script17549();
            script17550();
            script17555(5581653, "Power: ", 1);
            break;
        }
        case 49995:
        case 49996:
        case 49997: {
            script17549();
            script17550();
            break;
        }
        case 51839: {
            script17549();
            script17550();
            break;
        }
    };
    var int0 = struct_getparam(varplayer_10946, 8990);
    if (((int0 != -1 as struct) && (struct_getparam(int0, 8859) == 1))) {
        IF_SETHIDE(false, comp(1181, 41));
        script18326(comp(1181, 1), struct_getparam(int0, 8853), struct_getparam(int0, 8854), struct_getparam(int0, 8855), struct_getparam(int0, 8856), struct_getparam(int0, 8857), struct_getparam(int0, 4343));
    };
    return;
}