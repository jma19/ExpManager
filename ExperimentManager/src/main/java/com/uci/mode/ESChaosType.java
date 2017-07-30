package com.uci.mode;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by jumn on 7/27/17.
 */
public enum ESChaosType {

    ICDownChaosType,
    ICFailToStartChaosType,
    FillDiskChaosType,
    DetachVolumesChaosType,
    NullRouteChaosType,
    FailDnsChaosType,
    FailDynamoDbChaosType,
    NetworkCorruptionChaosType,
    NetworkLatencyChaosType,
    NetworkLossChaosType,
    BurnIoChaosType,
    KillProcessesChaosType,
    BlockAllNetworkTrafficChaosType,
    BurnCpuChaosType,
    FailS3ChaosType,
    FailEc2ChaosType,
    ShutdownInstanceChaosType,
    RebootInstanceChaosTyp,

    CorruptSnapshotChaosType("CorruptSnapshot"),
    DataGoneChaosType("DataGone"),
    DegradeVolumesChaosType("DegradeVolumes"),
    HotKeysChaosType("HotKeys"),
    ReadonlyVolumesChaosType("ReadonlyVolumes"),
    ReplicaUnassignedChaosType("ReplicaUnassigned");

    private String name;

    ESChaosType(String name) {
        this.name = name;
    }

    ESChaosType() {
    }

    public String getName() {
        return name;
    }

    /**
     * transform an string name to enum ESChaos Monkey
     *
     * @param name
     * @return
     */
    public static ESChaosType from(String name) {
        for (ESChaosType elem : ESChaosType.values()) {
            if (elem.name.equalsIgnoreCase(name)) {
                return elem;
            }
        }
        return null;
    }

    /**
     * transform an string name to enum ESChaos Monkey
     *
     * @param list
     * @return
     */
    public static List<ESChaosType> from(List<String> list) {
        return list.stream().map(val -> from(val)).collect(Collectors.toList());
    }

    @Override
    public String toString() {
        return "ESChaosType{" +
                "name='" + name + '\'' +
                '}';
    }
}
