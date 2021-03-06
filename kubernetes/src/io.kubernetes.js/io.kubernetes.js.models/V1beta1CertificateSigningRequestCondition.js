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
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1CertificateSigningRequestCondition = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1beta1CertificateSigningRequestCondition model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestCondition
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1CertificateSigningRequestCondition</code>.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestCondition
   * @class
   * @param type {String} request approval state, currently Approved or Denied.
   */
  var exports = function(type) {
    var _this = this;




    _this['type'] = type;
  };

  /**
   * Constructs a <code>V1beta1CertificateSigningRequestCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestCondition} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1CertificateSigningRequestCondition} The populated <code>V1beta1CertificateSigningRequestCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastUpdateTime')) {
        obj['lastUpdateTime'] = ApiClient.convertToType(data['lastUpdateTime'], 'Date');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * timestamp for the last update to this condition
   * @member {Date} lastUpdateTime
   */
  exports.prototype['lastUpdateTime'] = undefined;
  /**
   * human readable message with details about the request state
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * brief reason for the request state
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * request approval state, currently Approved or Denied.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


