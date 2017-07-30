package com.uci.mode;


/**
 * Created by jumn on 7/27/17.
 */
public class ExperimentConfig {
    //uuid
    private String name;
    //es domain config
    private ESDomainConfig esDomainConfig;
    private ChaosMonkeyConfig chaosMonkeyConfig;
    private Long startTime;
    private Long endTime;
    private ExpStatus status;

    public ESDomainConfig getEsDomainConfig() {
        return esDomainConfig;
    }

    public ExperimentConfig setEsDomainConfig(ESDomainConfig esDomainConfig) {
        this.esDomainConfig = esDomainConfig;
        return this;
    }

    public ExpStatus getStatus() {
        return status;
    }

    public ExperimentConfig setStatus(ExpStatus status) {
        this.status = status;
        return this;
    }

    public String getName() {
        return name;
    }

    public ExperimentConfig setName(String name) {
        this.name = name;
        return this;
    }


    public ChaosMonkeyConfig getChaosMonkeyConfig() {
        return chaosMonkeyConfig;
    }

    public ExperimentConfig setChaosMonkeyConfig(ChaosMonkeyConfig chaosMonkeyConfig) {
        this.chaosMonkeyConfig = chaosMonkeyConfig;
        return this;
    }

    public Long getStartTime() {
        return startTime;
    }

    public ExperimentConfig setStartTime(Long startTime) {
        this.startTime = startTime;
        return this;
    }

    public Long getEndTime() {
        return endTime;
    }

    public ExperimentConfig setEndTime(Long endTime) {
        this.endTime = endTime;
        return this;
    }

    @Override
    public String toString() {
        return "ExperimentConfig{" +
                "name='" + name + '\'' +
                ", esDomainConfig=" + esDomainConfig +
                ", chaosMonkeyConfig=" + chaosMonkeyConfig +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", status=" + status +
                '}';
    }
}
