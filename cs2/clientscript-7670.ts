//
function script7670(int0: int, int1: int, int2: component, int3: component): void {
    if ((int2 == comp(1405, 12))) {
        varclient_2753 = 1;
        if ((script13749() == true)) {
            varclient_2749 = STRING_LENGTH(IF_GETTEXT(int2));
        } else {
            varclient_2749 = IF_GETCHARINDEXATPOS(int0, int1, int2);
        };
        script7671(int2, int3, varclient_2758);
        script1566(0, varclient_2758, 500);
    } else if ((int2 == comp(1405, 26))) {
        varclient_2753 = 2;
        if ((script13749() == true)) {
            varclient_2750 = STRING_LENGTH(IF_GETTEXT(int2));
        } else {
            varclient_2750 = IF_GETCHARINDEXATPOS(int0, int1, int2);
        };
        script7671(int2, int3, varclient_2759);
        script1566(0, varclient_2759, 500);
    };
    script8841(17, 1);
    return;
}