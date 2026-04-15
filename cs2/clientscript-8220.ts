//
function script8220(int0: quest): string {
    switch (quest_getparam(int0, 7889)) {
        case 1: {
            switch (script2105(int0)) {
                case 5: {
                    return "Complete this Special miniquest.";
                }
            };
            return "Complete this miniquest.";
        }
        case 2: {
            switch (script2105(int0)) {
                case 5: {
                    return "Complete this Special saga.";
                }
            };
            return "Complete this saga.";
        }
    };
    switch (script2105(int0)) {
        case 5: {
            return "Complete this Special quest.";
        }
    };
    return "Complete this quest.";
}