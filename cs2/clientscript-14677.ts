//
function script14677(int0: dbrow): string {
    var int1 = script14589((dbrow_getfield(int0, 372752, 0) + 1));
    var string0 = "";
    switch (int0) {
        case 2934:
        case 2935:
        case 2933: {
            if (((script2193(273 as quest) != 2) || (varbitplayer_46468 < 2))) {
                string0 = script2103(273 as quest);
                return `You must have completed the '${string0}' quest before you can unlock this researcher, and also have achieved the '${dbrow_getfield(int1, 380944, 0)}' qualification.`;
            };
            return "You can unlock this researcher by handing them a specific restored artefact.<br>You can find them at the Varrock Dig Site.";
        }
        case 2936:
        case 2937: {
            if (((varbitplayer_44292 < 30) || (varbitplayer_46468 < 3))) {
                return `You must have completed the Anachronia base camp tutorial before you can unlock this researcher, and also have achieved the '${dbrow_getfield(int1, 380944, 0)}' qualification.`;
            };
            return "You can unlock this researcher by showing them a completed Anachronia totem.<br>You can find them at Anachronia base camp.";
        }
        case 14674: {
            string0 = ACHIEVEMENT_GETNAME(4920 as achievement);
            if ((varbitplayer_46468 < 3)) {
                return `You can unlock this researcher by completing the '${string0}' achievement, as well as achieving the '${dbrow_getfield(int1, 380944, 0)}' qualification.`;
            };
            return `You can unlock this researcher by completing the '${string0}' achievement.`;
        }
        case 2942: {
            if (((script2193(144 as quest) != 2) || (varbitplayer_46468 < 5))) {
                string0 = script2103(144 as quest);
                return `You must have completed the '${string0}' quest before you can unlock this researcher, and also have achieved the '${dbrow_getfield(int1, 380944, 0)}' qualification.`;
            };
            return "You can unlock this researcher by talking to them.<br>You can find them on a bench east of Varrock.";
        }
        case 2944: {
            if (((script2193(286 as quest) != 2) || (varbitplayer_46468 < 5))) {
                string0 = script2103(286 as quest);
                return `You must have completed the '${string0}' quest before you can unlock this researcher, and also have achieved the '${dbrow_getfield(int1, 380944, 0)}' qualification.`;
            };
            return "You can unlock this researcher by handing them a specific restored artefact.<br>You can find them at the Varrock Dig Site's north-east winch.";
        }
        case 2943: {
            if (((script2193(135 as quest) != 2) || (varbitplayer_46468 < 5))) {
                string0 = script2103(135 as quest);
                return `You must have completed the '${string0}' quest before you can unlock this researcher, and also have achieved the '${dbrow_getfield(int1, 380944, 0)}' qualification.`;
            };
            return "You can unlock this researcher by handing them a specific restored artefact.<br>You can find them at the Bedabin Camp.";
        }
        case 2945: {
            string0 = script13284(29039 as struct);
            return `You can unlock this researcher by completing the '${string0}' achievement.`;
        }
        case 2946: {
            string0 = script13284(28715 as struct);
            return `You can unlock this researcher by completing the '${string0}' achievement.`;
        }
        case 2947: {
            string0 = script13284(28816 as struct);
            return `You can unlock this researcher by completing the '${string0}' achievement.`;
        }
        case 2948: {
            string0 = script13284(21269 as struct);
            return `You can unlock this researcher by completing the '${string0}' achievement.`;
        }
        case 2949: {
            string0 = script13284(23242 as struct);
            return `You can unlock this researcher by completing the '${string0}' achievement.`;
        }
        case 3713: {
            string0 = script13284(44664 as struct);
            return `You can unlock this researcher by completing the '${string0}' achievement.`;
        }
    };
    if ((int1 != -1 as dbrow)) {
        return `You can unlock this researcher by achieving the '${dbrow_getfield(int1, 380944, 0)}' qualification.`;
    };
    return "You can unlock this researcher by playing the game.";
}