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
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestCondition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1beta1CertificateSigningRequestCondition'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1CertificateSigningRequestStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1beta1CertificateSigningRequestCondition);
  }
}(this, function(ApiClient, V1beta1CertificateSigningRequestCondition) {
  'use strict';




  /**
   * The V1beta1CertificateSigningRequestStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestStatus
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1CertificateSigningRequestStatus</code>.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestStatus
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1beta1CertificateSigningRequestStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestStatus} The populated <code>V1beta1CertificateSigningRequestStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('certificate')) {
        obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], [V1beta1CertificateSigningRequestCondition]);
      }
    }
    return obj;
  }

  /**
   * If request was approved, the controller will place the issued certificate here.
   * @member {String} certificate
   */
  exports.prototype['certificate'] = undefined;
  /**
   * Conditions applied to the request, such as approval or denial.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestCondition>} conditions
   */
  exports.prototype['conditions'] = undefined;



  return exports;
}));


