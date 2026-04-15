//
function script13285(int0: struct, int1: unknown_int): string {
    if ((int0 == -1 as struct)) {
        return "";
    };
    var string0 = struct_getparam(int0, 6411);
    if (((script6431() == true) && (STRING_LENGTH(struct_getparam(int0, 8069)) > 0))) {
        string0 = struct_getparam(int0, 8069);
        if (((STRING_LENGTH(struct_getparam(int0, 8068)) > 0) && (varbitplayer_11754 > 0))) {
            string0 = struct_getparam(int0, 8068);
        };
    } else if (((STRING_LENGTH(struct_getparam(int0, 8067)) > 0) && (varbitplayer_11754 > 0))) {
        string0 = struct_getparam(int0, 8067);
    };
    if (((STRING_LENGTH(struct_getparam(int0, 4586)) > 0) && (script4148() == true))) {
        string0 = struct_getparam(int0, 4586);
    };
    if ((struct_getparam(int0, 8072) != -1 as cs2enum)) {
        string0 = struct_getparam(int0, 6969);
    };
    switch (int0) {
        case 38124: {
            if ((varbitplayer_11754 == 0)) {
                string0 = "Complete a task from each Slayer Master consecutively, starting with Turael and ending with Laniakea.";
            } else {
                string0 = "Complete a task from each Slayer Master consecutively, starting with Spria and ending with Laniakea.";
            };
            break;
        }
        case 36728: {
            if ((varbitplayer_36140 >= 100)) {
                string0 = " Complete the Easy Tasks and then speak to Hassan in Menaphos to claim your reward.";
            } else {
                string0 = " Complete the Easy Tasks and then speak to Hassan in Al Kharid Palace to claim your reward.";
            };
            break;
        }
    };
    var string1 = "";
    var int2 = 0;
    var int3 = -1 as quest;
    if ((struct_getparam(int0, 1345) > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            return string0;
        };
        int3 = struct_getparam(int0, 1403);
        if ((int3 == -1 as quest)) {
            script12478(`quest_struct_quest param not specified on quest #${inttostring(struct_getparam(int0, 1345), 10)}.`);
            return string0;
        };
        return script8220(int3);
    };
    if ((struct_getparam(int0, 1346) > 0)) {
        return "Defeat this boss at least once.";
    };
    if (((STRING_LENGTH(struct_getparam(int0, 4586)) > 0) && (script4148() == true))) {
        return string0;
    };
    if (((int1 == 1) && (((struct_getparam(int0, 6423) == -1337) && (struct_getparam(int0, 6426) == -1 as cs2enum)) || (struct_getparam(int0, 6419) == true)))) {
        int2 = script13569(int0);
        string1 = `${TOSTRING_LOCALISED(MAX(0, script13281(int0)), 1)}/${TOSTRING_LOCALISED(int2, 1)}`;
        if ((struct_getparam(int0, 6413) == 1701)) {
            return `${string0} (${string1} Quest Points)`;
        };
        return `${string0} (${string1})`;
    };
    return string0;
}