package com.uci.api;

import com.google.common.collect.Lists;
import com.uci.mode.*;
import com.uci.mode.ESConfigConstant.Version;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by jumn on 7/29/17.
 */
@RestController
public class ExpManagerController {

    private Map<String, ExperimentConfig> map = new HashMap<>();

    /**
     * submit a chaos monkey attack to an es domain
     * <p>
     * asy api
     *
     * @param expName       experiment name
     * @param domainName    es domain name
     * @param instanceCount the instance count number
     * @param version       the es version
     * @param freq          attack frequency
     * @param unit          attack frequency unit
     * @param chaosTypes    attack type list
     * @param tools
     */
    @RequestMapping(path = "/submit", method = RequestMethod.POST)
    public Response sumbit(@RequestParam("expName") String expName,
                           @RequestParam("domainName") String domainName,
                           @RequestParam("instanceCount") Integer instanceCount,
                           @RequestParam("version") String version,
                           @RequestParam("frequency") Integer freq,
                           @RequestParam("unit") String unit,
                           @RequestParam("chaosType") List<String> chaosTypes,
                           @RequestParam("tools") String tools) {
        final ExperimentConfig experimentConfig = new ExperimentConfig();
        final ChaosMonkeyConfig chaosMonkeyConfig = new ChaosMonkeyConfig()
                .setFrequency(freq)
                .setEsChaosTypes(ESChaosType.from(chaosTypes))
                .setDomainName(domainName)
                .setTimeUnit(TimeUnit.transform(unit));

        final ESDomainConfig esDomainConfig = new ESDomainConfig()
                .setDomainName(domainName)
                .setInstanceCount(instanceCount)
                .setVersion(version);

        experimentConfig.setStartTime(System.currentTimeMillis())
                .setName(expName)
                .setChaosMonkeyConfig(chaosMonkeyConfig)
                .setEsDomainConfig(esDomainConfig)
                .setStatus(ExpStatus.LOADING_ES_DOMAIN);

        map.put(expName, experimentConfig);

        return Response.success(experimentConfig);
    }

    /**
     * stop experiments:
     * delete es domain, and stop chaos monkey thread
     *
     * @return
     */
    @RequestMapping(path = "/stop", method = RequestMethod.POST)
    public Response stop(@RequestParam("expName") String expName) {

        return Response.success("OK");
    }

    /**
     * delete experiments:
     * delete experiment config
     * delete es domain, and stop chaos monkey thread
     *
     * @return
     */
    @RequestMapping(path = "/delete", method = RequestMethod.POST)
    public Response delete(@RequestParam("expName") String expName) {
        map.remove(expName);
        return Response.success("OK");
    }


    /**
     * get all experiment lists
     *
     * @return
     */
    @RequestMapping(path = "/getAllExps", method = RequestMethod.GET)
    public Response getAllExps() {

        return Response.success(map.values());
    }


    /**
     * get all experiment lists
     *
     * @return
     */
    @RequestMapping(path = "/getExpDetail", method = RequestMethod.GET)
    public Response getExpDetail(@RequestParam("expName") String expName) {
        return Response.success(map.get(expName));
    }


    /**
     * get all support attack types
     *
     * @return
     */
    @RequestMapping(path = "/getAllChaosTypes", method = RequestMethod.GET)
    public Response getAllAttackTypes() {
        final Stream<ESChaosType> stream = Arrays.stream(ESChaosType.values());
        return Response.success(stream.map(val -> val.getName()).collect(Collectors.toList()));
    }

    /**
     * getVerson List
     */


    /**
     * get all supported es version attack types
     *
     * @return
     */
    @RequestMapping(path = "/getAllVersons", method = RequestMethod.GET)
    public Response getVersions() {
        final Stream<Version> stream = Arrays.stream(Version.values());
        return Response.success(stream.map(val -> val.getVersion()).collect(Collectors.toList()));
    }


}
