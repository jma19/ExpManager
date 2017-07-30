package com.uci.mode;

/**
 * Created by jumn on 7/28/17.
 */
public enum ExpStatus {
    /**
     * when
     * loading the es domain
     */
    LOADING_ES_DOMAIN(1),
    /**
     * after the cluster is active, and chaos mokeny is on their way
     */
    ACTIVE(2),
    /**
     * when the experiment is stopped
     */
    FININSHING(3);

    Integer val;

    ExpStatus(Integer val) {
        this.val = val;
    }


    public ExpStatus valueOf(Integer val) {
        return LOADING_ES_DOMAIN;
    }

    public Integer getVal() {
        return val;
    }
}
