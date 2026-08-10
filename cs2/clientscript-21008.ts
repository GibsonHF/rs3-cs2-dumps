//
function script21008(): void {
    switch (int1) {
        case 1: {
            stack(quest_getparam(int0, 6864));
            stack(quest_getparam(int0, 6852));
            return;
        }
        case 2: {
            stack(quest_getparam(int0, 7705));
            stack(quest_getparam(int0, 6853));
            return;
        }
        case 3: {
            stack(quest_getparam(int0, 7817));
            stack(quest_getparam(int0, 6854));
            return;
        }
        case 4: {
            stack(quest_getparam(int0, 7866));
            stack(quest_getparam(int0, 6855));
            return;
        }
        case 5: {
            stack(quest_getparam(int0, 7867));
            stack(quest_getparam(int0, 6856));
            return;
        }
        case 6: {
            stack(quest_getparam(int0, 7868));
            stack(quest_getparam(int0, 6857));
            return;
        }
        case 7: {
            stack(quest_getparam(int0, 7869));
            stack(quest_getparam(int0, 6858));
            return;
        }
        case 8: {
            stack(quest_getparam(int0, 7870));
            stack(quest_getparam(int0, 6859));
            return;
        }
        case 9: {
            stack(quest_getparam(int0, 7871));
            stack(quest_getparam(int0, 6860));
            return;
        }
        case 10: {
            stack(quest_getparam(int0, 7872));
            stack(quest_getparam(int0, 6861));
            return;
        }
        case 11: {
            stack(quest_getparam(int0, 7873));
            stack(quest_getparam(int0, 6862));
            return;
        }
        case 12: {
            stack(quest_getparam(int0, 7874));
            stack(quest_getparam(int0, 6863));
            return;
        }
    };
    unk11016(`Unhandled case #${inttostring(int1, 10)}.`);
    stack(0);
    stack(-1);
    return;
}