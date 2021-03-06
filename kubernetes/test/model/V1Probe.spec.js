/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V1Probe();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Probe', function() {
    it('should create an instance of V1Probe', function() {
      // uncomment below and update the code to test V1Probe
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be.a(KubernetesJsClient.V1Probe);
    });

    it('should have the property exec (base name: "exec")', function() {
      // uncomment below and update the code to test the property exec
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

    it('should have the property failureThreshold (base name: "failureThreshold")', function() {
      // uncomment below and update the code to test the property failureThreshold
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

    it('should have the property httpGet (base name: "httpGet")', function() {
      // uncomment below and update the code to test the property httpGet
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

    it('should have the property initialDelaySeconds (base name: "initialDelaySeconds")', function() {
      // uncomment below and update the code to test the property initialDelaySeconds
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

    it('should have the property periodSeconds (base name: "periodSeconds")', function() {
      // uncomment below and update the code to test the property periodSeconds
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

    it('should have the property successThreshold (base name: "successThreshold")', function() {
      // uncomment below and update the code to test the property successThreshold
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

    it('should have the property tcpSocket (base name: "tcpSocket")', function() {
      // uncomment below and update the code to test the property tcpSocket
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

    it('should have the property timeoutSeconds (base name: "timeoutSeconds")', function() {
      // uncomment below and update the code to test the property timeoutSeconds
      //var instane = new KubernetesJsClient.V1Probe();
      //expect(instance).to.be();
    });

  });

}));
