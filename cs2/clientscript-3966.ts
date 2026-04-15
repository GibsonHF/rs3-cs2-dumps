//
function script3966(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    var int7 = 0;
    varclient_1883 = int0;
    var int8 = script693(int1, int2, int3);
    var int9 = script693(int4, int5, int6);
    IF_SETMAXLINES(4, comp(1050, 2));
    switch (int0) {
        case 0: {
            script6118(int8, int9);
            stack(7526);
            stack(68812801);
            IF_SETGRAPHIC();
            IF_SETTEXT("And so Thok made good on his word and made Bone Face pay for getting in the way of his next adventure.", 68812802);
            break;
        }
        case 1: {
            script6118(int8, int9);
            stack(7526);
            stack(68812801);
            IF_SETGRAPHIC();
            IF_SETTEXT("Thok returned Mini-Marm and Mrs Mini-Marm to their pool, where they made a start on building a mighty crab army.", 68812802);
            break;
        }
        case 2: {
            script6118(int8, int9);
            int7 = (varbitplayer_4816 - varbitplayer_4817);
            if ((int7 >= 4)) {
                stack(7526);
                stack(68812801);
                IF_SETGRAPHIC();
                IF_SETTEXT(`Thok triumphed over his brother Marmaros, beating him by a mighty ${inttostring(varbitplayer_4816, 10)} kills to Marmaros's ${inttostring(varbitplayer_4817, 10)}.<br>Thok is the greatest brother! Marmaros never stood a chance.`, 68812802);
            } else if ((int7 > 0)) {
                stack(7526);
                stack(68812801);
                IF_SETGRAPHIC();
                IF_SETTEXT(`Thok scraped a close victory over Marmaros, beating him by a mere ${inttostring(varbitplayer_4816, 10)} kills to Marmaros's ${inttostring(varbitplayer_4817, 10)}.<br>Can Thok achieve a more decisive win? Play again to find out!`, 68812802);
            } else if ((int7 < 0)) {
                stack(7526);
                stack(68812801);
                IF_SETGRAPHIC();
                IF_SETTEXT(`Marmaros defeated his brother Thok, barely beating him with ${inttostring(varbitplayer_4817, 10)} kills to Thok's ${inttostring(varbitplayer_4816, 10)}.<br>Marmaros is the greatest brother! Play again; maybe you can defeat him next time.`, 68812802);
            } else {
                stack(7526);
                stack(68812801);
                IF_SETGRAPHIC();
                IF_SETTEXT(`Thok and Marmaros both killed the same number of enemies, each with a kill count of ${inttostring(varbitplayer_4817, 10)}.<br>Who can be the better brother? Play again to find out!`, 68812802);
            };
            break;
        }
        case 3: {
            script6118(int8, int9);
            stack(7526);
            stack(68812801);
            IF_SETGRAPHIC();
            IF_SETTEXT("Pretty Lass is quietly waiting for Thok to ask her out on a date.", 68812802);
            break;
        }
        case 4: {
            script6118(int8, int9);
            stack(7526);
            stack(68812801);
            IF_SETGRAPHIC();
            IF_SETTEXT("Bone Face still hasn't woken up yet.", 68812802);
            break;
        }
    };
    varclient_1884 = MODULO((varclient_1884 + 1), 4);
    script6115(1);
    return;
}