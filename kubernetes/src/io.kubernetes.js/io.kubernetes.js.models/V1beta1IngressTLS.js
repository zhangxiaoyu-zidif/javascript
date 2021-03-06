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
    root.KubernetesJsClient.V1beta1IngressTLS = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1beta1IngressTLS model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1IngressTLS
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1IngressTLS</code>.
   * IngressTLS describes the transport layer security associated with an Ingress.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1IngressTLS
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1beta1IngressTLS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1IngressTLS} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1IngressTLS} The populated <code>V1beta1IngressTLS</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hosts')) {
        obj['hosts'] = ApiClient.convertToType(data['hosts'], ['String']);
      }
      if (data.hasOwnProperty('secretName')) {
        obj['secretName'] = ApiClient.convertToType(data['secretName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
   * @member {Array.<String>} hosts
   */
  exports.prototype['hosts'] = undefined;
  /**
   * SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the \"Host\" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
   * @member {String} secretName
   */
  exports.prototype['secretName'] = undefined;



  return exports;
}));


