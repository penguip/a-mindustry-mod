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
            explosiveness = heatCapacity = .65f;
            viscosity = 0.3f;
            color = Color.valueOf("5c3a6b");
            coolant = false;
        }};
    }
}

