package com.uci.mode;

/**
 * Created by jumn on 7/27/17.
 */
public interface ESConfigConstant {

    String DEFAULT_POLICY_PATH = "/data/accesspolicy.json";

    /**
     * ES version
     */
    enum Version {
        _5_1("5.1"), _5_3("5.3");

        Version(String version) {
            version = version;
        }

        String version;

        public String getVersion() {
            return version;
        }
    }

    enum InstanceType {

        M4_LARGE_ES("m4.large.elasticsearch");

        InstanceType(String type) {
            this.type = type;
        }

        String type;
    }

    /**
     * EBS default value
     */
    int DEFAULT_EBS_SIZE = 10;

    /**
     *
     */
    boolean ENABLE_MASTER = false;

}
