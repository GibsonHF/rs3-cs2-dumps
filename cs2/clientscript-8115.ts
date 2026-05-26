//
function script8115(int0: number, int1: number): void {
    if ((int0 == 0)) {
        if ((int1 == 0)) {
            IF_SETPOSITION(0, 3, 0, 0, 93716486);
            if ((varbitplayer_27169 == 1)) {
                IF_SETSIZE((504 + 14), 30, 0, 0, 93716486);
            } else {
                IF_SETSIZE(504, 30, 0, 0, 93716486);
            };
        } else {
            IF_SETPOSITION(3, 16, 2, 0, 93716486);
            IF_SETSIZE(30, (504 - 16), 0, 0, 93716486);
        };
    } else if ((int1 == 0)) {
        IF_SETPOSITION(0, 0, 0, 0, 93716486);
        IF_SETSIZE(245, 50, 0, 0, 93716486);
    } else {
        IF_SETPOSITION(3, 16, 2, 0, 93716486);
        IF_SETSIZE(50, (245 - 16), 0, 0, 93716486);
    };
    var int2 = 0;
    define_array(4);
    define_array[65536](4);
    var int3 = 0;
    var int4 = 0;
    IF_SETHIDE(0, 93716535);
    IF_SETHIDE(1, 93716540);
    IF_SETHIDE(0, 93716487);
    IF_SETHIDE(0, 93716494);
    IF_SETHIDE(0, 93716500);
    if ((int1 == 0)) {
        if ((int0 == 0)) {
            int2 = (IF_GETWIDTH(93716486) / 4);
            pop_array(0, 0);
            pop_array(1, int2);
            pop_array(2, (int2 * 2));
            pop_array(3, (int2 * 3));
            pop_array[1](0, 0);
            pop_array[1](1, 0);
            pop_array[1](2, 0);
            pop_array[1](3, 0);
            int3 = int2;
            int4 = 30;
        } else {
            int2 = (IF_GETWIDTH(93716486) / 2);
            pop_array(0, 0);
            pop_array(1, int2);
            pop_array(2, 0);
            pop_array(3, int2);
            pop_array[1](0, 0);
            pop_array[1](1, 0);
            pop_array[1](2, 24);
            pop_array[1](3, 24);
            int3 = int2;
            int4 = 30;
        };
    } else if ((int0 == 0)) {
        int2 = (IF_GETHEIGHT(93716486) / 4);
        pop_array(0, 0);
        pop_array(1, 0);
        pop_array(2, 0);
        pop_array(3, 0);
        pop_array[1](0, 0);
        pop_array[1](1, int2);
        pop_array[1](2, (int2 * 2));
        pop_array[1](3, (int2 * 3));
        int3 = 30;
        int4 = int2;
    } else {
        int2 = (IF_GETHEIGHT(93716486) / 2);
        pop_array(0, 0);
        pop_array(1, 0);
        pop_array(2, 24);
        pop_array(3, 24);
        pop_array[1](0, 0);
        pop_array[1](1, int2);
        pop_array[1](2, 0);
        pop_array[1](3, int2);
        int3 = 30;
        int4 = int2;
    };
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, 93716487);
    IF_SETPOSITION(push_array(1), push_array[1](1), 0, 0, 93716535);
    IF_SETPOSITION(push_array(2), push_array[1](2), 0, 0, 93716494);
    IF_SETPOSITION(push_array(3), push_array[1](3), 0, 0, 93716500);
    IF_SETSIZE(int3, int4, 0, 0, 93716487);
    IF_SETSIZE(int3, int4, 0, 0, 93716535);
    IF_SETSIZE(int3, int4, 0, 0, 93716494);
    IF_SETSIZE(int3, int4, 0, 0, 93716500);
    if ((int1 == 0)) {
        if ((int0 == 0)) {
            int4 = 24;
        } else {
            int4 = 22;
        };
        int3 = MAX(0, ((IF_GETWIDTH(93716487) - 30) - 2));
        pop_array(0, 30);
        pop_array[1](0, MAX(0, ((IF_GETHEIGHT(93716487) - int4) / 2)));
    } else {
        if ((int0 == 0)) {
            int3 = 24;
        } else {
            int3 = 22;
        };
        int4 = MAX(0, ((IF_GETHEIGHT(93716487) - 30) - 2));
        pop_array[1](0, 30);
        pop_array(0, MAX(0, ((IF_GETWIDTH(93716487) - int3) / 2)));
    };
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, 93716489);
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, 93716496);
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, 93716537);
    IF_SETPOSITION(push_array(0), push_array[1](0), 0, 0, 93716502);
    IF_SETSIZE(int3, int4, 0, 0, 93716489);
    IF_SETSIZE(int3, int4, 0, 0, 93716496);
    IF_SETSIZE(int3, int4, 0, 0, 93716537);
    IF_SETSIZE(int3, int4, 0, 0, 93716502);
    return;
}