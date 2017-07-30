package com.uci.mode;

/**
 * Created by jumn on 7/30/17.
 */
public enum TimeUnit {

    DAY("DAY"), HOUR("HOUR"), MINUTE("MINUTE");


    String val;

    TimeUnit(String val) {
        this.val = val;
    }

    public static TimeUnit transform(String val) {
        final TimeUnit[] values = TimeUnit.values();
        for (TimeUnit timeUnit : values) {
            if (timeUnit.val.equals(val)) {
                return timeUnit;
            }
        }
        return null;
    }

}
