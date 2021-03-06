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
    instance = new KubernetesJsClient.V1SubjectAccessReviewSpec();
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

  describe('V1SubjectAccessReviewSpec', function() {
    it('should create an instance of V1SubjectAccessReviewSpec', function() {
      // uncomment below and update the code to test V1SubjectAccessReviewSpec
      //var instane = new KubernetesJsClient.V1SubjectAccessReviewSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V1SubjectAccessReviewSpec);
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instane = new KubernetesJsClient.V1SubjectAccessReviewSpec();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new KubernetesJsClient.V1SubjectAccessReviewSpec();
      //expect(instance).to.be();
    });

    it('should have the property nonResourceAttributes (base name: "nonResourceAttributes")', function() {
      // uncomment below and update the code to test the property nonResourceAttributes
      //var instane = new KubernetesJsClient.V1SubjectAccessReviewSpec();
      //expect(instance).to.be();
    });

    it('should have the property resourceAttributes (base name: "resourceAttributes")', function() {
      // uncomment below and update the code to test the property resourceAttributes
      //var instane = new KubernetesJsClient.V1SubjectAccessReviewSpec();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KubernetesJsClient.V1SubjectAccessReviewSpec();
      //expect(instance).to.be();
    });

  });

}));
