//
function script5581(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script4661();
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((int0 == 1)) {
        if ((int1 >= 3)) {
            IF_SETPARAM_INT(4523, 1, comp(1193, 25));  // choice_v2_frem:option_text_3
            IF_SETPARAM_INT(4523, 1, comp(1193, 26));  // choice_v2_frem:text_3
            IF_SETPARAM_INT(4523, 1, comp(1193, 31));  // choice_v2_frem:option_text_4
            IF_SETPARAM_INT(4523, 1, comp(1193, 32));  // choice_v2_frem:text_4
        } else if ((int0 == 2)) {
            if ((int1 >= 3)) {
                IF_SETPARAM_INT(4523, 1, comp(1193, 9));  // choice_v2_frem:option_text_1
                IF_SETPARAM_INT(4523, 1, comp(1193, 10));  // choice_v2_frem:text_1
                IF_SETPARAM_INT(4523, 1, comp(1193, 16));  // choice_v2_frem:option_text_2
                IF_SETPARAM_INT(4523, 1, comp(1193, 17));  // choice_v2_frem:text_2
            } else {
                IF_SETPARAM_INT(4523, 1, comp(1193, 9));  // choice_v2_frem:option_text_1
                IF_SETPARAM_INT(4523, 1, comp(1193, 10));  // choice_v2_frem:text_1
                IF_SETPARAM_INT(4523, 1, comp(1193, 31));  // choice_v2_frem:option_text_4
                IF_SETPARAM_INT(4523, 1, comp(1193, 32));  // choice_v2_frem:text_4
            };
        } else {
            IF_SETPARAM_INT(4523, 1, comp(1193, 9));  // choice_v2_frem:option_text_1
            IF_SETPARAM_INT(4523, 1, comp(1193, 10));  // choice_v2_frem:text_1
            IF_SETPARAM_INT(4523, 1, comp(1193, 31));  // choice_v2_frem:option_text_4
            IF_SETPARAM_INT(4523, 1, comp(1193, 32));  // choice_v2_frem:text_4
        };
    } else if ((int0 == 2)) {
        if ((int1 >= 3)) {
            IF_SETPARAM_INT(4523, 1, comp(1193, 9));  // choice_v2_frem:option_text_1
            IF_SETPARAM_INT(4523, 1, comp(1193, 10));  // choice_v2_frem:text_1
            IF_SETPARAM_INT(4523, 1, comp(1193, 16));  // choice_v2_frem:option_text_2
            IF_SETPARAM_INT(4523, 1, comp(1193, 17));  // choice_v2_frem:text_2
        } else {
            IF_SETPARAM_INT(4523, 1, comp(1193, 9));  // choice_v2_frem:option_text_1
            IF_SETPARAM_INT(4523, 1, comp(1193, 10));  // choice_v2_frem:text_1
            IF_SETPARAM_INT(4523, 1, comp(1193, 31));  // choice_v2_frem:option_text_4
            IF_SETPARAM_INT(4523, 1, comp(1193, 32));  // choice_v2_frem:text_4
        };
    } else {
        IF_SETPARAM_INT(4523, 1, comp(1193, 9));  // choice_v2_frem:option_text_1
        IF_SETPARAM_INT(4523, 1, comp(1193, 10));  // choice_v2_frem:text_1
        IF_SETPARAM_INT(4523, 1, comp(1193, 31));  // choice_v2_frem:option_text_4
        IF_SETPARAM_INT(4523, 1, comp(1193, 32));  // choice_v2_frem:text_4
    };
    IF_SETONTIMER(callback(script5582, 78184452, 78184457, 78184458), comp(1193, 4));  // choice_v2_frem:option_1
    IF_SETONTIMER(callback(script5582, 78184459, 78184464, 78184465), comp(1193, 11));  // choice_v2_frem:option_2
    IF_SETONTIMER(callback(script5582, 78184466, 78184473, 78184474), comp(1193, 18));  // choice_v2_frem:option_3
    IF_SETONTIMER(callback(script5582, 78184467, 78184479, 78184480), comp(1193, 19));  // choice_v2_frem:option_4
    script8841(12, 1);
    return;
}