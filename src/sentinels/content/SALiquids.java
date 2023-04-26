package sentinels.content;

import arc.graphics.*;
import mindustry.content.*;
import mindustry.type.*;

public class SALiquids{
    public static Liquid
    pugneum;

    public static void load() {
        pugneum = new Liquid("pugneum"){{
            temperature = 0f;
            flammability = 0f;
            explosiveness = .65f;
            viscosity = 0.3f;
            color = lightColor = Color.valueOf("F58859");
            hideDetails = false;
        }};
    }
}

