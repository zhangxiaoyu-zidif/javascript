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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ConfigMapEnvSource', 'io.kubernetes.js/io.kubernetes.js.models/V1SecretEnvSource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ConfigMapEnvSource'), require('./V1SecretEnvSource'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1EnvFromSource = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ConfigMapEnvSource, root.KubernetesJsClient.V1SecretEnvSource);
  }
}(this, function(ApiClient, V1ConfigMapEnvSource, V1SecretEnvSource) {
  'use strict';




  /**
   * The V1EnvFromSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1EnvFromSource
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1EnvFromSource</code>.
   * EnvFromSource represents the source of a set of ConfigMaps
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1EnvFromSource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V1EnvFromSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1EnvFromSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1EnvFromSource} The populated <code>V1EnvFromSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configMapRef')) {
        obj['configMapRef'] = V1ConfigMapEnvSource.constructFromObject(data['configMapRef']);
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('secretRef')) {
        obj['secretRef'] = V1SecretEnvSource.constructFromObject(data['secretRef']);
      }
    }
    return obj;
  }

  /**
   * The ConfigMap to select from
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ConfigMapEnvSource} configMapRef
   */
  exports.prototype['configMapRef'] = undefined;
  /**
   * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * The Secret to select from
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1SecretEnvSource} secretRef
   */
  exports.prototype['secretRef'] = undefined;



  return exports;
}));


