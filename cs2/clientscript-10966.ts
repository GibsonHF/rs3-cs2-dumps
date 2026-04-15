//
function script10966(int0: component): void {
    var string0 = "";
    switch (int0) {
        case 103743549: {
            if ((varbitplayer_26850 == 0)) {
                string0 = `Unlock the 'Efficiency' emote once you've reached ${TOSTRING_LOCALISED(600, 1)} sprinkled petals of love.`;
            } else {
                string0 = "Unlocked! Open your emotes tab to perform the 'Efficiency' emote.";
            };
            break;
        }
        case 103743553: {
            if ((varbitplayer_26851 == 0)) {
                string0 = `Unlock the 'No More!' emote once you've reached ${TOSTRING_LOCALISED(600, 1)} crushed petals of hate.`;
            } else {
                string0 = "Unlocked! Open your emotes tab to perform the 'No More!' emote.";
            };
            break;
        }
        case 103743551: {
            if ((varbitplayer_26852 == 0)) {
                string0 = `Unlock the Aegis of devotion once you've reached ${TOSTRING_LOCALISED(200, 1)} sprinkled petals of love. Ironman players cannot unlock this.`;
            } else {
                string0 = `Unlocked! You own the ${OC_NAME(33969 as obj)}. If you lose it then you can reclaim another from Diango in Draynor.`;
            };
            break;
        }
        case 103743555: {
            if ((varbitplayer_26853 == 0)) {
                string0 = `Unlock the Bulwark of revenge once you've reached ${TOSTRING_LOCALISED(200, 1)} crushed petals of hate. Ironman players cannot unlock this.`;
            } else {
                string0 = `Unlocked! You own the ${OC_NAME(33975 as obj)}. If you lose it then you can reclaim another from Diango in Draynor.`;
            };
            break;
        }
        case 103743550: {
            if ((varbitplayer_26854 == 0)) {
                string0 = `Unlock the Ardent mace once you've reached ${TOSTRING_LOCALISED(400, 1)} sprinkled petals of love. Ironman players cannot unlock this.`;
            } else {
                string0 = `Unlocked! You own the ${OC_NAME(33981 as obj)}. If you lose it then you can reclaim another from Diango in Draynor.`;
            };
            break;
        }
        case 103743554: {
            if ((varbitplayer_26855 == 0)) {
                string0 = `Unlock the Heartseeker crossbow once you've reached ${TOSTRING_LOCALISED(400, 1)} crushed petals of hate. Ironman players cannot unlock this.`;
            } else {
                string0 = `Unlocked! You own the ${OC_NAME(33993 as obj)}. If you lose it then you can reclaim another from Diango in Draynor.`;
            };
            break;
        }
        case 103743548: {
            if ((varbitplayer_26856 == 0)) {
                string0 = `Unlock the Lovers medallion once you've reached ${TOSTRING_LOCALISED(1000, 1)} sprinkled petals of love.`;
            } else {
                string0 = `Unlocked! You own the ${OC_NAME(34005 as obj)}. If you lose it then you can reclaim another from Diango in Draynor.`;
            };
            break;
        }
        case 103743552: {
            if ((varbitplayer_26857 == 0)) {
                string0 = `Unlock the Haters medallion once you've reached ${TOSTRING_LOCALISED(1000, 1)} crushed petals of hate.`;
            } else {
                string0 = `Unlocked! You own the ${OC_NAME(34006 as obj)}. If you lose it then you can reclaim another from Diango in Draynor.`;
            };
            break;
        }
        case 103743547: {
            if ((varbitplayer_26858 == 0)) {
                string0 = `Unlock the Crown of the fallen once you've reached ${TOSTRING_LOCALISED(1250, 1)} sprinkled petals of love and ${TOSTRING_LOCALISED(1250, 1)} crushed petals of hate.`;
            } else {
                string0 = `Unlocked! You own the ${OC_NAME(34009 as obj)}. If you lose it then you can reclaim another from Diango in Draynor.`;
            };
            break;
        }
        case 103743510: {
            string0 = "Sprinkle your rose petals into the love side to fill the bar and unlock rewards.";
            break;
        }
        case 103743509: {
            string0 = "Crush your rose petals into the hate side to fill the bar and unlock rewards.";
            break;
        }
        case 103743513: {
            string0 = "You can acquire rose petals through killing, skilling, daily challenges, trading (including GE), and Treasure Hunter.";
            break;
        }
        case 103743508: {
            string0 = "With rose petals you can make love potions as well as unlock previous year Valentine rewards that you may have missed.";
            break;
        }
        case 103743564: {
            string0 = "You can't sprinkle any more petals.";
            break;
        }
        case 103743572: {
            string0 = "You can't crush any more petals.";
            break;
        }
        case 103743598: {
            string0 = "Input an amount, press 'Enter', and then click 'Accept'.";
            break;
        }
        case 103743491: {
            string0 = "The time until rose petals will stop being awarded.";
            break;
        }
    };
    script3877(string0, int0, -1);
    return;
}