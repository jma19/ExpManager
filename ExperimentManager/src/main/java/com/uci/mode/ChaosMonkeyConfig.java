package com.uci.mode;

import java.util.List;

/**
 * Created by jumn on 7/27/17.
 */
public class ChaosMonkeyConfig {
    
    private String domainName;
    
    //attack frequency
    private Integer frequency;
    //
    private TimeUnit timeUnit;
    

    private List<ESChaosType>  esChaosTypes;
    
    
    public Integer getFrequency() {
        return frequency;
    }

    public ChaosMonkeyConfig setFrequency(Integer frequency) {
        this.frequency = frequency;
        return this;
    }

    public String getDomainName() {
        return domainName;
    }

    public ChaosMonkeyConfig setDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }

    public TimeUnit getTimeUnit() {
        return timeUnit;
    }

    public ChaosMonkeyConfig setTimeUnit(TimeUnit timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }

    public List<ESChaosType> getEsChaosTypes() {
        return esChaosTypes;
    }

    public ChaosMonkeyConfig setEsChaosTypes(List<ESChaosType> esChaosTypes) {
        this.esChaosTypes = esChaosTypes;
        return this;
    }

    @Override
    public String toString() {
        return "ChaosMonkeyConfig{" +
                "domainName='" + domainName + '\'' +
                ", frequency=" + frequency +
                ", timeUnit=" + timeUnit +
                ", esChaosTypes=" + esChaosTypes +
                '}';
    }
}
