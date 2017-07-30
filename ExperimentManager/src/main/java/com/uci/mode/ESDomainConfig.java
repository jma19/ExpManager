package com.uci.mode;

/**
 * Created by jumn on 7/27/17.
 */
public class ESDomainConfig{
    private String domainName;
    private Integer instanceCount;
    private String version;


    public String getDomainName() {
        return domainName;
    }

    public ESDomainConfig setDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }

    public Integer getInstanceCount() {
        return instanceCount;
    }

    public ESDomainConfig setInstanceCount(Integer instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }

    public String getVersion() {
        return version;
    }

    public ESDomainConfig setVersion(String version) {
        this.version = version;
        return this;
    }

    @Override
    public String toString() {
        return "ESDomainConfig{" +
                "domainName='" + domainName + '\'' +
                ", instanceCount=" + instanceCount +
                ", version='" + version + '\'' +
                '}';
    }
}
