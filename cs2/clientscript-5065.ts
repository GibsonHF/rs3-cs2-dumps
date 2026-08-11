//
function script5065(int0: number): void {
    var int1 = IF_GETHEIGHT(comp(1111, 65));  // clan_field_editor:header_1
    IF_SETSIZE(0, int1, 1, 0, comp(1111, 66));  // clan_field_editor:header_2
    IF_SETSIZE(0, int1, 1, 0, comp(1111, 67));  // clan_field_editor:header_3
    IF_SETSIZE(0, int1, 1, 0, comp(1111, 68));  // clan_field_editor:header_4
    var int2 = IF_GETHEIGHT(comp(1111, 52));  // clan_field_editor:menu_area
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    switch (varclient_768) {
        case 2: {
            int3 = int1;
            int4 = (int2 - (int1 * 2));
            int5 = (int2 - int1);
            script5056(72810561, 0);
            script5056(72810562, 1);
            script5056(72810563, 0);
            script5056(72810564, 0);
            break;
        }
        case 3: {
            int3 = int1;
            int4 = (int1 * 2);
            int5 = (int2 - int1);
            script5056(72810561, 0);
            script5056(72810562, 0);
            script5056(72810563, 1);
            script5056(72810564, 0);
            break;
        }
        case 4: {
            int3 = int1;
            int4 = (int1 * 2);
            int5 = (int1 * 3);
            script5056(72810561, 0);
            script5056(72810562, 0);
            script5056(72810563, 0);
            script5056(72810564, 1);
            break;
        }
        default: {
            varclient_768 = 1;
            int3 = (int2 - (int1 * 3));
            int4 = (int2 - (int1 * 2));
            int5 = (int2 - int1);
            script5056(72810561, 1);
            script5056(72810562, 0);
            script5056(72810563, 0);
            script5056(72810564, 0);
            break;
        }
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((int0 == 1)) {
        [int6, int7, int8] = [int3, int4, int5];
    } else {
        int9 = IF_GETY(comp(1111, 66));  // clan_field_editor:header_2
        if ((int9 != int3)) {
            int6 = (int9 + MAX(MIN((int3 - int9), 3), -3));
            int10 = 1;
        } else {
            int6 = int3;
        };
        int9 = IF_GETY(comp(1111, 67));  // clan_field_editor:header_3
        if ((int9 != int4)) {
            int7 = (int9 + MAX(MIN((int4 - int9), 3), -3));
            int10 = 1;
        } else {
            int7 = int4;
        };
        int9 = IF_GETY(comp(1111, 68));  // clan_field_editor:header_4
        if ((int9 != int5)) {
            int8 = (int9 + MAX(MIN((int5 - int9), 3), -3));
            int10 = 1;
        } else {
            int8 = int5;
        };
    };
    IF_SETPOSITION(0, 0, 1, 0, comp(1111, 65));  // clan_field_editor:header_1
    IF_SETPOSITION(0, int6, 1, 0, comp(1111, 66));  // clan_field_editor:header_2
    IF_SETPOSITION(0, int7, 1, 0, comp(1111, 67));  // clan_field_editor:header_3
    IF_SETPOSITION(0, int8, 1, 0, comp(1111, 68));  // clan_field_editor:header_4
    IF_SETPOSITION(0, int1, 1, 0, comp(1111, 53));  // clan_field_editor:menu_container_1
    IF_SETPOSITION(0, (int6 + int1), 1, 0, comp(1111, 56));  // clan_field_editor:menu_container_2
    IF_SETPOSITION(0, (int7 + int1), 1, 0, comp(1111, 59));  // clan_field_editor:menu_container_3
    IF_SETPOSITION(0, (int8 + int1), 1, 0, comp(1111, 62));  // clan_field_editor:menu_container_4
    IF_SETSIZE(0, (int6 - int1), 1, 0, comp(1111, 53));  // clan_field_editor:menu_container_1
    IF_SETSIZE(0, (int7 - (int6 + int1)), 1, 0, comp(1111, 56));  // clan_field_editor:menu_container_2
    IF_SETSIZE(0, (int8 - (int7 + int1)), 1, 0, comp(1111, 59));  // clan_field_editor:menu_container_3
    IF_SETSIZE(0, (int8 + int1), 1, 1, comp(1111, 62));  // clan_field_editor:menu_container_4
    script72(72810551, 72810550, IF_GETSCROLLY(comp(1111, 54)));  // clan_field_editor:menu_1
    script72(72810554, 72810553, IF_GETSCROLLY(comp(1111, 57)));  // clan_field_editor:menu_2
    script72(72810557, 72810556, IF_GETSCROLLY(comp(1111, 60)));  // clan_field_editor:menu_3
    script72(72810560, 72810559, IF_GETSCROLLY(comp(1111, 63)));  // clan_field_editor:menu_4
    if ((int10 == 1)) {
        IF_SETONTIMER(callback(script5064, -1), comp(1111, 52));  // clan_field_editor:menu_area
    } else {
        IF_SETONTIMER(callback(), comp(1111, 52));  // clan_field_editor:menu_area
    };
    return;
}